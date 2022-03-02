import { getDateFormat, getDateFormatMobile, getStorageItem, removeStorageItem, setStorageItem } from 'views/App/utils/utils';
import { getRowEntryId, getUseRangeId } from 'views/App/utils/GlobalUtils';
import { minRes } from 'views/styles';

export const saveUseRange = function saveUseRange(
  useRange: boolean,
  setUseRange: Function,
): void {
  const useRangeStoreId = getUseRangeId();
  if (useRange) {
    removeStorageItem(useRangeStoreId);
  } else {
    setStorageItem(useRangeStoreId, 'userange');
  }
  setUseRange(!useRange);
};

export const saveSheet = function saveSheet(
  sheetDate: Date,
  rowHeader: string,
): void {
  const currentRows = JSON.parse(getStorageItem(getRowEntryId()) || '{}');
  sheetDate = new Date(sheetDate);
  const newRows = { ...currentRows, [rowHeader]: sheetDate };
  setStorageItem(getRowEntryId(), JSON.stringify(newRows));
};

export const moveDay = function moveDay(
  sheetDate: Date,
  increment: number,
  setSheetDate: Function,
  rowHeader: string,
): void {
  const currentRows = JSON.parse(getStorageItem(getRowEntryId()) || '{}');
  sheetDate = new Date(sheetDate);
  sheetDate.setDate(sheetDate.getDate() + increment);
  const newRows = { ...currentRows, [rowHeader]: sheetDate };
  setStorageItem(getRowEntryId(), JSON.stringify(newRows));
  setSheetDate(sheetDate);
};

export const getSheetDate = function getSheetDate(
  sheetDate: Date,
): string {
  if (window.innerWidth <= minRes) {
    return getDateFormatMobile(sheetDate);
  }
  return getDateFormat(sheetDate);
};
