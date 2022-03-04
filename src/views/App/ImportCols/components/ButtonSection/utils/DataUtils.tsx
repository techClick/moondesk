import React from 'react';
import Papa from 'papaparse';
import { toast } from 'react-toastify';
import { DataSheet, RowBuild, Sheets } from 'types/types';
import {
  getStorageItem, setStorageItem, getCurrentTab, getImportType,
  getIsSameDay, getDateIsOlder, getDateIsNewer } from 'views/App/utils/utils';
import LoadingDialogue from 'views/App/components/LoadingDialogue/Loading';
import { getNewSheetId, getRawDataId, getRowEntryId, getUseRangeId } from 'views/App/utils/GlobalUtils';
import AdditionDialogue from '../components/AdditionDialogue';
import { getIsNotANumber } from './utils';

export const importType: any = {
  csv: 'CSV',
  excel: 'EXCEL',
  dbf: '.db',
};

let rows: RowBuild;
let parserData: any;
let numericalErrors: number;
let emptyErrors: number;
let emptyTimeErrors: number;
let dateFormatErrors: number;
let outOfDateErrors: number;
let successfulExtractions: number;
let timestampFound: boolean;

type NewSheetResult = {
  dataSheet: DataSheet[],
  additions: Array<string>,
};

let newSheetResult: NewSheetResult = {
  dataSheet: [],
  additions: [],
};

const sendToast = function sendToast(): void {
  if (!timestampFound) {
    toast(`No timestamp row with the name
      ${rows.timestamp?.toUpperCase()} was found`, { type: 'error', autoClose: 6000 });
  } else if (successfulExtractions === 0) {
    if (numericalErrors > 0 || emptyErrors > 0) {
      toast('Data upload failed', { type: 'error', autoClose: 12000 });
      if (numericalErrors > 0) {
        toast(`The ${rows.amount.toUpperCase()} row in your file contains non numerical 
          entries`, { type: 'error', autoClose: 12000 });
      }
      if (emptyErrors > 0) {
        toast('Empty entries were found', { type: 'error', autoClose: 12000 });
      }
      if (emptyTimeErrors > 0) {
        toast(`The ${rows.timestamp?.toUpperCase()}
          row contains empty date entries`, { type: 'error', autoClose: 12000 });
      }
      if (dateFormatErrors > 0) {
        toast(`The ${rows.timestamp?.toUpperCase()}
          row contains wrongly formatted dates`, { type: 'error', autoClose: 12000 });
      }
      if (outOfDateErrors > 0) {
        toast(`The ${rows.timestamp?.toUpperCase()} row contains ${outOfDateErrors} date(s) that 
        occur outside the selected date`, { type: 'error', autoClose: 12000 });
      }
    } else {
      toast(
        `Data upload failed. The ${importType[getImportType()]} 
        ${' '}file does not contain the rows ${rows.group && ' '}
        ${rows.group && rows.group.toUpperCase()}${rows.group && ','}
        ${' '}${rows.source.toUpperCase()}
        and ${rows.amount.toUpperCase()} combined.`,
        { type: 'error', autoClose: 15000 },
      );
    }
  } else {
    toast(
      `Successfully added ${successfulExtractions}/${parserData.length} entries`,
      { type: 'success', autoClose: (numericalErrors || emptyErrors) > 0 ? 10000 : 5000 },
    );
    if (numericalErrors > 0) {
      toast(`${numericalErrors} non numerical entries in the 
        ${rows.amount?.toUpperCase()} row
        were ignored.`, { type: 'warning', autoClose: 12000 });
    }
    if (emptyErrors > 0) {
      toast(`${emptyErrors} empty entr${emptyErrors > 1 ? 'ies' : 'y'}
      ${emptyErrors > 1 ? 'were' : 'was'} ignored.`, { type: 'warning', autoClose: 12000 });
    }
    if (emptyTimeErrors > 0) {
      toast(`${emptyTimeErrors} empty date entr${emptyTimeErrors > 1 ? 'ies' : 'y'}
      in ${rows.timestamp?.toUpperCase()} ${emptyTimeErrors > 1 ? 'were' : 'was'} 
      ignored.`, { type: 'warning', autoClose: 12000 });
    }
    if (dateFormatErrors > 0) {
      toast(`${dateFormatErrors} empty wrongly formatted date${dateFormatErrors > 1 ? 's' : ''}
      ${dateFormatErrors > 1 ? 'were' : 'was'} ignored.`, { type: 'warning', autoClose: 12000 });
    }
    if (outOfDateErrors > 0) {
      toast(`${outOfDateErrors} date${outOfDateErrors > 1 ? 's' : ''} that occur(s) outside the selected
        date ${outOfDateErrors > 1 ? 'were' : 'was'} ignored.`, { type: 'warning', autoClose: 12000 });
    }
  }
};

const saveUploadDatatoSheet = function saveUploadDatatoSheet(
  showNewSheet: Function,
  setShowPopup: Function,
): void {
  const sheets: Sheets = JSON.parse(getStorageItem(getNewSheetId()) || '{}');
  const newSheet: DataSheet[] = newSheetResult.dataSheet;
  localStorage.removeItem(getRawDataId());
  setStorageItem(getNewSheetId(), JSON.stringify({ ...sheets, [getCurrentTab()]: newSheet }));
  showNewSheet({ ...sheets, [getCurrentTab()]: newSheet });
  setShowPopup({});
  sendToast();
};

const getMatchingItemResults = function getMatchingItemResults(
  newSheet: DataSheet,
  line: any,
) {
  const found = newSheet.data.find((entry) => {
    return (rows.group && line[rows.group] && entry.group
      && line[rows.group].toLowerCase() === entry.group.toLowerCase()
      && line[rows.source].toLowerCase() === entry.source.toLowerCase())
      || (!rows.group && !entry.group
      && line[rows.source].toLowerCase() === entry.source.toLowerCase());
  });
  let index = -1;
  if (found) {
    index = newSheet.data.indexOf(found);
  }
  return { foundItem: found, index };
};

const saveUploadDataStart = function saveUploadDataStart(
  showNewSheet: Function,
  setShowPopup: Function,
) {
  const newSheet: DataSheet = { date: new Date(rows.sheetDate1), data: [] };
  const additionSources: Array<string> = [];
  for (const line of parserData) {
    const { foundItem, index } = getMatchingItemResults(newSheet, line);
    if (foundItem) {
      if (!additionSources.find((source) => source === foundItem.source.toUpperCase())) {
        additionSources.push(foundItem.source.toUpperCase());
      }
      newSheet.data[index] = {
        ...newSheet.data[index],
        amount: Number(line[rows.amount]) + newSheet.data[index].amount,
      };
    } else {
      newSheet.data.push({
        group: rows.group && line[rows.group],
        amount: Number(line[rows.amount]),
        source: line[rows.source],
      });
    }
  }
  newSheetResult = {
    dataSheet: [newSheet],
    additions: additionSources,
  };
  if (parserData.length === 0) {
    setShowPopup({});
    sendToast();
  } else if (additionSources.length > 0) {
    setShowPopup({
      income: <AdditionDialogue
        onComplete={() => saveUploadDatatoSheet(showNewSheet, setShowPopup)}
        labels={additionSources}
      />,
      resources: null,
    });
  } else {
    saveUploadDatatoSheet(showNewSheet, setShowPopup);
  }
};

let allKeysPresent: boolean = false;
export const getDataFromCSV = function getDataFromCSV(
  files: any,
  showNewSheet: Function,
  setShowPopup: Function,
) {
  parserData = [];
  allKeysPresent = false;
  numericalErrors = 0;
  emptyErrors = 0;
  emptyTimeErrors = 0;
  dateFormatErrors = 0;
  outOfDateErrors = 0;
  successfulExtractions = 0;
  const useRange = getStorageItem(getUseRangeId());
  rows = JSON.parse(getStorageItem(getRowEntryId()));
  const inputRows = [
    rows.source,
    rows.amount,
  ];
  if (rows.group) inputRows.push(rows.group);
  if (rows.timestamp) inputRows.push(rows.timestamp);

  Papa.parse(files[0], {
    step: (row: any, parser) => {
      const uploadData: any = {};
      if (!allKeysPresent) {
        parser.pause();
        timestampFound = true;
        if (rows.timestamp) {
          timestampFound = false;
          for (const [key] of Object.entries(row.data)) {
            if (key.toLowerCase() === rows.timestamp) {
              timestampFound = true;
            }
          }
        }
        if (timestampFound) {
          let keysFound = 0;
          for (const [key, value] of Object.entries(row.data)) {
            if (inputRows.includes(key.toLowerCase())) {
              keysFound += 1;
              uploadData[key.toLowerCase()] = value;
            }
          }
          if (keysFound === inputRows.length) {
            allKeysPresent = true;
            const amountIsNotANumber = getIsNotANumber(uploadData.amount);
            if (!uploadData[rows.source] || !uploadData[rows.amount]) {
              emptyErrors += 1;
            } else if (amountIsNotANumber) {
              numericalErrors += 1;
            } else if (rows.timestamp) {
              if (!uploadData[rows.timestamp]) {
                emptyTimeErrors += 1;
              } else if (isNaN(new Date(uploadData[rows.timestamp]).getTime())) {
                dateFormatErrors += 1;
              } else if (!useRange
                && !getIsSameDay(new Date(uploadData[rows.timestamp]), new Date(rows.sheetDate1))
              ) {
                outOfDateErrors += 1;
              } else if (useRange
                && (getDateIsOlder(rows.sheetDate1, new Date(uploadData[rows.timestamp]))
                || getDateIsNewer(rows.sheetDate2, new Date(uploadData[rows.timestamp])))) {
                outOfDateErrors += 1;
              } else {
                successfulExtractions += 1;
                parserData.push(uploadData);
              }
            } else {
              successfulExtractions += 1;
              parserData.push(uploadData);
            }
            parser.resume();
          } else {
            sendToast();
            parser.abort();
          }
        } else {
          sendToast();
          parser.abort();
        }
      } else {
        for (const [key, value] of Object.entries(row.data)) {
          if (inputRows.includes(key.toLowerCase())) {
            uploadData[key.toLowerCase()] = value;
          }
        }
        const amountIsNotANumber = getIsNotANumber(uploadData.amount);
        if (!uploadData[rows.source] || !uploadData[rows.amount]) {
          emptyErrors += 1;
        } else if (amountIsNotANumber) {
          numericalErrors += 1;
        } else if (rows.timestamp) {
          if (!uploadData[rows.timestamp]) {
            emptyTimeErrors += 1;
          } else if (isNaN(new Date(uploadData[rows.timestamp]).getTime())) {
            dateFormatErrors += 1;
          } else if (!useRange
            && !getIsSameDay(new Date(uploadData[rows.timestamp]), new Date(rows.sheetDate1))
          ) {
            outOfDateErrors += 1;
          } else if (useRange
            && (getDateIsOlder(rows.sheetDate1, new Date(uploadData[rows.timestamp]))
            || getDateIsNewer(rows.sheetDate2, new Date(uploadData[rows.timestamp])))) {
            outOfDateErrors += 1;
          } else {
            successfulExtractions += 1;
            parserData.push(uploadData);
          }
        } else {
          successfulExtractions += 1;
          parserData.push(uploadData);
        }
      }
    },
    complete: () => {
      console.log('initial result', parserData);
      setShowPopup({ incomeu: 4 });
      // setStorageItem(getRawDataId(), JSON.stringify(parserData));
      // saveUploadDataStart(showNewSheet, setShowPopup);
    },
    header: true,
    skipEmptyLines: true,
  });
};
