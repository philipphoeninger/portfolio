import { LitElement, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { style } from "./ph-menu.component.css.ts";
import { msg, localized, LOCALE_STATUS_EVENT } from "@lit/localize";
import { classMap } from "lit/directives/class-map.js";

@customElement("ph-menu")
@localized()
export class PhMenu extends LitElement {
  static get styles() {
    return [style];
  }

  @property({ type: Array }) options: {
    id: number;
    name: string;
    highlighted?: boolean;
  }[] = [];
  @property({ type: String }) logoCaption = "";
  @property({ type: Boolean }) showLanguageSelector = false;

  @query("#menu-btn", true) _menuBtn: any;

  private selectItem(option: any) {
    const selectedItem = {
      detail: { id: option.id, name: option.name },
      bubbles: true,
      composed: true,
    };
    if (this._menuBtn) this._menuBtn.checked = false;
    return this.dispatchEvent(new CustomEvent("onSelect", selectedItem));
  }

  render() {
    return html`
      <a class="logo">${this.logoCaption}</a>
      <!-- <ph-select-locale></ph-select-locale> -->
      <input class="menu-btn" type="checkbox" id="menu-btn" />
      <label class="menu-icon" for="menu-btn"
        ><span class="nav-icon"></span
      ></label>
      <div class="menu__items">
        <ul>
          ${this.options.map((option) => {
            const classes = { highlighted: option.highlighted ?? false };
            return html`<li
              class=${classMap(classes)}
              @click=${() => this.selectItem(option)}
            >
              <a class="item">${option.name} </a>
            </li>`;
          })}
        </ul>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-menu": PhMenu;
  }
}
