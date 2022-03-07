import { InputError, RowBuilderInput } from 'types/types';

const getIsUploadError = function getIsUploadError(input: RowBuilderInput) {
  const errorTmp: InputError = {};
  if (!input.amount) {
    errorTmp.amount = 'Required';
  }
  if (!input.source) {
    errorTmp.source = 'Required';
  }
  return errorTmp;
};

export const saveEdit = function saveEdit(input: RowBuilderInput, setError: Function) {
  const errorTmp: InputError = getIsUploadError(input);
  if (isNaN(Number(input.amount))) errorTmp.amount = 'Numbers only';
  if (input.amount?.includes('-')
    || input.amount?.includes('+')) errorTmp.amount = 'Don\'t use operators';
  if (input.amount?.includes('e')) errorTmp.amount = 'Numbers only';
  setError(errorTmp);
  if (!errorTmp.amount && !errorTmp.source) {
    // proceed
  }
};
