var cardsUl = document.querySelector(".js-cards");

for(var kino of films){
  var newLi = document.createElement("li");
  var newImg = document.createElement("img");
  var newDate = document.createElement("p");
  var newTitle = document.createElement("h3");
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

  cardsUl.append(newLi);
} 