import { tabOptions } from 'views/App/Navigation/components/SideBar/components/utils/utils';
import { getImportTypeId } from './GlobalUtils';

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export const getTodaysDate = function getTodaysDate(datePicked?: Date): string {
  let date = new Date();
  if (datePicked) date = new Date(datePicked);
  return `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
};

export const getDateFormat = function getDateFormat(datePicked?: Date): string {
  let date = new Date();
  if (datePicked) date = new Date(datePicked);
  const monthName = monthNames[date.getMonth()];
  return `${monthName} ${date.getDate()}`;
};

export const getDateFormatMobile = function getDateFormatMobile(datePicked?: Date): string {
  let date = new Date();
  if (datePicked) date = new Date(datePicked);
  const monthName = [...monthNames[date.getMonth()]].slice(0, 3).join('');
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
  const currentTab = ['csv', 'excel', 'db', 'dbf', 'hand'].find((type) => (
    window.location.href.includes(type)
  ));
  return currentTab || getStorageItem(getImportTypeId()) || 'csv';
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
  const sixMonthsBack = new Date();
  sixMonthsBack.setDate(sixMonthsBack.getDate() - 180);
  if (inputDate.setHours(0, 0, 0, 0) <= sixMonthsBack.setHours(0, 0, 0, 0)) {
    return true;
  }
  return false;
};

export const getDateLimit = function getDateLimit(): Date {
  const sixMonthsBack = new Date();
  sixMonthsBack.setHours(0, 0, 0, 0);
  sixMonthsBack.setDate(sixMonthsBack.getDate() - 180);
  return sixMonthsBack;
};

export const getIsSameDay = function getIsSameDay(date1: Date, date2: Date): boolean {
  date1 = new Date(date1);
  date2 = new Date(date2);
  if (date1.setHours(0, 0, 0, 0) === date2.setHours(0, 0, 0, 0)) {
    return true;
  }
  return false;
};

export const getDateIsOlder = function getDateIsOlder(date1: Date, date2: Date): boolean {
  date1 = new Date(date1);
  date2 = new Date(date2);
  date1.setHours(0, 0, 0, 0);
  date2.setHours(0, 0, 0, 0);
  if (date2 < date1) {
    return true;
  }
  return false;
};

export const getDateIsNewer = function getDateIsNewer(date1: Date, date2: Date): boolean {
  date1 = new Date(date1);
  date2 = new Date(date2);
  date1.setHours(0, 0, 0, 0);
  date2.setHours(0, 0, 0, 0);
  if (date2 > date1) {
    return true;
  }
  return false;
};
