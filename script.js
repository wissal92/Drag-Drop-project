const draggableList = document.getElementById('draggable-list');
const check = document.getElementById('check');

const richestPeople = [
  'Jeff Bezos',
  'Bill Gates',
  'Warren Buffett',
  'Bernard Arnault',
  'Carlos Slim Helu',
  'Amancio Ortega',
  'Larry Ellison',
  'Mark Zuckerberg',
  'Michael Bloomberg',
  'Larry Page'
];

// Store listitems
const listItems = [];

let dragStartIndex;

createList();

function createList(){
    [...richestPeople]
        .map(el => ({value: el, sort: Math.random()}))
        .sort((a, b) => a.sort - b.sort)
        .map(el => el.value)
        .forEach((el, index) =>{
            const li = document.createElement('li');
            li.setAttribute('data-index', index);

            li.innerHTML = `
                <span class="number">${index + 1}</span>
                <div class="draggable" draggable="true">
                    <p class="person-name">${el}</p>
                    <i class="fas fa-grip-lines"></i>
                </div>
            `
            listItems.push(li);

            draggableList.appendChild(li);
    })
}