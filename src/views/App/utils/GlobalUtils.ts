import { getCurrentTab, getImportType, getStorageItem } from './utils';

export const getProject = function getProject(): string {
  return getStorageItem('projectId') || '1';
};

export const getRowEntryId = function getRowEntryId(): string {
  return `${getProject()}_${getImportType()}_rowEntry_${getCurrentTab()}`;
};

export const getUseRangeId = function getUseRangeId(): string {
  return `${getProject()}_${getImportType()}_useRange_${getCurrentTab()}`;
};

export const getRawDataId = function getRawDataId(): string {
  return `${getProject()}_rawData_${getCurrentTab()}`;
};

export const getNewSheetId = function getNewSheetId(): string {
  return `${getProject()}_new_${getCurrentTab()}`;
};

export const getImportTypeId = (): string => {
  return `${getProject()}_importtype_${getCurrentTab()}`;
};
