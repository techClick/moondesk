import { setStorageItem } from 'views/App/utils/utils';

export const closeDateInfo = function closeDateInfo(closeInfo: Function) {
  setStorageItem('shownDateInfo', 'shown');
  closeInfo();
};
