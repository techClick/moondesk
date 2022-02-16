const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export const getTodaysDate = function getTodaysDate(datePicked?: string): string {
  let date = new Date();
  if (datePicked) date = new Date(datePicked);
  return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
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
