const ulList = document.getElementById('select-menu');
const items = document.querySelectorAll('#select-list li');
const search = document.getElementById('input-search');
const selectTitle = document.getElementById('select-title');
const SelectDiv = document.getElementById('select');
const selectedValue = document.getElementById('selected-value');
const close = document.querySelector('.close');

let selectedIndex = -1; // Initialize the selected index

close.addEventListener('click', (event) => {
  event.stopPropagation(); // Stop propagation to prevent the menu from closing
  ulList.classList.remove('show');
});

SelectDiv.addEventListener('click', () => {
  ulList.classList.toggle('show');
  selectedValue.classList.toggle('clicked');
});

// Keyboard navigation and selection
document.addEventListener('keydown', (event) => {
  if (!ulList.classList.contains('show')) return; // Don't handle keys if the list is not visible

  const key = event.key;
  if (key === 'ArrowDown') {
    selectedIndex = Math.min(selectedIndex + 1, items.length - 1);
    scrollToSelected();
    updateSelected();
  } else if (key === 'ArrowUp') {
    selectedIndex = Math.max(selectedIndex - 1, 0);
    scrollToSelected();
    updateSelected();
  } else if (key === 'Enter') {
    if (selectedIndex !== -1) {
      selectedValue.innerHTML = items[selectedIndex].textContent;
    }
    ulList.classList.remove('show');
    selectedIndex = -1; // Reset selected index after selection
  }
});

// Update visual indication of selected item
function updateSelected() {
  items.forEach((item, index) => {
    if (index === selectedIndex) {
      item.classList.add('hovered');
    } else {
      item.classList.remove('hovered');
    }
  });
}

// Scroll to the selected item if it is not fully visible
function scrollToSelected() {
  if (selectedIndex !== -1) {
    const selectedElement = items[selectedIndex];
    const listRect = ulList.getBoundingClientRect();
    const itemRect = selectedElement.getBoundingClientRect();
    if (itemRect.top < listRect.top) {
      ulList.scrollTop -= listRect.top - itemRect.top;
    } else if (itemRect.bottom > listRect.bottom) {
      ulList.scrollTop += itemRect.bottom - listRect.bottom;
    }
  }
}
