import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './Tabs.styled';
import { tabOptions } from './utils/utils';
import { moveSideBar } from '../../utils/utils';

const SideBar = function SideBar() {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  return (
    <>
      {
        tabOptions.map((tab, index) => (
          <Link to={tab.route} style={{ textDecoration: 'none' }}>
            <S.Tab
              key={`tab${index}`}
              isSelected={index === selectedTab}
              onClick={() => {
                setTimeout(() => moveSideBar(true), 300);
                setSelectedTab(index);
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
