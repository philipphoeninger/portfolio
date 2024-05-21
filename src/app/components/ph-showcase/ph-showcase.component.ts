import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { style } from "./ph-showcase.component.css.ts";
import { localized, LOCALE_STATUS_EVENT } from "@lit/localize";
import csharp from "@assets/icons/csharp.svg";
import angular from "@assets/icons/angular.svg";
// import css from "@assets/icons/css.svg";
import sass from "@assets/icons/sass.svg";
import htmlSvg from "@assets/icons/html.svg";
import typescript from "@assets/icons/typescript.svg";
import sql from "@assets/icons/sql_3.svg";
import arrowDownLong from "@assets/icons/arrow-down-long-solid.svg";

@customElement("ph-showcase")
@localized()
export class PhShowcase extends LitElement {
  static get styles() {
    return [style];
  }

  // @property({ type: Array }) options: { name: string; link: string }[] = [];
  @property({ type: String }) name = "";
  @property({ type: String }) heading = "";
  @property({ type: String }) btnCaption = "Button";
  @property({ type: String }) description = "";
  @property({ type: Array }) imgUrls: string[] = [];

  render() {
    return html`
      <div id="text-container">
        <p id="name">${this.name}</p>
        <h1>${this.heading}</h1>
        <p id="text">${this.description}</p>
        <ph-button
          caption="${this.btnCaption}"
          icon="${arrowDownLong}"
          @click=${() =>
            this.dispatchEvent(
              new CustomEvent("onBtnClick", { bubbles: true, composed: true })
            )}
        ></ph-button>
      </div>
      <picture id="portrait">
        <source media="(min-width: 1250px)" srcset="${this.imgUrls[3]}" />
        <source media="(min-width: 769px)" srcset="${this.imgUrls[2]}" />
        <source media="(min-width: 498px)" srcset="${this.imgUrls[1]}" />
        <img src="${this.imgUrls[0]}" alt="Portrait Image" />
      </picture>
      <div id="social-media">
        <ul>
          <li>
            <!-- <a href="index.html"> -->
            <object data="${angular}" type="image/svg+xml">
              Angular SVG-Icon
            </object>
            <!-- </a> -->
          </li>
          <li>
            <!-- <a href="index.html"> -->
            <object data="${typescript}" type="image/svg+xml">
              TypeScript SVG-Icon
            </object>
            <!-- </a> -->
          </li>
          <li>
            <!-- <a href="index.html"> -->
            <object data="${sass}" type="image/svg+xml">Sass SVG-Icon</object>
            <!-- </a> -->
          </li>
          <li>
            <!-- <a href="index.html"> -->
            <object data="${htmlSvg}" type="image/svg+xml">
              HTML SVG-Icon
            </object>
            <!-- </a> -->
          </li>
          <li>
            <!-- <a href="index.html"> -->
            <object data="${csharp}" type="image/svg+xml">C# SVG-Icon</object>
            <!-- </a> -->
          </li>
          <li>
            <!-- <a href="index.html"> -->
            <object id="sql-icon" data="${sql}" type="image/svg+xml">
              SQL SVG-Icon
            </object>
            <!-- </a> -->
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
