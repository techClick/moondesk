import React from 'react';
import Papa from 'papaparse';
import { toast } from 'react-toastify';
import { DataSheet, SheetBuilderInput } from 'types/types';
import { getStorageItem, setStorageItem } from 'views/App/utils/utils';
import AdditionDialogue from '../components/AdditionDialogue';

let columns: SheetBuilderInput;
type UploadedSheetResult = {
  dataSheet: DataSheet,
  numericalErrors: number,
  additionsMade: number,
};
let uploadedSheetResult: UploadedSheetResult = {
  dataSheet: [],
  numericalErrors: 0,
  additionsMade: 0,
};

const getIsUploadError = function getIsUploadError(input: SheetBuilderInput) {
  const errorTmp: any = { source: false, amount: false };
  if (!input.amount) {
    errorTmp.amount = 'Required';
  }
  if (!input.source) {
    errorTmp.source = 'Required';
  }
  return errorTmp;
};

export const uploadCSV = function uploadCSV(input: SheetBuilderInput, setError: Function) {
  const errorTmp = getIsUploadError(input);
  setError(errorTmp);
  if (!errorTmp.amount && !errorTmp.source) {
    const fileUploader = document.getElementById('uploadSheet');
    if (fileUploader) {
      fileUploader.click();
    }
  }
};

const getIsNotANumber = function getIsNotANumber(amount: string | null): boolean {
  if (isNaN(Number(amount)) || amount?.includes('-')
    || amount?.includes('+') || amount?.includes('e')) return true;
  return false;
};

const sendToast = function sendToast(
  uploadedSheet: DataSheet,
  numericalErrors: number,
): void {
  if (uploadedSheet.length <= 0) {
    if (numericalErrors > 0) {
      toast(`No data was loaded. 
        The ${columns.amount} column in your file contains non numerical 
        entries`, { type: 'error', autoClose: 12000 });
    } else {
      toast(
        `Data upload failed. The CSV file does not contain the columns ${columns.group && ' '}
        ${columns.group && columns.group.toUpperCase()}${columns.group && ','}
        ${' '}${columns.source.toUpperCase()}
        and ${columns.amount.toUpperCase()} combined.`,
        { type: 'error', autoClose: 15000 },
      );
    }
  } else {
    const rawCSVData = JSON.parse(getStorageItem('rawCSVData_income'));
    toast(
      `Successfully added ${uploadedSheet.length}/${rawCSVData.length} entries`,
      { type: 'success', autoClose: numericalErrors > 0 ? 9000 : 5000 },
    );
    if (numericalErrors > 0) {
      toast(`${numericalErrors} non numerical entries in the 
        ${columns.amount.toUpperCase()} column
        were ignored.`, { type: 'warning', autoClose: 12000 });
    }
  }
};

const saveCSVtoSheet = function saveCSVtoSheet(
  showNewSheet: Function,
): void {
  const uploadedSheet: DataSheet = uploadedSheetResult.dataSheet;
  const oldSheet: DataSheet = JSON.parse(getStorageItem('new_income') || '[]');
  const newSheet: DataSheet = [...oldSheet, ...uploadedSheet];
  setStorageItem('new_income', JSON.stringify(newSheet));
  showNewSheet(newSheet);
  sendToast(uploadedSheet, uploadedSheetResult.numericalErrors);
};

const getAdditonResults = function getAdditonResults(
  uploadedSheet: DataSheet,
  line: any,
  keys: any,
) {
  const found = uploadedSheet.find((entry) => {
    return line[keys.group].toLowerCase() === entry.group?.toLowerCase()
      && line[keys.source].toLowerCase() === entry.source.toLowerCase();
  });
  let index = -1;
  if (found) {
    index = uploadedSheet.indexOf(found);
  }
  return { isExistsAlready: found, source: uploadedSheet[index]?.source };
};

const saveCSVStart = function saveCSVStart(
  showNewSheet: Function,
  setShowPopup: Function,
) {
  const columnEntries = JSON.parse(getStorageItem('columnEntry_income'));
  columns = {
    group: columnEntries.group.toLowerCase(),
    source: columnEntries.source.toLowerCase(),
    amount: columnEntries.amount.toLowerCase(),
  };
  const rawCSVData = JSON.parse(getStorageItem('rawCSVData_income'));
  const uploadedSheet: DataSheet = [];
  let count = 0;
  let additionsCount = 0;
  const additionSources = [];
  for (const line of rawCSVData) {
    const keys: any = { source: null, amount: null };
    for (const key of Object.keys(line)) {
      if (columns.group) {
        if (key.toLowerCase() === columns.group) keys.group = key;
      }
      if (key.toLowerCase() === columns.source) keys.source = key;
      if (key.toLowerCase() === columns.amount) keys.amount = key;
      if (keys.source && keys.amount) {
        if (columns.group && keys.group) {
          break;
        } else if (!columns.group) break;
      }
    }
    const amountIsNotANumber = getIsNotANumber(line[keys.amount] || '');
    if (amountIsNotANumber) {
      count += 1;
    } else if (columns.group) {
      const { isExistsAlready, source } = getAdditonResults(uploadedSheet, line, keys);
      if (keys.group && keys.source && keys.amount) {
        if (isExistsAlready) {
          additionsCount += 1;
          additionSources.push(source);
        } else {
          uploadedSheet.push({
            group: line[keys.group],
            amount: Number(line[keys.amount]),
            source: line[keys.source],
          });
        }
      }
    } else if (keys.source && keys.amount) {
      const { isExistsAlready, source } = getAdditonResults(uploadedSheet, line, keys);
      if (isExistsAlready) {
        additionsCount += 1;
        additionSources.push(source);
      } else {
        uploadedSheet.push({
          amount: Number(line[keys.amount]),
          source: line[keys.source],
        });
      }
    }
  }
  uploadedSheetResult = {
    dataSheet: uploadedSheet,
    numericalErrors: count,
    additionsMade: additionsCount,
  };
  if (uploadedSheet.length <= 0) {
    sendToast(uploadedSheet, uploadedSheetResult.numericalErrors);
  } else if (additionsCount > 0) {
    setShowPopup({
      income: <AdditionDialogue
        onComplete={showNewSheet}
        label={' '}
      />,
      resources: false,
    });
  }
  /// check if to combine similar field amounts in rewCSVData or in StorageData;
  /// saveCSVtoSheet(showNewSheet);
};

export const getDataFromCSV = function getDataFromCSV(
  files: any,
  showNewSheet: Function,
  setShowPopup: Function,
) {
  Papa.parse(files[0], {
    complete: (result) => {
      setStorageItem('rawCSVData_income', JSON.stringify(result.data));
      saveCSVStart(showNewSheet, setShowPopup);
    },
    header: true,
  });
};

export const useDirectly = function useDirectly(input: SheetBuilderInput, setError: Function) {
  const errorTmp = getIsUploadError(input);
  if (isNaN(Number(input.amount))) errorTmp.amount = 'Numbers only';
  if (input.amount.includes('-')
    || input.amount.includes('+')) errorTmp.amount = 'Don\'t use operators';
  if (input.amount.includes('e')) errorTmp.amount = 'Numbers only';
  setError(errorTmp);
  if (!errorTmp.amount && !errorTmp.source) {
    // proceed
  }
};
