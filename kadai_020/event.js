const btnClick = document.getElementById('btn');
const textVal = document.getElementById('text');

btnClick.addEventListener('click', () => {
  textVal.textContent = 'ボタンをクリックしました';
});