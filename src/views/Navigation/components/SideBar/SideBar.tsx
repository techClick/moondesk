import React, { useState } from 'react';
import * as S from './SideBar.styled';
import { tabOptions } from './utils/utils';


const SideBar = function SideBar() {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  // background: #02396d;
  return (
    <S.Container>
      {
        tabOptions.map((tab, index) => (
          <S.Tab
            key={`tab${index}`}
            isSelected={index === selectedTab}
            onClick={() => setSelectedTab(index)}
          >
            <S.Icon>{tab.icon}</S.Icon>
            {tab.label}
          </S.Tab>
        ))
      }
    </S.Container>
  );
};

export default SideBar;
