import { getStorageItem, setStorageItem } from 'views/App/utils/utils';

export const saveColumnEntry = function saveColumnEntry(header: string, newEntry: string | null) {
  newEntry = newEntry || '';
  let previousEntry: any = getStorageItem('columnEntry_Income');
  if (previousEntry) {
    previousEntry = JSON.parse(previousEntry);
    setStorageItem('columnEntry_Income', JSON.stringify({ ...previousEntry, [header]: newEntry }));
    // setStorageItem('new_income', JSON.stringify([]));
    return;
  }
  const columnEntry: any = {
    group: '',
    source: '',
    amount: '',
  };
  setStorageItem('columnEntry_Income', JSON.stringify({ ...columnEntry, [header]: newEntry }));
};
