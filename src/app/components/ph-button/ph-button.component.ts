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
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <div id="button-group">
        <div id="action-button">${this.caption}</div>
        <div id="icon-container">
          <i class="${this.icon}"></i>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-button": PhButton;
  }
}
