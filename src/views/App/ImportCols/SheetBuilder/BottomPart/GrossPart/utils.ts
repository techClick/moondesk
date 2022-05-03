export const adjustTotalContWidth = (): void => {
  const amountTd = document.getElementById('amountTd');
  const tableCont = document.getElementById('tableCont');
  const totalCont = document.getElementById('totalCont');
  if (amountTd && totalCont && tableCont) {
    const amountTdStyle = amountTd.getBoundingClientRect();
    const scrollBarWidth = tableCont.offsetWidth - tableCont.clientWidth;
    totalCont.style.width = `${amountTdStyle.width + scrollBarWidth}px`;
  }
};
