import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { style } from "./ph-card.component.scss.ts";

@customElement("ph-card")
export class PhCard extends LitElement {
  static get styles() {
    return [style];
  }

  @property({ type: String }) label: string = "Label";
  @property({ type: String }) description: string = "Description";
  @property({ type: String }) imageUrl: string = "https://www.google.com";
  @property({ type: String }) sourceUrl: string = "https://www.google.com";
  @property({ type: String }) liveUrl: string = "https://www.google.com";
  @property({ type: Array }) tags = [];

  render() {
    return html`
      <div class="phCard">
        <img class="phCard--image" src="" />
        <div class="phCard--content">
          <h3>${this.label}</h3>
          <p class="phCard--content-text">${this.description}</p>
          <div class="phCard--tags">
            <ul>
              ${this.tags?.map((tag) => html`<li>${tag}</li>`)}
            </ul>
          </div>
          <div class="phCard--links">
            <div class="source">
              <span>Code</span>
              <span>icon</span>
            </div>
            <div class="live">
              <span>Live</span>
              <span>icon</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-card": PhCard;
  }
}
