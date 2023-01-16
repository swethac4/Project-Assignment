class WebSeries {
  constructor(title, directors, stars, platform) {
    this.title = title;
    this.directors = directors;
    this.stars = stars;
    this.platform = platform;
  }

  get title() {
    return this.title;
  }

  get directors() {
    return this.directors;
  }

  get stars() {
    return this.stars;
  }

  get platform() {
    return this.platform;
  }

  set title(tt) {
    this.title = tt;
  }

  set directors(dd) {
    this.directors = dd;
  }

  set stars(ss) {
    this.stars = ss;
  }

  set platform(pp) {
    this.platform = pp;
  }

  addCard() {
    const sec = document.querySelector(".section-cards");
    const div = document.createElement("div");

    div.className = "card";
    div.innerHTML = `
    <p class="card-title">${this.title}</p>
    <ul class="card-details">
     <li class="card-dir">${this.director}</li>
     <li class="card-dir">${this.stars}</li>
     <li class="card-dir">${this.plaform}</li>
    </ul>
    `;

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
  cards
    .map((card) => {
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
    })
    .join("");
});
function deleteFunc(id) {
  const name = "card" + id;
  const dom = document.getElementsByClassName(name).item(0);
  dom.parentNode.removeChild(dom);
  console.log(dom.pa);
  const items = cards.filter((item) => item.title != title);
  console.log(items);
}
const button = document.getElementsByClassName("card1");

const delCard = document.querySelectorAll(".delete");
delCard.forEach((del) => {
  del.addEventListener("click", function () {
    del.parentElement.remove();
  });
});
