import { tabOptions } from 'views/App/Navigation/components/SideBar/components/utils/utils';

export const getCurrentTab = function getCurrentTab() {
  const currentTab = tabOptions.find((tab) => (
    window.location.href.includes(tab.path)
  ));
  return currentTab ? currentTab.path : 'analytics';
};
