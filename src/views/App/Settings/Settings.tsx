import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import * as S from './Settings.styled';

const Settings = function Settings() {
  const [showPanel, setShowPanel] = useState<string | null>('currency');
  const [currency, setCurrency] = useState<string>();

  return (
    <S.Container>
      <S.WhiteCard>
        <S.FlexCont>
          <S.ChangeCurrency>
            Change currency
          </S.ChangeCurrency>
          <S.Icon>
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </S.Icon>
        </S.FlexCont>
      </S.WhiteCard>
      {
        showPanel === 'currency' && (
          <S.WhiteCard2>
            <S.NewCurrency>Set new currency</S.NewCurrency>
            <S.FlexCont>
              <S.Input placeholder="enter here" value={currency} onChange={(e) => setCurrency(e.target.value)} />
              <S.ButtonDiv>
                <S.Button>
                  Save
                </S.Button>
              </S.ButtonDiv>
            </S.FlexCont>
          </S.WhiteCard2>
        )
      }
    </S.Container>
  );
};

export default Settings;
