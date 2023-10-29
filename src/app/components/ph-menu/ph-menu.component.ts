import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { style } from "./ph-menu.component.scss.ts";
import { msg, localized, LOCALE_STATUS_EVENT } from "@lit/localize";

@customElement("ph-menu")
@localized()
export class PhMenu extends LitElement {
  static get styles() {
    return [style];
  }

  @property({ type: Array }) options: { name: string; link: string }[] = [];
  @property({ type: String }) logoCaption = "";

  private selectItem(event: Event) {
    console.log(event);
    const id = (event.target as HTMLElement).id;
    const options = {
      detail: { id },
      bubbles: true,
      composed: true,
    };
    this.dispatchEvent(new CustomEvent("select", options));
  }

  render() {
    return html`
      <a class="logo">${this.logoCaption}</a>
      <input class="menu-btn" type="checkbox" id="menu-btn" />
      <label class="menu-icon" for="menu-btn"
        ><span class="nav-icon"></span
      ></label>
      <div class="menu__items">
        <ul>
          ${this.options.map(
            (option) =>
              html`<li>
                <a class="item" @click=${this.selectItem}> ${option.name} </a>
              </li>`
          )}
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
