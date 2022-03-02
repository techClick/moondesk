import React from 'react';
import Papa from 'papaparse';
import { toast } from 'react-toastify';
import { DataSheet, RowBuilderInput, InputErrorCB } from 'types/types';
import { getStorageItem, setStorageItem, getCurrentTab } from 'views/App/utils/utils';
import { getRowEntryId } from 'views/App/utils/GlobalUtils';
import AdditionDialogue from '../components/AdditionDialogue';

export const importType: any = {
  csv: 'CSV',
  excel: 'EXCEL',
  dbf: '.db File',
};

let columns: RowBuilderInput;
type NewSheetResult = {
  dataSheet: DataSheet,
  numericalErrors: number,
  additions: Array<string>,
};
let newSheetResult: NewSheetResult = {
  dataSheet: { date: new Date(), data: [] },
  numericalErrors: 0,
  additions: [],
};

const getIsUploadError = function getIsUploadError() {
  const input: RowBuilderInput = JSON.parse(getStorageItem(getRowEntryId()));
  const errorTmp: InputErrorCB = { source: false, amount: false };
  if (!input.amount) {
    errorTmp.amount = 'Required';
  }
  if (!input.source) {
    errorTmp.source = 'Required';
  }
  return errorTmp;
};

export const uploadCSV = function uploadCSV(setError: Function) {
  const errorTmp = getIsUploadError();
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
  successfulExtractions: number,
  numericalErrors: number,
): void {
  if (successfulExtractions === 0) {
    if (numericalErrors > 0) {
      toast(`No data was loaded. 
        The ${columns.amount} column in your file contains non numerical 
        entries`, { type: 'error', autoClose: 12000 });
    } else {
      toast(
        `Data upload failed. The CSV file does not contain the columns ${columns.group && ' '}
        ${columns.group && columns.group.toUpperCase()}${columns.group && ','}
        ${' '}${columns.source?.toUpperCase()}
        and ${columns.amount?.toUpperCase()} combined.`,
        { type: 'error', autoClose: 15000 },
      );
    }
  } else {
    const rawCSVData = JSON.parse(getStorageItem(`rawCSVData_${getCurrentTab()}`));
    toast(
      `Successfully added ${successfulExtractions}/${rawCSVData.length} entries`,
      { type: 'success', autoClose: numericalErrors > 0 ? 9000 : 5000 },
    );
    if (numericalErrors > 0) {
      toast(`${numericalErrors} non numerical entries in the 
        ${columns.amount?.toUpperCase()} column
        were ignored.`, { type: 'warning', autoClose: 12000 });
    }
  }
};

const saveCSVtoSheet = function saveCSVtoSheet(
  showNewSheet: Function,
  successfulExtractions: number,
  setShowPopup: Function,
): void {
  const newSheet: DataSheet = newSheetResult.dataSheet;
  setStorageItem(`new_${getCurrentTab()}`, JSON.stringify(newSheet));
  localStorage.removeItem(`rawCSVData_${getCurrentTab()}`);
  showNewSheet(newSheet);
  setShowPopup({ income: null, resources: null });
  sendToast(successfulExtractions, newSheetResult.numericalErrors);
};

const getMatchingItemResults = function getMatchingItemResults(
  newSheet: DataSheet,
  line: any,
  keys: any,
) {
  const found = newSheet.data.find((entry) => {
    return (line[keys.group] && entry.group
      && line[keys.group].toLowerCase() === entry.group.toLowerCase()
      && line[keys.source].toLowerCase() === entry.source.toLowerCase())
      || ((!line[keys.group] && !entry.group)
      && line[keys.source].toLowerCase() === entry.source.toLowerCase());
  });
  let index = -1;
  if (found) {
    index = newSheet.data.indexOf(found);
  }
  return { foundItem: found, index };
};

const saveCSVStart = function saveCSVStart(
  showNewSheet: Function,
  setShowPopup: Function,
) {
  const rowEntries = JSON.parse(getStorageItem(getRowEntryId()));
  columns = {
    group: rowEntries.group.toLowerCase(),
    source: rowEntries.source.toLowerCase(),
    amount: rowEntries.amount.toLowerCase(),
  };
  const rawCSVData = JSON.parse(getStorageItem(`rawCSVData_${getCurrentTab()}`));
  const newSheet: DataSheet = JSON.parse(getStorageItem(`new_${getCurrentTab()}`) || '[]');
  let count = 0;
  let successfulExtractions = 0;
  const additionSources: Array<string> = [];
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
      const { foundItem, index } = getMatchingItemResults(newSheet, line, keys);
      if (keys.group && keys.source && keys.amount) {
        if (foundItem) {
          if (!additionSources.find((source) => source === foundItem.source.toUpperCase())) {
            additionSources.push(foundItem.source.toUpperCase());
          }
          successfulExtractions += 1;
          newSheet.data[index] = {
            ...newSheet.data[index],
            amount: Number(line[keys.amount]) + newSheet.data[index].amount,
          };
        } else {
          successfulExtractions += 1;
          newSheet.data.push({
            group: line[keys.group],
            amount: Number(line[keys.amount]),
            source: line[keys.source],
          });
        }
      }
    } else if (keys.source && keys.amount) {
      const { foundItem, index } = getMatchingItemResults(newSheet, line, keys);
      if (foundItem) {
        if (!additionSources.find((source) => source === foundItem.source.toUpperCase())) {
          additionSources.push(foundItem.source.toUpperCase());
        }
        successfulExtractions += 1;
        newSheet.data[index] = {
          ...newSheet.data[index],
          amount: Number(line[keys.amount]) + newSheet.data[index].amount,
        };
      } else {
        successfulExtractions += 1;
        newSheet.data.push({
          amount: Number(line[keys.amount]),
          source: line[keys.source],
        });
      }
    }
  }
  newSheetResult = {
    dataSheet: newSheet,
    numericalErrors: count,
    additions: additionSources,
  };
  if (successfulExtractions === 0) {
    sendToast(0, newSheetResult.numericalErrors);
  } else if (additionSources.length > 0) {
    setShowPopup({
      income: <AdditionDialogue
        onComplete={() => saveCSVtoSheet(showNewSheet, successfulExtractions, setShowPopup)}
        labels={additionSources}
      />,
      resources: null,
    });
  } else {
    saveCSVtoSheet(showNewSheet, successfulExtractions, setShowPopup);
  }
};

export const getDataFromCSV = function getDataFromCSV(
  files: any,
  showNewSheet: Function,
  setShowPopup: Function,
) {
  Papa.parse(files[0], {
    complete: (result) => {
      setStorageItem(`rawCSVData_${getCurrentTab()}`, JSON.stringify(result.data));
      saveCSVStart(showNewSheet, setShowPopup);
    },
    header: true,
  });
};

export const useDirectly = function useDirectly(setError: Function) {
  const input: RowBuilderInput = JSON.parse(getStorageItem(getRowEntryId()));
  const errorTmp: InputErrorCB = getIsUploadError();
  if (isNaN(Number(input.amount))) errorTmp.amount = 'Numbers only';
  if (input.amount?.includes('-')
    || input.amount?.includes('+')) errorTmp.amount = 'Don\'t use operators';
  if (input.amount?.includes('e')) errorTmp.amount = 'Numbers only';
  setError(errorTmp);
  if (!errorTmp.amount && !errorTmp.source) {
    // proceed
  }
};
