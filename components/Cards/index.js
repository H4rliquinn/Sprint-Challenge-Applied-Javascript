// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cardContainer=document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((res)=>{
  console.log(res.data.articles);
  const topics=Object.keys(res.data.articles);
//   console.log(topics);
  topics.forEach(item=>{
    //   console.log(item);
        res.data.articles[item].forEach(item=>{
        cardContainer.appendChild(cardMaker(item));
    });
  });
})
.catch((err) => {
  console.log(err)
});

function cardMaker(article){
    const newArticle=document.createElement('div');
    newArticle.classList.add('card');
  
    const newHeadline=document.createElement('div');
    newHeadline.classList.add('headline');
    newHeadline.textContent=article.headline;
    newArticle.appendChild(newHeadline);

    const newAuthor=document.createElement('div');
    newAuthor.classList.add('author');
    newArticle.appendChild(newAuthor);
  
    const newImgCont=document.createElement('div');
    newImgCont.classList.add('img-container');
    newAuthor.appendChild(newImgCont);

    const newImg=document.createElement('img');
    newImg.src=article.authorPhoto;
    newImgCont.appendChild(newImg);
  
    const newName=document.createElement('span');
    newName.textContent=article.authorName;
    newImgCont.appendChild(newName);

    return newArticle;
  }