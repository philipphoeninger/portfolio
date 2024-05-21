import { localized, msg } from "@lit/localize";
import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { style } from "./ph-footer.component.css";

@customElement("ph-footer")
@localized()
export class PhFooter extends LitElement {
  static get styles() {
    return [style];
  }

  @property({ type: Array }) items: {
    id: number;
    caption: string;
  }[] = [];

  private selectItem(item: any) {
    const selectedItem = {
      detail: { id: item.id, caption: item.caption },
      bubbles: true,
      composed: true,
    };
    return this.dispatchEvent(new CustomEvent("onSelect", selectedItem));
  }

  render() {
    return html` <footer id="footer">
      <p>${msg("Copyright")} &copy; 2024. ${msg("All rights reserved")}</p>
      <div id="items">
        <ul>
          ${this.items.map((item) => {
            return html`<li @click=${() => this.selectItem(item)}>
              <a class="item">${item.caption}</a>
            </li>`;
          })}
        </ul>
      </div>
    </footer>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-footer": PhFooter;
  }
}
