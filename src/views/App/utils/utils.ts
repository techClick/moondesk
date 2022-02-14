const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export const getTodaysDate = function getTodaysDate(datePicked?: string): string {
  let date = new Date();
  if (datePicked) date = new Date(datePicked);
  return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};
