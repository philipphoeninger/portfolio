import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { style } from "./ph-showcase.component.css.ts";
import { msg, localized, LOCALE_STATUS_EVENT } from "@lit/localize";
import csharp from "@assets/icons/csharp.svg";
import angular from "@assets/icons/angular.svg";
import css from "@assets/icons/css.svg";
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
  @property({ type: String }) heading = "";
  @property({ type: String }) description = "";

  render() {
    return html`
      <div id="text-container">
        <p id="name">Max Mustermann</p>
        <h1>${this.heading}</h1>
        <p id="text">${this.description}</p>
        <ph-button
          caption="Contact me"
          icon="${arrowDownLong}"
          @click=${() =>
            this.dispatchEvent(
              new CustomEvent("onBtnClick", { bubbles: true, composed: true })
            )}
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
            <!-- <a href="index.html"> -->
            <object
              data="${angular.substring(4, angular.length)}"
              type="image/svg+xml"
            >
              Angular SVG-Icon
            </object>
            <!-- </a> -->
          </li>
          <li>
            <!-- <a href="index.html"> -->
            <object
              data="${typescript.substring(4, typescript.length)}"
              type="image/svg+xml"
            >
              TypeScript SVG-Icon
            </object>
            <!-- </a> -->
          </li>
          <li>
            <!-- <a href="index.html"> -->
            <object
              data="${sass.substring(4, sass.length)}"
              type="image/svg+xml"
            >
              Sass SVG-Icon
            </object>
            <!-- </a> -->
          </li>
          <li>
            <!-- <a href="index.html"> -->
            <object
              data="${htmlSvg.substring(4, htmlSvg.length)}"
              type="image/svg+xml"
            >
              HTML SVG-Icon
            </object>
            <!-- </a> -->
          </li>
          <li>
            <!-- <a href="index.html"> -->
            <object
              data="${csharp.substring(4, csharp.length)}"
              type="image/svg+xml"
            >
              C# SVG-Icon
            </object>
            <!-- </a> -->
          </li>
          <li>
            <!-- <a href="index.html"> -->
            <object
              id="sql-icon"
              data="${sql.substring(4, sql.length)}"
              type="image/svg+xml"
            >
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
