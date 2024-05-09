import { localized } from "@lit/localize";
import { html, LitElement } from "lit";
import { customElement, property, queryAll } from "lit/decorators.js";
import { style } from "./ph-scroller.component.css";

@customElement("ph-scroller")
@localized()
export class PhScroller extends LitElement {
  static get styles() {
    return [style];
  }

  @property({ type: String }) caption: string = "";
  @property({ type: String }) icon: string = "";

  @queryAll(".scroller") _scrollers: NodeListOf<any>[];

  firstUpdated() {
    if (!window.matchMedia("(prefers-reduced-motion: reduce").matches) {
      this.addAnimation();
    }
  }

  addAnimation() {
    this._scrollers.forEach((scroller: any) => {
      scroller.setAttribute("data-animated", true);

      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item: any) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("area-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }

  render() {
    return html`
      <div
        class="scroller"
        data-direction="left"
        style="--_animation-duration: 25s"
      >
        <ul class="tag-list scroller__inner">
          <li>
            <img
              src="./src/assets/img/ceiton_technologies_gmbh.png"
              width="50px"
              height="50px"
            />
          </li>
          <li>
            <img
              src="./src/assets/img/systhemis_ag.png"
              width="65px"
              height="65px"
            />
          </li>
          <li>
            <img
              src="./src/assets/img/factura_ag_2.png"
              width="60px"
              height="60px"
            />
          </li>
        </ul>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-scroller": PhScroller;
  }
}
