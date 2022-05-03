import { setStorageItem } from 'views/App/utils/utils';

export const closeTopInfo = function closeTopInfo(closeInfo: Function) {
  setStorageItem('shownTopInfo', 'shown');
  closeInfo();
};
