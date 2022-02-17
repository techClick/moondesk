import { toast } from 'react-toastify';
import { setStorageItem } from 'views/App/utils/utils';

export const removeWhiteCard2 = function removeWhiteCard2() {
  const whiteCard2 = document.getElementById('whiteCard2');
  if (whiteCard2) {
    whiteCard2.style.height = '1px';
    whiteCard2.style.padding = '0px 20px';
  };
};

export const saveNewCurrency = function saveNewCurrency(
  currency: string | null,
  setError: Function,
  setShowPanel: Function,
) {
  setError(null);
  const containsNumber = /[0-9]/;
  if (!currency) {
    setError('Required');
  } else if (containsNumber.test(currency)) {
    setError('No numbers');
  } else if (currency.length > 4) {
    setError('Too long');
  } else {
    // Proceed
    const successCall = function successCall() {
      setShowPanel(null);
      toast('Currency changed', { type: 'success' });
      setStorageItem('currency', currency);
    };
    removeWhiteCard2();
    setTimeout(successCall, 100);
  }
};
