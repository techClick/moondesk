import React from 'react';
import { useDispatch } from 'react-redux';
import { getRawDataId } from 'views/App/utils/GlobalUtils';
import { setShowPopup } from 'views/App/ImportCols/redux';
import { MainButton } from 'views/App/styles';
import * as S from './AdditionDialogue.styled';

const AdditionDialogue = function AdditionDialogue(
  { onComplete, labels }:
  { onComplete: Function, labels: Array<string> },
) {
  const dispatch = useDispatch();
  const labels2 = labels.filter((label, index) => index <= 2);
  const nonLabels = labels.filter((label, index) => index > 2);
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
            const suffixTenary5 = labels2.length === 2 ? ' and ' : ', ';
            const suffixTenary4 = labels2.length === 2 ? '. ' : ' and ';
            const suffixTenary3 = nonLabels.length === 0 ? '.' : '';
            const suffixTenary2 = index === 2 ? suffixTenary3 : suffixTenary4;
            const suffixTenary1 = labels2.length === 1 ? '.' : suffixTenary5;
            const suffix = index === 0 ? suffixTenary1 : suffixTenary2;
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
          dispatch(setShowPopup(false));
        }}
        >
          Cancel
        </S.Button>
      </S.ButtonDiv>
    </S.Container>
  );
};

export default AdditionDialogue;
