import React from 'react';
import { bigRes, RelativeContainer } from 'views/styles';
import MediaQuery from 'react-responsive';
import { useDispatch } from 'react-redux';
import * as S from '../Tabs.styled';
import * as X from './TopTabs.styled';
import { tabPressAction } from '../utils/utils';
import { moveSideBar } from '../../../utils/utils';

const Tabs = function Tabs(
  { tab, index, setSelectedTab, selectedTab, mouseEnter, setMouseEnter }
  :
  { tab: any, index: number, setSelectedTab: Function, selectedTab: number,
    mouseEnter: { [id: string]: boolean }, setMouseEnter: Function },
) {
  const dispatch = useDispatch();

  return (
    <X.Tab
      key={`tab${index}`}
      isSelected={index === selectedTab}
      onClick={() => {
        setTimeout(() => moveSideBar(true), 300);
        tabPressAction(dispatch);
        setSelectedTab(index);
      }}
      onMouseEnter={() => setMouseEnter({ [tab.path]: true })}
      onMouseLeave={() => setMouseEnter({})}
    >
      <RelativeContainer flex>
        <MediaQuery maxWidth={bigRes}>
          <S.Icon morePadding>{tab.icon}</S.Icon>
          {tab.label}
        </MediaQuery>
        <MediaQuery minWidth={bigRes + 0.0001}>
          <S.Icon>{tab.icon}</S.Icon>
          <>
            {mouseEnter[tab.path] && <S.Description id={`tabDesc${tab.path}`}>{tab.label}</S.Description>}
          </>
        </MediaQuery>
      </RelativeContainer>
    </X.Tab>
  );
};

export default Tabs;
