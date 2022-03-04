import { getCurrentTab, getStorageItem } from 'views/App/utils/utils';
import { getRowEntryId, getUseRangeId } from 'views/App/utils/GlobalUtils';
import { DataSheet } from 'types/types';

export const getExitSheetBuilder = function getExitSheetBuilder(showSheetBuilder: any) {
  const exitSheetBuilder: any = {
    income: showSheetBuilder.income,
    resources: showSheetBuilder.resources,
  };
  exitSheetBuilder[getCurrentTab()] = null;
  return exitSheetBuilder;
};

export const getNewSheetDate = function getNewSheetDate(dataSheets: DataSheet[]): Date {
  const useRange: boolean = Boolean(getStorageItem(getUseRangeId()));
  let sheetDate: Date;
  if (useRange) {
    let dataSheetDates = dataSheets.map((dataSheet) => ({ date: dataSheet.date }));
    dataSheetDates = dataSheetDates.sort((a: any, b: any) => a.date - b.date);
    sheetDate = new Date(dataSheetDates[0].date);
  } else {
    sheetDate = JSON.parse(getStorageItem(getRowEntryId())).sheetDate1;
  }
  return sheetDate;
};
