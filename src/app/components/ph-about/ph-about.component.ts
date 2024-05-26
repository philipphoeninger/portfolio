import { localized } from "@lit/localize";
import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { style } from "./ph-about.component.css";
import { AboutEntryModel } from "@models/aboutEntry.model";

@customElement("ph-about")
@localized()
export class PhAbout extends LitElement {
  static get styles() {
    return [style];
  }

  @property({ type: Array }) entries: AboutEntryModel[] = [];

  render() {
    return html`
      <ul id="about__list">
        ${this.entries.map((entry) => {
          return html`
            <li class="about__item">
              <object
                data="${entry.iconUrl}"
                type="image/svg+xml"
                class="about__icon"
              >
                About Entry SVG-Icon
              </object>
              <h3>${entry.caption}</h3>
              <p class="about__date">${entry.dateRange}</p>
              <ul id="description__list">
                ${entry.description.map((descriptionEntry) => {
                  return html`
                    <li class="description__item">
                      <object
                        data="${descriptionEntry.iconUrl}"
                        type="image/svg+xml"
                        class="about__icon"
                      >
                        About Description Entry SVG-Icon
                      </object>
                      ${descriptionEntry.label}
                    </li>
                  `;
                })}
              </ul>
            </li>
            <!-- <hr /> -->
          `;
        })}
        <li class="about__item">
          <h3>?</h3>
        </li>
      </ul>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-about": PhAbout;
  }
}
