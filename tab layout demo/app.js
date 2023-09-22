const tabs = document.querySelectorAll('.tab');
const homeTab = document.querySelector('.tab-home');

document.addEventListener('DOMContentLoaded', () => {
  homeTab.classList.add('tab-active');
});


tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelector('.tab-active').classList.remove('tab-active');
    tab.classList.toggle('tab-active');
  });
});