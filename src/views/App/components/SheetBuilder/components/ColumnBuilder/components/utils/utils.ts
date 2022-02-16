export const getError = function getError(input: any) {
  const errorTmp: any = { source: false, amount: false };
  if (!input.amount) {
    errorTmp.amount = 'Required';
  }
  if (!input.source) {
    errorTmp.source = 'Required';
  }
  return errorTmp;
};
