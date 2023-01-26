import { LitElement, html, css } from "lit";

class WebSeriesOverview extends LitElement {
  static get properties() {
    return {
      cards: { type: Array },
    };
  }

  constructor() {
    super();
    this.cards = [
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
  }

  static get styles() {
    return css`
      .container-right {
        width: 50%;
        height: auto;
        float: right;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        flex-wrap: wrap;
        align-items: center;
        flex-flow: row wrap;
        border-left: 2px solid black;
        background-color: rgb(149, 189, 202);
      }

      .card1,
      .card2,
      .card3,
      .card4,
      .card5,
      .card6 {
        width: 100%;
        max-width: 250px;
        margin: 5px;
        text-align: center;
        border: 2px solid black;
        flex: 35%;
        height: 300px;
        padding: 10px;
        background-color: rgb(12, 121, 157);
      }

      .card {
        height: auto;
      }

      .card button:hover {
        background-color: rgb(114, 114, 224);
      }

      img {
        width: 100px;
        height: 100px;
      }

      .card:hover {
        background-color: #bdc4c4;
      }
    `;
  }

  render() {
    return html`
      <div class="container-right">
        ${this.cards.map(
          (i) => html`
            <div class="card cardi">
              <img src="#" alt="#" style="width: 70%"/>
              <div class="container">
                <h4><b>${i.title}</b></h4>
                <p>${i.director}</p>
                <p>${i.stars}</p>
                <p>${i.platform}</p>
              </div>
            </div>
          `
        )}
      </div>
    `;
  }
}

customElements.define("web-series-overview", WebSeriesOverview);
