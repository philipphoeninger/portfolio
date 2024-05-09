import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { style } from "./ph-showcase.component.css.ts";
import { msg, localized, LOCALE_STATUS_EVENT } from "@lit/localize";

@customElement("ph-showcase")
@localized()
export class PhShowcase extends LitElement {
  static get styles() {
    return [style];
  }

  // @property({ type: Array }) options: { name: string; link: string }[] = [];
  @property({ type: String }) heading = "";
  @property({ type: String }) description = "";

  render() {
    return html`
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <div id="text-container">
        <p id="name">Max Mustermann</p>
        <h1>${this.heading}</h1>
        <p id="text">${this.description}</p>
        <ph-button
          caption="Contact me"
          icon="fa-solid fa-arrow-down-long"
        ></ph-button>
      </div>
      <picture id="portrait">
        <source
          media="(min-width: 1250px)"
          srcset="./src/assets/img/portrait.jpg"
        />
        <source
          media="(min-width: 769px)"
          srcset="./src/assets/img/portrait.png"
        />
        <source
          media="(min-width: 498px)"
          srcset="./src/assets/img/portrait.jpg"
        />
        <img src="./src/assets/img/portrait.png" alt="Portrait Image" />
      </picture>
      <div id="social-media">
        <ul>
          <li>
            <a href="index.html">
              <i class="fa-brands fa-angular"></i
              ><!-- fa-instagram -->
            </a>
          </li>
          <li>
            <a href="index.html">
              <i class="fa-brands fa-js"></i
              ><!--fa-solid fa-envelope -->
            </a>
          </li>
          <li>
            <a href="index.html">
              <i class="fa-brands fa-css3"></i
              ><!-- fa-linkedin -->
            </a>
          </li>
          <li>
            <a href="index.html">
              <i class="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a href="index.html">
              <i class="fa-solid fa-download"></i>
            </a>
          </li>
        </ul>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-showcase": PhShowcase;
  }
}
