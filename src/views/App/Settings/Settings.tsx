import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import * as S from './Settings.styled';
import { removeWhiteCard2, saveNewCurrency } from './utils/utils';
import { getStorageItem } from '../utils/utils';

const Settings = function Settings() {
  const [error, setError] = useState<string | null>(null);
  const [showPanel, setShowPanel] = useState<string | null>(null);
  const [currency, setCurrency] = useState<string>(getStorageItem('currency') || '');

  useEffect(() => {
    if (showPanel) {
      const whiteCard2 = document.getElementById('whiteCard2');
      if (whiteCard2) {
        whiteCard2.style.height = '69.9px';
        whiteCard2.style.padding = '18px 20px';
      }
    }
  }, [showPanel]);

  return (
    <S.Container>
      <S.WhiteCard>
        <S.FlexCont>
          <S.ChangeCurrency>
            Change currency
          </S.ChangeCurrency>
          <S.Icon
            onClick={() => {
              setError(null);
              if (showPanel) {
                removeWhiteCard2();
                setTimeout(() => setShowPanel(null), 100);
              } else {
                setShowPanel('currency');
              }
            }}
          >
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </S.Icon>
        </S.FlexCont>
      </S.WhiteCard>
      {
        showPanel === 'currency' && (
          <S.WhiteCard2 id="whiteCard2">
            <S.NewCurrency>Set new currency</S.NewCurrency>
            <S.FlexCont>
              <S.Input
                isError={Boolean(error)}
                placeholder="enter here"
                value={currency}
                onChange={(e: any) => {
                  setError(null);
                  setCurrency(e.target.value);
                }}
              />
              <S.ButtonDiv>
                <S.Button onClick={() => saveNewCurrency(currency || '', setError, setShowPanel)}>
                  Save
                </S.Button>
              </S.ButtonDiv>
            </S.FlexCont>
            { error && <S.Required>{error}</S.Required>}
          </S.WhiteCard2>
        )
      }
    </S.Container>
  );
};

export default Settings;
