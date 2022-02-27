import { tabOptions } from 'views/App/Navigation/components/SideBar/components/utils/utils';

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export const getTodaysDate = function getTodaysDate(datePicked?: string): string {
  let date = new Date();
  if (datePicked) date = new Date(datePicked);
  return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};

export const getDateFormat1 = function getDateFormat1(datePicked?: string): string {
  let date = new Date();
  if (datePicked) date = new Date(datePicked);
  // const monthName = [...monthNames[date.getMonth()]].slice(0, 3).join('');
  const monthName = monthNames[date.getMonth()];
  return `${monthName} ${date.getDate()}`;
};

export const getStorageItem = function getStorageItem(type: string) {
  const savedData: string = localStorage.getItem(type) || '';
  return savedData;
};

export const setStorageItem = function setStorageItem(
  type: string,
  newData: any,
) {
  localStorage.setItem(type, newData);
};

export const removeStorageItem = function removeStorageItem(
  type: string,
) {
  localStorage.removeItem(type);
};

export const getCurrentTab = function getCurrentTab(): string {
  const currentTab = tabOptions.find((tab) => (
    window.location.href.includes(tab.path)
  ));
  return currentTab ? currentTab.path : 'analytics';
};

export const getImportType = function getImportType(): string {
  const currentTab = ['csv', 'excel'].find((type) => (
    window.location.href.includes(type)
  ));
  return currentTab || '';
};
