import { getCurrentTab } from 'views/App/utils/utils';

export const getExitSheetBuilder = function getExitSheetBuilder(showSheetBuilder: any) {
  const exitSheetBuilder: any = {
    income: showSheetBuilder.income,
    resources: showSheetBuilder.resources,
  };
  exitSheetBuilder[getCurrentTab()] = null;
  return exitSheetBuilder;
};
