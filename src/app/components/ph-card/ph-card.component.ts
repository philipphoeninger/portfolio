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
  @property({ type: Boolean }) imageOnRight: boolean = false;

  render() {
    return html`
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      />

      <article class="card-container">
        <picture class="card__img order-end">
          <source
            srcset="images/image-product-desktop.jpg"
            media="(min-width: 600px)"
          />
          <img
            src="images/image-product-mobile.jpg"
            alt="some description about the image"
          />
        </picture>

        <div class="card__content">
          <h3 class="card__title">${this.label}</h3>
          <p>${this.description}</p>

          <ul class="flex-group">
            ${this.tags?.map((tag) => html`<li>${tag.label}</li>`)}
          </ul>

          <div class="flex-group">
            <div class="margin-right">
              <a
                href="${this.sourceUrl}"
                title="${msg("Link to Project Code", { desc: "TODO" })}"
                >Code</a
              >
              <a href="${this.sourceUrl}"
                ><i class="fa-brands fa-github"></i
              ></a>
            </div>
            <div>
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
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-card": PhCard;
  }
}
