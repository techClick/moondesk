import { getCurrentTab, getImportType } from './utils';

export const getProjectId = function getProjectId(): string {
  return '1';
};

export const getRowEntryId = function getRowEntryId(): string {
  return `${getProjectId()}_${getImportType()}_rowEntry_${getCurrentTab()}`;
};

export const getUseRangeId = function getUseRangeId(): string {
  return `${getProjectId()}_${getImportType()}_useRange_${getCurrentTab()}`;
};

export const getRawDataId = function getRawDataId(): string {
  return `${getProjectId()}_rawData_${getCurrentTab()}`;
};

export const getNewSheetId = function getNewSheetId(): string {
  return `${getProjectId()}_new_${getCurrentTab()}`;
};
