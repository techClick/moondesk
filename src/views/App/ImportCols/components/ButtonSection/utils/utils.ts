import { RowBuilderInput, InputError } from 'types/types';
import { getStorageItem } from 'views/App/utils/utils';
import { getRowEntryId, getUseRangeId } from 'views/App/utils/GlobalUtils';

const getIsUploadError = function getIsUploadError() {
  const input: RowBuilderInput = JSON.parse(getStorageItem(getRowEntryId()) || '{}');
  const errorTmp: InputError = {};
  if (!input.amount) {
    errorTmp.amount = 'Required';
  }
  if (!input.source) {
    errorTmp.source = 'Required';
  }
  const useRange = getStorageItem(getUseRangeId());
  if (useRange && !input.timestamp) {
    errorTmp.timestamp = 'Required when using date range';
  }
  return errorTmp;
};

export const uploadStart = function uploadStart(setError: Function) {
  const errorTmp = getIsUploadError();
  setError(errorTmp);
  if (!errorTmp.amount && !errorTmp.source && !errorTmp.timestamp) {
    const fileUploader = document.getElementById('uploadSheet');
    if (fileUploader) {
      fileUploader.click();
    }
  } else {
    document.getElementById('importColsWhiteCard')?.scroll({ top: 0, behavior: 'smooth' });
  }
};

export const getIsNotANumber = function getIsNotANumber(amount: string | null): boolean {
  if (isNaN(Number(amount)) || amount?.includes('-')
    || amount?.includes('+') || amount?.includes('e')) return true;
  return false;
};

export const useDirectly = function useDirectly(setError: Function) {
  const input: RowBuilderInput = JSON.parse(getStorageItem(getRowEntryId()));
  const errorTmp: InputError = getIsUploadError();
  if (isNaN(Number(input.amount))) errorTmp.amount = 'Numbers only';
  if (input.amount?.includes('-')
    || input.amount?.includes('+')) errorTmp.amount = 'Don\'t use operators';
  if (input.amount?.includes('e')) errorTmp.amount = 'Numbers only';
  setError(errorTmp);
  if (!errorTmp.amount && !errorTmp.source) {
    // proceed
  }
};
