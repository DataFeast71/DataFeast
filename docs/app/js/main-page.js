const btnHamburger = document.querySelector("#btnHamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");
const rowsBlog = document.querySelectorAll(".row");
// const hero = document.querySelector(".hero");

btnHamburger.addEventListener("click", () => {
  if (header.classList.contains("open")) {
    rowsBlog.forEach((elements) => {
      elements.classList.remove("sendBack");
    });
    // hero.classList.remove("sendBack");
    body.classList.remove("noscroll");
    header.classList.remove("open");
    fadeElems.forEach((element) => {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    rowsBlog.forEach((elements) => {
      elements.classList.add("sendBack");
    });
    // hero.classList.add("sendBack");
    body.classList.add("noscroll");
    header.classList.add("open");
    fadeElems.forEach((element) => {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
});

//  working with the posts
function getJSON(file) {
  return fetch(file).then((response) => response.json());
}

// Load JSON data; then Proceed
getJSON("app/js/posts_dataFeast.json").then((data) => {
  const lastPosts = data.slice(0, 4);

  const article = document.getElementsByClassName("article__grid");
  const feature = document.getElementsByClassName("feature__grid");

  if (article.length > 0) {
    lastPosts.forEach((post) => {
      const card = `<a href="${post.trabajo}" class="article__item">
      <div class="article__image" style="background-image: url('${post.image}');"></div>
      <div class="article__text">
        <div class="article__title">${post.title}</div>
        <div class="article__description">${post.description}    </div>
      </div>
      </a>`;
      const ele = document.createElement("div");
      ele.innerHTML = card;
      document.querySelector(".article__grid").appendChild(ele.firstChild);
    });
  }

  if (feature.length > 0) {
    data.forEach((post) => {
      const card = `<div class="feature__item">
      <div class="feature__image" style="background-image: url('${post.image}');"></div>
            <div class="feature__title">${post.title}</div>
            <div class="feature__description"> ${post.description}</div>
            <div class="feature__footer">
              <a href="${post.trabajo}" class="button"><span class="icon-feast_ico2"></span> Trabajo</a>
              <a href="${post.github}" class="button button_git"><i class="fab fa-github"></i> Datos</a>
            </div></div>`;
      const ele = document.createElement("div");
      ele.innerHTML = card;
      document.querySelector(".feature__grid").appendChild(ele.firstChild);
    });
  }
});
