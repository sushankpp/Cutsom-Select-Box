const ulList = document.getElementById('select-menu');
const items = document.querySelectorAll('#select-list li');
const search = document.getElementById('input-search');
const selectTitle = document.getElementById('select-title');
const SelectDiv = document.getElementById('select');
const selectedValue = document.getElementById('selected-value');
const close = document.querySelector('.close');

close.addEventListener('click', (event) => {
  event.stopPropagation(); 
  ulList.classList.remove('show');
});

SelectDiv.addEventListener('click', () => {
  ulList.classList.toggle('show');
  selectedValue.classList.toggle('clicked');
});

search.addEventListener('input', () => {
  const searchText = search.value.toLowerCase();
  items.forEach((item) => {
    const text = item.textContent.toLowerCase();
    if (text.includes(searchText)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});

items.forEach((item) => {
  item.addEventListener('click', (e) => {
    if (e.target.innerHTML) {
      selectedValue.innerHTML = e.target.innerHTML;
    }
  });
});

ulList.addEventListener('click', (event) => {
  event.stopPropagation(); 
});

console.log(items);
