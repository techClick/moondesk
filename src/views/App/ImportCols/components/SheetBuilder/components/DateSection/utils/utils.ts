import { setSelectedSheet } from 'views/App/ImportCols/redux';

export const moveDay = (selectedSheet: number, movement: number) => (dispatch: Function): void => {
  dispatch(setSelectedSheet(selectedSheet + movement));
};
