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
