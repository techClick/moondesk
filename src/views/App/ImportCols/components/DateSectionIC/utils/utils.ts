import { getStorageItem, removeStorageItem, setStorageItem } from 'views/App/utils/utils';
import { getRowEntryId, getUseRangeId } from 'views/App/utils/GlobalUtils';

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
