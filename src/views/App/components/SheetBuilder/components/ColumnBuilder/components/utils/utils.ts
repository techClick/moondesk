import Papa from 'papaparse';
import { toast } from 'react-toastify';
import { DataSheet, SheetBuilderInput } from 'types/types';
import { getStorageItem, setStorageItem } from 'views/App/utils/utils';

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

type UploadedSheetResult = {
  dataSheet: DataSheet,
  numericalErrors: number
};

const getUploadedSheetResult = function getUploadedSheetResult(
  rawCSVData: any,
  columns: SheetBuilderInput,
): UploadedSheetResult {
  const uploadedSheet: DataSheet = [];
  let count = 0;
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
    if (columns.group) {
      if (keys.group && keys.source && keys.amount) {
        if (amountIsNotANumber) {
          count += 1;
        } else {
          uploadedSheet.push({
            group: line[keys.group],
            amount: Number(line[keys.amount]),
            source: line[keys.source],
          });
        }
      }
    } else if (keys.source && keys.amount) {
      if (amountIsNotANumber) {
        count += 1;
      } else {
        uploadedSheet.push({
          amount: Number(line[keys.amount]),
          source: line[keys.source],
        });
      }
    }
  }
  return { dataSheet: uploadedSheet, numericalErrors: count };
};

const sendToast = function sendToast(
  rawCSVData: any,
  columns: SheetBuilderInput,
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
        ${' '}${columns.source.toUpperCase()},
        and ${columns.amount.toString().toUpperCase()} combined.`,
        { type: 'error', autoClose: 15000 },
      );
    }
  } else {
    toast(
      `Successfully added ${uploadedSheet.length}/${rawCSVData.length} entries`,
      { type: 'success', autoClose: numericalErrors > 0 ? 9000 : 5000 },
    );
    if (numericalErrors > 0) {
      toast(`${numericalErrors} non numerical entries in the 
        ${columns.amount.toString().toUpperCase()} column
        were ignored.`, { type: 'warning', autoClose: 12000 });
    }
  }
};

const saveCSVtoSheet = function saveCSVtoSheet(
  rawCSVData: any,
  columns: SheetBuilderInput,
  showNewSheet: Function,
  uploadedSheetResult: UploadedSheetResult,
): void {
  const uploadedSheet: DataSheet = uploadedSheetResult.dataSheet;
  const oldSheet: DataSheet = JSON.parse(getStorageItem('new_income') || '[]');
  const newSheet: DataSheet = [...oldSheet, ...uploadedSheet];
  setStorageItem('new_income', JSON.stringify(newSheet));
  showNewSheet(newSheet);
  sendToast(rawCSVData, columns, uploadedSheet, uploadedSheetResult.numericalErrors);
};

const saveCSVStart = function saveCSVStart(rawCSVData: any, showNewSheet: Function) {
  const columnEntries = JSON.parse(getStorageItem('columnEntry_Income'));
  const columns: SheetBuilderInput = {
    group: columnEntries.group.toLowerCase(),
    source: columnEntries.source.toLowerCase(),
    amount: columnEntries.amount.toLowerCase(),
  };
  const uploadedSheetResult: UploadedSheetResult = getUploadedSheetResult(rawCSVData, columns);
  /// check if to combine similar field amounts in rewCSVData or in StorageData;
  saveCSVtoSheet(rawCSVData, columns, showNewSheet, uploadedSheetResult);
};

export const getDataFromCSV = function getDataFromCSV(files: any, showNewSheet: Function) {
  Papa.parse(files[0], {
    complete: (result) => saveCSVStart(result.data, showNewSheet),
    header: true,
  });
};

export const useDirectly = function useDirectly(input: SheetBuilderInput, setError: Function) {
  const errorTmp = getIsUploadError(input);
  if (isNaN(Number(input.amount))) errorTmp.amount = 'Numbers only';
  if (input.amount.toString().includes('-')
    || input.amount.toString().includes('+')) errorTmp.amount = 'Don\'t use operators';
  if (input.amount.toString().includes('e')) errorTmp.amount = 'Numbers only';
  setError(errorTmp);
  if (!errorTmp.amount && !errorTmp.source) {
    // proceed
  }
};
