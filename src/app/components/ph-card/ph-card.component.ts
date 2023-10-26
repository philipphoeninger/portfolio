import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { style } from "./ph-card.component.scss.ts";
import { TagModel } from "@app/models/tag.model.ts";
import { msg, localized } from "@lit/localize";

@customElement("ph-card")
@localized()
export class PhCard extends LitElement {
  static get styles() {
    return [style];
  }

  @property({ type: String }) label: string = "Label";
  @property({ type: String }) description: string = "Description";
  @property({ type: String }) imageName: string = "https://www.google.com";
  @property({ type: String }) sourceUrl: string = "https://www.google.com";
  @property({ type: String }) liveUrl: string = "https://www.google.com";
  @property({ type: Array }) tags: TagModel[] = [];

  render() {
    return html`
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      />
      <div class="phCard">
        <img class="phCard--image" src="" />
        <div class="phCard--content">
          <h3>${this.label}</h3>
          <p class="phCard--content-text">${this.description}</p>
          <div class="phCard--tags">
            <ul>
              ${this.tags?.map((tag) => html`<li>${tag.label}</li>`)}
            </ul>
          </div>
          <div class="phCard--links">
            <div class="source">
              <a
                href="${this.sourceUrl}"
                title="${msg("Link to Project Code", { desc: "TODO" })}"
                >Code</a
              >
              <a href="${this.sourceUrl}"
                ><i class="fa-brands fa-github"></i
              ></a>
            </div>
            <div class="live">
              <a
                href="${this.liveUrl}"
                title="${msg("Link to Live Project", { desc: "TODO" })}"
                >Live</a
              >
              <a href="${this.liveUrl}"
                ><i class="fa-solid fa-up-right-from-square"></i
              ></a>
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
