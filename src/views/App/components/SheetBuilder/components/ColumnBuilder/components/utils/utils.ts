import Papa from 'papaparse';
import { SheetBuilderInput } from 'types/types';
import { getStorageItem } from 'views/App/utils/utils';

const getError = function getError(input: any) {
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
  console.log(window.location.href);
  const errorTmp = getError(input);
  setError(errorTmp);
  if (!errorTmp.amount && !errorTmp.source) {
    const fileUploader = document.getElementById('uploadSheet');
    if (fileUploader) {
      fileUploader.click();
    }
  }
};

const saveCSVtoSheet = function saveCSVtoSheet(PapaCSVData: any) {
  const columnEntries = JSON.parse(getStorageItem('columnEntry_Income'));
  const oldSheet = JSON.parse(getStorageItem('new_income') || '[]');
  const newSheet: Array<SheetBuilderInput> = [...oldSheet];
  for (const line of PapaCSVData) {
    console.log(line, typeof line, columnEntries);
    // if (columnEntries.group) {
    //   if (line[columnEntries.group] && line[columnEntries.source] && line[columnEntries.amount]) {
    //     newSheet.push({
    //       group: line[columnEntries.group],
    //       amount: Number(line[columnEntries.amount]),
    //       source: line[columnEntries.source],
    //     });
    //   }
    // } else if (line[columnEntries.source] && line[columnEntries.amount]) {
    //   newSheet.push({
    //     amount: Number(line[columnEntries.amount]),
    //     source: line[columnEntries.source],
    //   });
    // }
  }
};

export const getDataFromCSV = function getDataFromCSV(files: any) {
  Papa.parse(files[0], {
    complete: (result) => saveCSVtoSheet(result.data),
    header: true,
  });
};

export const useDirectly = function useDirectly(input: SheetBuilderInput, setError: Function) {
  const errorTmp = getError(input);
  if (isNaN(Number(input.amount))) errorTmp.amount = 'Numbers only';
  if (input.amount?.toString().includes('-')
    || input.amount?.toString().includes('+')) errorTmp.amount = 'Don\'t use operators';
  if (input.amount?.toString().includes('e')) errorTmp.amount = 'Numbers only';
  setError(errorTmp);
  if (!errorTmp.amount && !errorTmp.source) {
    // proceed
  }
};
