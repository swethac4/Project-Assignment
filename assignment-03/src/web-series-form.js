import { LitElement, html, css } from "lit";

class WebSeriesForm extends LitElement {
  static get styles() {
    return css`
      .container-left {
        width: 100%;
        background-color: rgb(149, 189, 202);
      }
      .form {
        justify-content: center;
        padding: 100px 300px 480px 250px;
        border-left: 2px solid black;
        border-bottom: 2px solid black;
      }
      .form input,
      #platform {
        margin: 10px;
        padding: 5px;
        width: 200%;
        display: block;
        background-color: rgb(12, 121, 157);
      }
      .form input:hover,
      #platform:hover {
        background-color: #bdc4c4;
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      directors: { type: String },
      stars: { type: String },
      platform: { type: String },
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="container-left">
        <form class="form">
          <h4>
            Title:
            <input type="type The Title" placeholder="Title" />
          </h4>
          <h4>
            Director:
            <input type="type The Director" placeholder="Director" />
          </h4>
          <h4>Stars: <input type="type The Stars" placeholder="Star" /></h4>
          <h4>
            Streaming On:
            <select name="Platform" id="platform">
              <option value="Netflix">Netflix</option>
              <option value="Amazon Prime">Amazon Prime</option>
              <option value="Voot">Voot</option>
              <option value="Hotstar">Hotstar</option>
            </select>
          </h4>
          <input class="add" type="submit" value="Add" />
        </form>
      </div>
    `;
  }
}

customElements.define("web-series-form", WebSeriesForm);
