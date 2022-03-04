import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'redux/hooks';
import { getRawDataId } from 'views/App/utils/GlobalUtils';
import { selectShowPopup, setShowPopup } from 'views/App/ImportCols/redux';
import { getCurrentTab } from 'views/App/utils/utils';
import { MainButton } from 'views/App/styles';
import * as S from './AdditionDialogue.styled';

const AdditionDialogue = function AdditionDialogue(
  { onComplete, labels }:
  { onComplete: Function, labels: Array<string> },
) {
  const dispatch = useDispatch();
  const showPopup = useAppSelector(selectShowPopup);
  const currentTab = getCurrentTab();

  const labels2 = labels.filter((label, index) => index <= 3);
  const nonLabels = labels.filter((label, index) => index > 3);
  return (
    <S.Container>
      <S.Header>Extracting CSV contents</S.Header>
      <S.Info>
        One ore more occurrences
        {labels2.length > 1 ? ' were found for these items;' : ' was found for this item;' }
      </S.Info>
      <S.LabelCont>
        <S.Label>
          { labels2.map((label, index) => {
            const suffixTenary1 = nonLabels.length === 0 ? '.' : '';
            const suffixTenary2 = nonLabels.length === 0 ? ' and ' : ', ';
            const suffixTenary = index === 3 ? suffixTenary1 : suffixTenary2;
            const suffix = index === 0 ? ', ' : suffixTenary;
            return `${label}${suffix}`;
          })}
        </S.Label>
        <S.Extra>
          {nonLabels.length > 0 && ` +${nonLabels.length} more.`}
        </S.Extra>
      </S.LabelCont>
      <S.Info2>
        How do you want to proceed?
      </S.Info2>
      <S.ButtonDiv>
        <MainButton onClick={() => onComplete()}>
          Combine values
        </MainButton>
        <S.Button onClick={() => {
          localStorage.removeItem(getRawDataId());
          dispatch(setShowPopup({ ...showPopup, [currentTab]: false }));
        }}
        >
          Cancel
        </S.Button>
      </S.ButtonDiv>
    </S.Container>
  );
};

export default AdditionDialogue;
