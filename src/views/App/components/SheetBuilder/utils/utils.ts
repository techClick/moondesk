import { getCurrentTab } from '../../utils/utils';

export const getExitSheetBuilder = function getExitSheetBuilder(showSheetBuilder: any) {
  const exitSheetBuilder: any = {
    income: showSheetBuilder.income,
    resources: showSheetBuilder.resources,
  };
  exitSheetBuilder[getCurrentTab()] = null;
  return exitSheetBuilder;
};
