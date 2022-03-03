import React from 'react';
import Papa from 'papaparse';
import { toast } from 'react-toastify';
import { DataSheet, RowBuilderInput, InputErrorCB, SheetEntry } from 'types/types';
import { getStorageItem, setStorageItem, getCurrentTab } from 'views/App/utils/utils';
import { getRowEntryId, getUseRangeId } from 'views/App/utils/GlobalUtils';
import AdditionDialogue from '../components/AdditionDialogue';

export const importType: any = {
  csv: 'CSV',
  excel: 'EXCEL',
  dbf: '.db File',
};

let rows: RowBuilderInput;
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
  const input: RowBuilderInput = JSON.parse(getStorageItem(getRowEntryId()) || '{}');
  const errorTmp: InputErrorCB = { source: false, amount: false };
  if (!input.amount) {
    errorTmp.amount = 'Required';
  }
  if (!input.source) {
    errorTmp.source = 'Required';
  }
  const useRange = getStorageItem(getUseRangeId());
  if (useRange && !input.timestamp) {
    errorTmp.timestamp = 'Required when using date range';
  }
  return errorTmp;
};

export const uploadCSV = function uploadCSV(setError: Function) {
  const errorTmp = getIsUploadError();
  setError(errorTmp);
  if (!errorTmp.amount && !errorTmp.source && !errorTmp.timestamp) {
    const fileUploader = document.getElementById('uploadSheet');
    if (fileUploader) {
      fileUploader.click();
    }
  } else {
    document.getElementById('importColsWhiteCard')?.scroll({ top: 0, behavior: 'smooth' });
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
        The ${rows.amount} column in your file contains non numerical 
        entries`, { type: 'error', autoClose: 12000 });
    } else {
      toast(
        `Data upload failed. The CSV file does not contain the rows ${rows.group && ' '}
        ${rows.group && rows.group.toUpperCase()}${rows.group && ','}
        ${' '}${rows.source?.toUpperCase()}
        and ${rows.amount?.toUpperCase()} combined.`,
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
        ${rows.amount?.toUpperCase()} column
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
  const rawCSVData = JSON.parse(getStorageItem(`rawCSVData_${getCurrentTab()}`));
  console.log('start', rawCSVData);
  const newSheet: DataSheet = JSON.parse(getStorageItem(`new_${getCurrentTab()}`) || '[]');
  let count = 0;
  let successfulExtractions = 0;
  const additionSources: Array<string> = [];
  for (const line of rawCSVData) {
    const keys: any = { source: null, amount: null };
    for (const key of Object.keys(line)) {
      if (rows.group) {
        if (key.toLowerCase() === rows.group) keys.group = key;
      }
      if (key.toLowerCase() === rows.source) keys.source = key;
      if (key.toLowerCase() === rows.amount) keys.amount = key;
      if (keys.source && keys.amount) {
        if (rows.group && keys.group) {
          break;
        } else if (!rows.group) break;
      }
    }
    const amountIsNotANumber = getIsNotANumber(line[keys.amount] || '');
    if (amountIsNotANumber) {
      count += 1;
    } else if (rows.group) {
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
            timestamp: rows.sheetDate1 || new Date(),
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
          timestamp: rows.sheetDate1 || new Date(),
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

let parserData: any = [];
let allKeysPresent: boolean = false;
export const getDataFromCSV = function getDataFromCSV(
  files: any,
  showNewSheet: Function,
  setShowPopup: Function,
) {
  parserData = [];
  allKeysPresent = false;
  const rowEntries: RowBuilderInput = JSON.parse(getStorageItem(getRowEntryId()));
  rows = {
    group: rowEntries.group?.toLowerCase(),
    source: rowEntries.source?.toLowerCase(),
    amount: rowEntries.amount?.toLowerCase(),
    timestamp: rowEntries.timestamp?.toLowerCase(),
  };
  const rowsHere = [
    rowEntries.source?.toLowerCase(),
    rowEntries.amount?.toLowerCase(),
  ];
  if (rowEntries.group) rowsHere.push(rowEntries.group?.toLowerCase());
  if (rowEntries.timestamp) rowsHere.push(rowEntries.timestamp?.toLowerCase());

  Papa.parse(files[0], {
    step: (row: any, parser) => {
      const uploadData: any = {};
      if (!allKeysPresent) {
        parser.pause();
        let timestampFound = true;
        if (rowEntries.timestamp) {
          timestampFound = false;
          for (const [key] of Object.entries(row.data)) {
            if (key.toLowerCase() === rowEntries.timestamp.toLowerCase()) {
              timestampFound = true;
            }
          }
        }
        if (timestampFound) {
          let keysFound = 0;
          for (const [key, value] of Object.entries(row.data)) {
            if (rowsHere.includes(key.toLowerCase())) {
              keysFound += 1;
              uploadData[key.toLowerCase()] = value;
            }
          }
          if (keysFound === rowsHere.length) {
            allKeysPresent = true;
            parserData.push(uploadData);
            parser.resume();
          } else {
            parser.abort();
          }
        } else {
          parser.abort();
        }
      } else {
        for (const [key, value] of Object.entries(row.data)) {
          if (rowsHere.includes(key.toLowerCase())) {
            uploadData[key.toLowerCase()] = value;
          }
        }
        parserData.push(uploadData);
      }
    },
    complete: () => {
      console.log('initial result', parserData);
      // setStorageItem(`rawCSVData_${getCurrentTab()}`, JSON.stringify(parserData));
      // saveCSVStart(showNewSheet, setShowPopup);
    },
    header: true,
    skipEmptyLines: true,
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
