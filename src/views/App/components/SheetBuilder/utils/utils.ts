export const getExitSheetBuilder = function getExitSheetBuilder(
  showSheetBuilder: any,
  page: string,
) {
  const exitSheetBuilder: any = {
    income: showSheetBuilder.income,
    resources: showSheetBuilder.resources,
  };
  exitSheetBuilder[page] = null;
  return exitSheetBuilder;
};
