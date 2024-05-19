import { localized } from "@lit/localize";
import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { style } from "./ph-button.component.css";

@customElement("ph-button")
@localized()
export class PhButton extends LitElement {
  static get styles() {
    return [style];
  }

  @property({ type: String }) caption: string = "";
  @property({ type: String }) icon: string = "";

  render() {
    return html`
      <div id="action-button">${this.caption}</div>
      <div id="icon-container">
        <object data="${this.icon}" type="image/svg+xml">Icon SVG-Icon</object>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-button": PhButton;
  }
}
