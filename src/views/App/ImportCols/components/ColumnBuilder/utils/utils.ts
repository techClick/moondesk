import { getRowEntryId } from 'views/App/utils/GlobalUtils';
import { getStorageItem, setStorageItem } from 'views/App/utils/utils';

export const getFieldName = function getFieldName(header: string): string {
  return {
    Group: 'Group',
    Source: 'Item',
    Amount: 'Value',
    Timestamp: 'Timestamp',
  }[header] || 'Group';
};

export const saveRowEntry = function saveRowEntry(header: string, newEntry: string | null) {
  newEntry = newEntry || '';
  let previousEntry: any = getStorageItem(getRowEntryId());
  if (previousEntry) {
    previousEntry = JSON.parse(previousEntry);
    setStorageItem(getRowEntryId(), JSON.stringify({ ...previousEntry, [header]: newEntry }));
    return;
  }
  const rowEntries: any = {
    group: '',
    source: '',
    amount: '',
  };
  setStorageItem(getRowEntryId(), JSON.stringify({ ...rowEntries, [header]: newEntry }));
};
