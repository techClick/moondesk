import React, { useState } from 'react';
import { setShowUploadPage } from 'views/App/components/SheetBuilder/redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as S from './Tabs.styled';
import { getInitialIndex, tabOptions } from './utils/utils';
import { moveSideBar } from '../../utils/utils';

const SideBar = function SideBar() {
  const dispatch = useDispatch();
  const [selectedTab, setSelectedTab] = useState<number>(getInitialIndex());

  const tabPressAction = function tabPressAction() {
    const exitShowUploadPage = { income: false, resources: false };
    dispatch(setShowUploadPage(exitShowUploadPage));
  };

  return (
    <>
      {
        tabOptions.map((tab, i) => (
          <Link to={tab.route} style={{ textDecoration: 'none' }}>
            <S.Tab
              key={`tab${i}`}
              isSelected={i === selectedTab}
              onClick={() => {
                setTimeout(() => moveSideBar(true), 300);
                tabPressAction();
                setSelectedTab(i);
              }}
            >
              <S.Icon>{tab.icon}</S.Icon>
              {tab.label}
            </S.Tab>
          </Link>
        ))
      }
    </>
  );
};

export default SideBar;
