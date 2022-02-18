import React, { useEffect, useState } from 'react';
import { bigRes, RelativeContainer } from 'views/styles';
import MediaQuery from 'react-responsive';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as S from './Tabs.styled';
import { getInitialIndex, tabOptions, tabPressAction } from './utils/utils';
import { moveSideBar } from '../../utils/utils';
import TopTabs from './components/TopTabs';

const Tabs = function Tabs() {
  const dispatch = useDispatch();
  const [selectedTab, setSelectedTab] = useState<number>(getInitialIndex());
  const [mouseEnter, setMouseEnter] = useState<{ [id: string]: boolean }>({});

  useEffect(() => {
    for (const key of Object.entries(mouseEnter)) {
      const thisDescDiv = document.getElementById(`tabDesc${key[0]}`);
      if (thisDescDiv) {
        thisDescDiv.style.opacity = '1';
      }
    }
  }, [mouseEnter]);

  return (
    <>
      {
        tabOptions.map((tab, i) => (
          <Link to={tab.route} style={{ textDecoration: 'none' }}>
            { tab.path !== 'settings'
              ? (
                <TopTabs
                  tab={tab}
                  index={i}
                  selectedTab={selectedTab}
                  setSelectedTab={setSelectedTab}
                  mouseEnter={mouseEnter}
                  setMouseEnter={setMouseEnter}
                />
              ) : (
                <S.BottomTab
                  key={`tab${i}`}
                  isSelected={i === selectedTab}
                  onClick={() => {
                    setTimeout(() => moveSideBar(true), 300);
                    tabPressAction(dispatch);
                    setSelectedTab(i);
                  }}
                  onMouseEnter={() => setMouseEnter({ settings: true })}
                  onMouseLeave={() => setMouseEnter({})}
                >
                  <RelativeContainer>
                    <S.Icon>{tab.icon}</S.Icon>
                    <MediaQuery maxWidth={bigRes}>
                      settings
                    </MediaQuery>
                    <MediaQuery minWidth={bigRes + 0.0001}>
                      <>
                        { mouseEnter.settings && <S.Description id="tabDescsettings">Settings</S.Description>}
                      </>
                    </MediaQuery>
                  </RelativeContainer>
                </S.BottomTab>
              )}
          </Link>
        ))
      }
    </>
  );
};

export default Tabs;
