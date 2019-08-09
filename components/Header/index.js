// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

const container=document.querySelector('.header-container');
container.appendChild(Header());

function Header() {
const newHeader=document.createElement('div');
newHeader.classList.add('header');
  
  const newDate=document.createElement('span');
  newDate.classList.add('date');
//   newDate.textContent=article.date;
    newDate.textContent='MARCH 28, 2019';

  newHeader.appendChild(newDate);

  const newTitle=document.createElement('h1');
//   newTitle.textContent=article.header;
  newTitle.textContent='Lambda Times';
  newHeader.appendChild(newTitle);

  const newTemp=document.createElement('span');
  newTemp.classList.add('temp');
//   newTemp.textContent=article.temp;
  newTemp.textContent='98°';

  newHeader.appendChild(newTemp);

  return newHeader;
}
