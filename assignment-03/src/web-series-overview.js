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
        cardid: 1,
        image: "img/delhicrime",
        title: "delhi crime",
        directors: "Richie Mehta",
        stars: "Shefali Shah",
        platform: "Netflix",
      },
      {
        cardid: 2,
        image: "img/delhicrime.jpg",
        title: "family man",
        directors: "Raj Nidimoru",
        stars: "Srikanth Tiwari",
        platform: "Amazon prime",
      },
      {
        cardid: 3,
        image: "img/gameOfThrones.jpg",
        title: "game of thrones",
        directors: "Mark Mylod",
        stars: "Emilia Clarke",
        platform: "Hotstar",
      },
      {
        cardid: 4,
        image: "img/halfpantsfullpants.jpg",
        title: "half pants",
        directors: "Prakash Raj",
        stars: "Anand Rao",
        platform: "Amazon Prime",
      },
      {
        cardid: 5,
        image: "img/Mismatched_poster.jpg",
        title: "mismatched",
        directors: "Akarsh Kurana",
        stars: "Prajaktha Kohli",
        platform: "Netflix",
      },
      {
        cardid: 6,
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
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        flex-flow: row wrap;
        border-left: 2px solid black;
        border-right: 2px solid black;
        border-bottom: 2px solid black;
        background-color: rgb(149, 189, 202);
      }
      .card {
        width: 250%;
        max-width: 280px;
        margin: 5px;
        text-align: center;
        border-top: 2px solid black;
        border-bottom: 2px solid black;
        border-left: 2px solid black;
        border-right: 2px solid black;
        flex: 35%;
        height: 300px;
        padding: 10px;
        background-color: rgb(12, 121, 157);
      }
      .card:hover {
        background-color: #bdc4c4;
      }
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    const deleteButton = this.shadowRoot.querySelector("button");
    deleteButton.onclick = () => {
      this.deleteCard(1);
    };
  }

  deleteCard(id) {
    const card = this.shadowRoot.querySelector(`.card${id}`);
    card.parentNode.removeChild(card);
  }

  render() {
    return html`
      <div class="container-right">
        ${this.cards.map(
          (i) => html`
            <div class="card card${i.cardid}">
              <img src="#" alt="img" style="width: 70%" />
              <div class="container">
                <h4><b>${i.title.toUpperCase()}</b></h4>
                <p>${i.directors}</p>
                <p>${i.stars}</p>
                <p>${i.platform}</p>
              </div>
              <button id="delete" @click="${() => this.deleteCard(i.cardid)}">
                Delete
              </button>
            </div>
          `
        )}
      </div>
    `;
  }
}
customElements.define("web-series-overview", WebSeriesOverview);
