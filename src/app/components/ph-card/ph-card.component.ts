import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { style } from "./ph-card.component.css.ts";
import { TagModel } from "@app/models/tag.model.ts";
import { msg, localized } from "@lit/localize";
import githubIcon from "@assets/icons/github.svg";
import linkIcon from "@assets/icons/arrow-up-right-from-square-solid.svg";

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
              <a href="${this.sourceUrl}">
                <object
                  data="${githubIcon.substring(4, githubIcon.length)}"
                  type="image/svg+xml"
                >
                  Github SVG-Icon
                </object></a
              >
            </div>
            <div>
              <a
                href="${this.liveUrl}"
                title="${msg("Link to Live Project", { desc: "TODO" })}"
                >Live</a
              >
              <a href="${this.liveUrl}"
                ><object
                  data="${linkIcon.substring(4, linkIcon.length)}"
                  type="image/svg+xml"
                >
                  Link Square SVG-Icon
                </object></a
              >
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
