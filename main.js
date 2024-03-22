const ulList = document.getElementById('select-menu');
const items = document.querySelectorAll('#select-list li');
const search = document.getElementById('input-search');
const selectTitle = document.getElementById('select-title');
const SelectDiv = document.getElementById('select');
const selectedValue = document.getElementById('selected-value');
const close = document.querySelector('.close');

close.addEventListener('click', (e) => {
    e.stopPropagation();
  ulList.classList.remove('show');
  selectedValue.classList.remove('clicked');
});

SelectDiv.addEventListener('click', () => {
  ulList.classList.toggle('show');
  selectedValue.classList.toggle('clicked');
});

items.forEach((item) => {
  item.addEventListener('click', (e) => {
    if (e.target.innerHTML) {
      selectedValue.innerHTML = e.target.innerHTML;
    }
  });
});

console.log(items);
