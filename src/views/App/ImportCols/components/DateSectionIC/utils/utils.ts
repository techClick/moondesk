import {
  getCurrentTab, getImportType, getStorageItem, removeStorageItem, setStorageItem,
} from 'views/App/utils/utils';

export const saveUseRange = function saveUseRange(
  useRange: boolean,
  setUseRange: Function,
): void {
  const projectId: string = getStorageItem('projectId');
  const useRangeStoreId = `${projectId}_useRange_${getCurrentTab()}_${getImportType()}`;
  if (useRange) {
    removeStorageItem(useRangeStoreId);
  } else {
    setStorageItem(useRangeStoreId, 'userange');
  }
  setUseRange(!useRange);
};
