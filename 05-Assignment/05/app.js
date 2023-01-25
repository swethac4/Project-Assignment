let id = 7;
class WebSeries {
  constructor(id, title, directors, stars, platform) {
    this.id = id;
    this.title = title;
    this.directors = directors;
    this.stars = stars;
    this.platform = platform;
  }

  get Id() {
    return this.id;
  }

  get Title() {
    return this.title;
  }

  get Directors() {
    return this.directors;
  }

  get Stars() {
    return this.stars;
  }

  get Platform() {
    return this.platform;
  }

  set Id(id) {
    this.id = id;
  }
  set Title(tt) {
    this.title = tt;
  }

  set Directors(dd) {
    this.directors = dd;
  }

  set Stars(ss) {
    this.stars = ss;
  }

  set Platform(pp) {
    this.platform = pp;
  }

  displayForm() {
    console.log(`Title: ${this.title}`);
    console.log(`Director: ${this.director}`);
    console.log(`Stars: ${this.stars}`);
    console.log(`Platform: ${this.platform}`);
    console.log(`Platform: ${this.id}`);
  }

  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("director").value = "";
    document.getElementById("star").value = "";
    document.getElementById("platform").value = "choose one";
  }

  addCard() {
    const currId = this.id;
    id++;
    const sec = document.querySelector(".container-right");
    const div = document.createElement("div");
    div.classList.add("card", "card" + currId);
    const img = document.createElement("img");
    img.src = this.image;

    const container = document.createElement("div");
    container.classList.add("container");

    const h4 = document.createElement("h4");
    h4.classList.add("title");
    container.setAttribute("id", this.title);
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    p1.innerHTML = this.directors;
    p2.innerHTML = this.stars;
    p3.innerHTML = this.platform;

    h4.innerHTML = this.title.toUpperCase();
    container.append(h4, p1, p2, p3);
    const button = document.createElement("button");
    button.innerText = "Delete";
    button.classList.add("button");
    button.setAttribute("id", "delete");
    button.onclick = function () {
      deleteFunc(currId);
    };
    div.append(img, container, button);
    sec.appendChild(div);
  }
}

let cards = [
  {
    id: 1,
    image: "img/DelhiCrimeSeason.jpg",
    title: "delhi crime",
    directors: "Richie Mehta",
    stars: "Shefali Shah",
    platform: "Netflix",
  },
  {
    id: 2,
    image: "img/family man.jpg",
    title: "family man",
    directors: "Raj Nidimoru",
    stars: "Srikanth Tiwari",
    platform: "Amazon prime",
  },
  {
    id: 3,
    image: "img/gameOfThrones.jpg",
    title: "game of thrones",
    directors: "Mark Mylod",
    stars: "Emilia Clarke",
    platform: "Hotstar",
  },
  {
    id: 4,
    image: "img/halfpantsfullpants.jpg",
    title: "half pants",
    directors: "Prakash Raj",
    stars: "Anand Rao",
    platform: "Amazon Prime",
  },
  {
    id: 5,
    image: "img/Mismatched_poster.jpg",
    title: "mismatched",
    directors: "Akarsh Kurana",
    stars: "Prajaktha Kohli",
    platform: "Netflix",
  },
  {
    id: 6,
    image: "img/moneyheist.jpg",
    title: "money heist",
    directors: "Alex Pina",
    stars: "Alvaro Morte",
    platform: "Voot",
  },
];

window.addEventListener("load", (event) => {
  const sec = document.querySelector(".container-right");
  cards.map((card) => {
    const div = document.createElement("div");
    div.classList.add("card", "card" + card.id);
    const img = document.createElement("img");
    img.src = card.image;

    const container = document.createElement("div");
    container.classList.add("container");

    const h4 = document.createElement("h4");
    h4.classList.add("title");
    container.setAttribute("id", card.title);
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    p1.innerHTML = card.directors;
    p2.innerHTML = card.stars;
    p3.innerHTML = card.platform;

    h4.innerHTML = card.title.toUpperCase();
    container.append(h4, p1, p2, p3);
    const button = document.createElement("button");
    button.innerText = "Delete";
    button.classList.add("button");
    button.setAttribute("id", "delete");
    button.onclick = function () {
      deleteFunc(card.id);
    };
    div.append(img, container, button);
    sec.appendChild(div);
  });

  const add = document.getElementById("add");
  add.addEventListener("click", function (e) {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const director = document.getElementById("director").value;
    const starts = document.getElementById("star").value;
    const platform = document.getElementById("platform").value;
    const item = new WebSeries(7, title, director, starts, platform);
    item.addCard();
    item.displayForm();
    item.clearFields();
  });
});

function deleteFunc(id) {
  const name = "card" + id;
  const dom = document.getElementsByClassName(name).item(0);
  dom.parentNode.removeChild(dom);
}
