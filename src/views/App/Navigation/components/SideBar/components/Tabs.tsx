import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './Tabs.styled';
import { getInitialIndex, tabOptions } from './utils/utils';
import { moveSideBar } from '../../utils/utils';

const SideBar = function SideBar() {
  const [selectedTab, setSelectedTab] = useState<number>(getInitialIndex());

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
