export const checkForMenuOut = function checkForMenuOut() {
  const onClickCall = function onClickCall() {
  };
  window.removeEventListener('click', onClickCall);
  window.addEventListener('click', onClickCall);
};
