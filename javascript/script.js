// var cardsUl = document.querySelector(".js-cards"); // 1-usul

var findEl = (className) => document.querySelector(className); // html digi elementlani chaqiradi
var cardsUl = findEl(".js-cards");
var select = findEl(".select");
var form = findEl(".form");
var btnForm = findEl(".btn--form");

var creatEl = element => document.createElement(element); // elementlani yaratadi


var usul_3 = (kino) =>{

  var newLi = creatEl("li");
  var newImg = creatEl("img");
  var newDate = creatEl("p");
  var newTitle = creatEl("h3");
  var newBtnText = creatEl("button")
  var newText = creatEl("p");
  var newBtnCard = creatEl("div");
  var newBtn = creatEl("a");
  var newLikes = creatEl("div");
  var newBtnLike = creatEl("button");
  var newBtnNotLike = creatEl("button");

  // var newGenresUl = creatEl("ul");



  // var newLi = document.createElement("li");
  // var newImg = document.createElement("img");
  // var newDate = document.createElement("p");
  // var newTitle = document.createElement("h3");
  // var newBtnText = document.createElement("button")
  // var newText = document.createElement("p");
  // var newBtnCard = document.createElement("div");
  // var newBtn = document.createElement("a");
  // var newLikes = document.createElement("div");
  // var newBtnLike = document.createElement("button");
  // var newBtnNotLike = document.createElement("button");

  // var newGenresUl = document.createElement("ul");

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

  // newGenresUl.className = "card__genres-ul"; // kinolani ganriga ul yaratadi


  newImg.src = kino.poster;
  newDate.textContent = kino.release_date;
  newTitle.textContent = kino.title;
  newText.textContent = kino.overview;
  newBtn.textContent = "Play";

 /* // kino.genres.forEach(function (genre) {
  // //  var newGenresLi = document.createElement("li");
  //  var newGenresLi = creatEl("li");

  //  newGenresLi.className = "card__genres-list";
   
  //  newGenresLi.textContent = genre;
  //  newGenresUl.append(newGenresLi);
  // }) */                                      // kinolani  ganrlarini chiqazadi

  newLi.append(newImg, newDate, newTitle, newBtnText, newText, newBtnCard);
  newBtnCard.append(newBtn,newLikes);
  newLikes.append(newBtnLike, newBtnNotLike);

  // newLi.append(newGenresUl);   // kinolani ganridigi UL i kinoladigi LI ni ichiga soladi

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

function getGenres(films) {  // janrlani bittadan qilib option yaratib ichiga soladi optionni select ichiga soladi
  let genres = [];

  films.forEach(function (film) {
    film.genres.forEach(genre => {
      if(!genres.includes(genre)){
        // var newOption = document.createElement("option");
        var newOption = creatEl("option");
        newOption.className = "option"

        newOption.textContent = genre;
        newOption.value = genre;

        genres.push(genre);
        
        select.append(newOption);
      }
    })
  })
}
getGenres(films);

form.addEventListener("submit", function (params) {   // btn bosilganda filtirlidi
  params.preventDefault();

  cardsUl.innerHTML = '';

  var selectValue = select.value;

  var resaultFilter = films.filter(function (filtr) {
    if (filtr.genres.includes(selectValue)) {
      return filtr
    }
  })
  resaultFilter.forEach(result => usul_3(result));
})