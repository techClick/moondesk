import {
  getCurrentTab, getImportType, getStorageItem, removeStorageItem, setStorageItem,
} from 'views/App/utils/utils';

export const saveUseRange = function saveUseRange(
  setUseRange: Function,
): void {
  const projectId: string = getStorageItem('projectId');
  const useRangeStoreId = `${projectId}_useRange_${getCurrentTab()}_${getImportType()}`;
  const useRangeStore: string | null = getStorageItem(useRangeStoreId);
  if (useRangeStore) {
    removeStorageItem(useRangeStoreId);
  } else {
    setStorageItem(useRangeStoreId, 'userange');
  }
  setUseRange(!useRangeStore);
};
