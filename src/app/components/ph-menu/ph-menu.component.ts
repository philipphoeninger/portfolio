import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { style } from "./ph-menu.component.scss.ts";

@customElement("ph-menu")
export class PhMenu extends LitElement {
  static get styles() {
    return [style];
  }

  render() {
    return html`<p>X</p>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-menu": PhMenu;
  }
}
