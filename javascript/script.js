// var cardsUl = document.querySelector(".js-cards"); // 1-usul

var findEl = (className) => document.querySelector(className); // html digi elementlani chaqiradi
var cardsUl = findEl(".js-cards");
var select = findEl(".select");
var form = findEl(".form");
var btnForm = findEl(".btn--form");
var searchInput = findEl(".search__input");
var selectSort = findEl(".js-select-sort");

var myModal = findEl(".js-modal");
var myModalBtn = findEl(".js-modal__btn");
var myModalH1 = findEl(".js-modal__title");
var myModalP = findEl(".js-modal__text");
var myModalOl = findEl(".js-modal__ol");

var creatEl = (element) => document.createElement(element); // elementlani yaratadi

var usul_3 = (kino) => {
  var newLi = creatEl("li");
  var newImg = creatEl("img");
  var newDate = creatEl("p");
  var newTitle = creatEl("h3");
  var newBtnText = creatEl("button");
  var newText = creatEl("p");
  var newBtnCard = creatEl("div");
  var newBtn = creatEl("button");
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

  newBtn.href = "#";
  newLi.className = "card";
  newImg.className = "card__img";
  newDate.className = "card__date";
  newTitle.className = "card__title";
  newBtnText.className = "card__btn-text";
  newText.className = "card__text";
  newBtnCard.className = "card__box-btn";
  newBtn.className = "card__btn";
  newLikes.className = "card__likes";
  newBtnLike.className = "card__likes-like";
  newBtnNotLike.className = "card__likes-like card__likes-like-not";

  // newGenresUl.className = "card__genres-ul"; // kinolani ganriga ul yaratadi

  newImg.src = kino.poster;
  newDate.textContent =
    new Date(kino.release_date).getFullYear() +
    "-year " +
    new Date(kino.release_date).getHours() +
    ":" +
    new Date(kino.release_date).getMinutes() +
    ":" +
    new Date(kino.release_date).getSeconds() +
    "-time";
  newTitle.textContent = kino.title;
  newText.textContent = kino.overview;
  newBtn.textContent = "More";
  newBtn.dataset.id = kino.id;

  /* // kino.genres.forEach(function (genre) {
  // //  var newGenresLi = document.createElement("li");
  //  var newGenresLi = creatEl("li");

  //  newGenresLi.className = "card__genres-list";
   
  //  newGenresLi.textContent = genre;
  //  newGenresUl.append(newGenresLi);
  // }) */ // kinolani  ganrlarini chiqazadi

  newLi.append(newImg, newDate, newTitle, newBtnText, newText, newBtnCard);
  newBtnCard.append(newBtn, newLikes);
  newLikes.append(newBtnLike, newBtnNotLike);

  // newLi.append(newGenresUl);   // kinolani ganridigi UL i kinoladigi LI ni ichiga soladi

  newBtnText.addEventListener("click", () => {
    newText.classList.toggle("card__text-click");
    newBtnText.classList.toggle("card__btn-text-click");
  });

  var modalOpen = (event) => {
    var cinema = findFilm(event.target.dataset.id);
    myModalH1.textContent = cinema.title;
    myModalP.textContent = cinema.overview;

    myModalOl.innerHTML = "";
    cinema.genres.forEach((genre) => {
      var newModalLi = creatEl("li");
      newModalLi.textContent = genre;
      newModalLi.className = "modal__list";
      myModalOl.append(newModalLi);
    });

    myModal.classList.add("modal__open");
  };
  newBtn.addEventListener("click", modalOpen);

  cardsUl.append(newLi);
};

var modalClose = (event) => {
  if (event.target === myModal || event.target === myModalBtn) {
    myModal.classList.remove("modal__open");
  }
};
myModal.addEventListener("click", modalClose);

var findFilm = (id) => films.find((kino) => kino.id == id);

function forFilms(films) {
  // forFilms function bn aylanish 2-usul
  films.forEach((kino) => usul_3(kino)); // usul_3 digan functionni chaqirib kino digan qiymat berildi
}
forFilms(films);

/*  var forFilms = (films) => films.forEach((kino) => usul_3(kino)); forFilms(films); */ // tepadigi function ni optimali

//  for(var kino of films){  // for of bn aylanish 1-usul
// usul_3(kino); // 3-usul

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
// }

var sotrNewOld = (a, b) => b.release_date - a.release_date;
var sotrOldNew = (a, b) => a.release_date - b.release_date;
var sortAaZz = (a, b) => {
  if (a.title > b.title) {
    return 1;
  }
  if (a.title < b.title) {
    return -1;
  }
  return 0;
};
var sortZzAa = (a, b) => {
  if (a.title > b.title) {
    return -1;
  }
  if (a.title < b.title) {
    return 1;
  }
  return 0;
};

var sortObj = {
  0: sotrNewOld,
  1: sotrOldNew,
  2: sortAaZz,
  3: sortZzAa,
};

function getGenres(films) {
  // janrlani bittadan qilib option yaratib ichiga soladi optionni select ichiga soladi
  let genres = [];

  films.forEach(function (film) {
    film.genres.forEach((genre) => {
      if (!genres.includes(genre)) {
        // var newOption = document.createElement("option");
        var newOption = creatEl("option");
        newOption.className = "option";

        newOption.textContent = genre;
        newOption.value = genre;

        genres.push(genre);

        select.append(newOption);
      }
    });
  });
}
getGenres(films);

form.addEventListener("submit", function (params) {
  // btn bosilganda filtirlidi
  params.preventDefault();

  cardsUl.innerHTML = "";
  var selectValue = select.value;
  var searchValue = searchInput.value.trim();
  var searchValueRegExp = new RegExp(searchValue, "gi");

  var resaultFilter = films.filter(function (filtr) {
    if (selectValue === "all") {
      return filtr;
    } // hamma kinolani chiqazadi

    if (filtr.genres.includes(selectValue)) {
      return filtr;
    }
  }); // janrla bo'yicha filtirlidi

  // var searchInputReg = resaultFilter.filter((film) =>
  //   film.title.toLowerCase().includes(searchValue.toLowerCase())
  // ); // inputtan qidirish .toLowerCase() bn 1-usul

  // var searchInputReg = resaultFilter.filter(function (cinema) {
  //   if (cinema.title.match(searchValueRegExp)) {
  //     return cinema;
  //   }
  // });  // inputtan qidirishi RegExp bn 1-usuli

  var sortSelectValue = selectSort.value;

  var searchInputReg = resaultFilter
    .filter((cinema) => cinema.title.match(searchValueRegExp)) // inputtan qidirishi RegExp bn 2-usuli
    .sort(sortObj[sortSelectValue]); // inputti filtrlab sortlaberish

  // resaultFilter.forEach((result) => usul_3(result)); // for of bn aylanadi 1-usul

  // forFilms(resaultFilter); // forFilms digan function chaqirilib qiymatiga resaultFilter digan array berildi va arrayi aylanberdi 2-usul
  forFilms(searchInputReg);
});
