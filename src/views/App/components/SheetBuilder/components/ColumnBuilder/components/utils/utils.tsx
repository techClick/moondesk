import React from 'react';
import Papa from 'papaparse';
import { toast } from 'react-toastify';
import { DataSheet, SheetBuilderInput } from 'types/types';
import { getStorageItem, setStorageItem } from 'views/App/utils/utils';
import { getCurrentTab } from 'views/App/components/utils/utils';
import AdditionDialogue from '../components/AdditionDialogue';

let columns: SheetBuilderInput;
type NewSheetResult = {
  dataSheet: DataSheet,
  numericalErrors: number,
  additions: Array<string>,
};
let newSheetResult: NewSheetResult = {
  dataSheet: [],
  numericalErrors: 0,
  additions: [],
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
        ${' '}${columns.source.toUpperCase()}
        and ${columns.amount.toUpperCase()} combined.`,
        { type: 'error', autoClose: 15000 },
      );
    }
  } else {
    const rawCSVData = JSON.parse(getStorageItem('rawCSVData_income'));
    toast(
      `Successfully added ${successfulExtractions}/${rawCSVData.length} entries`,
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
  successfulExtractions: number,
  setShowPopup: Function,
): void {
  const newSheet: DataSheet = newSheetResult.dataSheet;
  setStorageItem('new_income', JSON.stringify(newSheet));
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
  const found = newSheet.find((entry) => {
    return (line[keys.group] && entry.group
      && line[keys.group].toLowerCase() === entry.group.toLowerCase()
      && line[keys.source].toLowerCase() === entry.source.toLowerCase())
      || ((!line[keys.group] && !entry.group)
      && line[keys.source].toLowerCase() === entry.source.toLowerCase());
  });
  let index = -1;
  if (found) {
    index = newSheet.indexOf(found);
  }
  return { foundItem: found, index };
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
  const newSheet: DataSheet = JSON.parse(getStorageItem('new_income') || '[]');
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
          newSheet[index] = {
            ...newSheet[index],
            amount: Number(line[keys.amount]) + newSheet[index].amount,
          };
        } else {
          successfulExtractions += 1;
          newSheet.push({
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
        newSheet[index] = {
          ...newSheet[index],
          amount: Number(line[keys.amount]) + newSheet[index].amount,
        };
      } else {
        successfulExtractions += 1;
        newSheet.push({
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
