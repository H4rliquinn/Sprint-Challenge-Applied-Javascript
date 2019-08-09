/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselCont=document.querySelector('.carousel-container');

const carouselImages = [
  'mountains.jpeg',
  'computer.jpeg',
  'trees.jpeg',
  'turntable.jpeg'
]

function carousel(){
  const newCarousel=document.createElement('div');
  newCarousel.classList.add('carousel');

  const leftButton=document.createElement('div');
  leftButton.classList.add('left-button');
  leftButton.textContent=" < ";
  newCarousel.appendChild(leftButton);

  let addClass="imgShow";
  carouselImages.forEach(item=>{
    // console.log(item);
    const newImage=document.createElement('img');
    newImage.src='./assets/carousel/'+item;
    if (addClass){
      newImage.classList.add(addClass);
    }
    addClass=""
    newCarousel.appendChild(newImage);
  })

  const rightButton=document.createElement('div');
  rightButton.classList.add('right-button');
  rightButton.textContent=" > ";
  newCarousel.appendChild(rightButton);

  return newCarousel;
}
// console.log(carousel());
carouselCont.appendChild(carousel());