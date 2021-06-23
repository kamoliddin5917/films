// var cardsUl = document.querySelector(".js-cards"); // 1-usul

var findEl = (className) => document.querySelector(className);
var cardsUl = findEl(".js-cards");

var usul_3 = (kino) =>{

  var newLi = document.createElement("li");
  var newImg = document.createElement("img");
  var newDate = document.createElement("p");
  var newTitle = document.createElement("h3");
  var newBtnText = document.createElement("button")
  var newText = document.createElement("p");
  var newBtnCard = document.createElement("div");
  var newBtn = document.createElement("a");
  var newLikes = document.createElement("div");
  var newBtnLike = document.createElement("button");
  var newBtnNotLike = document.createElement("button");

  newBtn.href = "#"
  newLi.className = "card";
  newImg.className = "card__img";
  newDate.className = "card__date";
  newTitle.className = "card__title";
  newBtnText.className = "card__btn-text"
  newText.className = "card__text";
  newBtnCard.className = "card__box-btn";
  newBtn.className = "card__btn";
  newLikes.className = "card__likes";
  newBtnLike.className = "card__likes-like";
  newBtnNotLike.className = "card__likes-like card__likes-like-not";

  newImg.src = kino.poster;
  newDate.textContent = kino.release_date;
  newTitle.textContent = kino.title;
  newText.textContent = kino.overview;
  newBtn.textContent = "Play";

  newLi.append(newImg, newDate, newTitle, newBtnText, newText, newBtnCard);
  newBtnCard.append(newBtn,newLikes);
  newLikes.append(newBtnLike, newBtnNotLike);
  console.log(newLi);

  newBtnText.addEventListener("click", function () {
    newText.classList.toggle("card__text-click");
    newBtnText.classList.toggle("card__btn-text-click");
  })

  cardsUl.append(newLi);
};

for(var kino of films){
  usul_3(kino); // 3-usul


 /* // var newLi = document.createElement("li");
  // var newImg = document.createElement("img");
  // var newDate = document.createElement("p");
  // var newTitle = document.createElement("h3");
  // var newText = document.createElement("p");
  // var newBtnCard = document.createElement("div");
  // var newBtn = document.createElement("a");
  // var newLikes = document.createElement("div");
  // var newBtnLike = document.createElement("button");
  // var newBtnNotLike = document.createElement("button"); */ // 1-usul

  
 /* var creatEl = (tag) => document.createElement(tag);
  
  var newLi = creatEl("li");
  var newImg = creatEl("img");
  var newDate = creatEl("p");
  var newTitle = creatEl("h3");
  var newText = creatEl("p");
  var newBtnCard = creatEl("div");
  var newBtn = creatEl("a");
  var newLikes = creatEl("div");
  var newBtnLike = creatEl("button");
  var newBtnNotLike = creatEl("button");

  newBtn.href = "#"
  newLi.className = "card";
  newImg.className = "card__img";
  newDate.className = "card__date";
  newTitle.className = "card__title";
  newText.className = "card__text";
  newBtnCard.className = "card__box-btn";
  newBtn.className = "card__btn";
  newLikes.className = "card__likes";
  newBtnLike.className = "card__likes-like";
  newBtnNotLike.className = "card__likes-like card__likes-like-not";

  newImg.src = kino.poster;
  newDate.textContent = kino.release_date;
  newTitle.textContent = kino.title;
  newText.textContent = kino.overview;
  newBtn.textContent = "Play";

  newLi.append(newImg, newDate, newTitle, newText, newBtnCard);
  newBtnCard.append(newBtn,newLikes);
  newLikes.append(newBtnLike, newBtnNotLike);
  console.log(newLi);

  cardsUl.append(newLi); */ // 2-usul

} 