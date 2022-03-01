import { tabOptions } from 'views/App/Navigation/components/SideBar/components/utils/utils';

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export const getTodaysDate = function getTodaysDate(datePicked?: Date): string {
  let date = new Date();
  if (datePicked) date = new Date(datePicked);
  return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};

export const getDateFormat1 = function getDateFormat1(datePicked?: Date): string {
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

export const getIsToday = function getIsToday(inputDate: Date): boolean {
  inputDate = new Date(inputDate);
  const todaysDate = new Date();
  if (inputDate.setHours(0, 0, 0, 0) === todaysDate.setHours(0, 0, 0, 0)) {
    return true;
  }
  return false;
};

export const getDateIsFar = function getDateIsFar(inputDate: Date): boolean {
  inputDate = new Date(inputDate);
  const threeMonthsBack = new Date();
  threeMonthsBack.setDate(threeMonthsBack.getDate() - 90);
  if (inputDate.setHours(0, 0, 0, 0) <= threeMonthsBack.setHours(0, 0, 0, 0)) {
    return true;
  }
  return false;
};

export const getIsSameDay = function getIsSameDay(date1: Date, date2: Date): boolean {
  date1 = new Date(date1);
  date2 = new Date(date2);
  if (date1.setHours(0, 0, 0, 0) === date2.setHours(0, 0, 0, 0)) {
    return true;
  }
  return false;
};
