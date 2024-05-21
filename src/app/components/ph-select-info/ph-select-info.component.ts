import { LitElement, html } from "lit";
import { customElement, property, query, queryAll } from "lit/decorators.js";
import { style } from "./ph-select-info.component.css.ts";
import { SkillModel } from "@app/models/skill.model.ts";
import codeIcon from "@assets/icons/code-solid.svg";
import serverIcon from "@assets/icons/server-solid.svg";
import databaseIcon from "@assets/icons/database-solid.svg";
import arrowRightIcon from "@assets/icons/chevron-right-solid.svg";
import { classMap } from "lit/directives/class-map.js";
import { EnSkillArea } from "@app/models/skill-area.enum.ts";

@customElement("ph-select-info")
export class PhSelectInfo extends LitElement {
  static get styles() {
    return [style];
  }

  @property({ type: Array }) skills: SkillModel[] = [];
  // @property({ type: Array }) skillAreas: { id: number; caption: string }[] = [];

  @queryAll("[data-target]") tabs: NodeListOf<HTMLDivElement>;
  @queryAll("[data-content]") tabContent: NodeListOf<HTMLDivElement>;

  protected firstUpdated(): void {
    this.tabs?.forEach((tab: any) => {
      tab.addEventListener("click", () => {
        const target = this.shadowRoot?.querySelector(tab.dataset.target);

        this.tabContent?.forEach((item) => {
          item.classList.remove("skills__active");
        });
        target?.classList.add("skills__active");
        this.tabs?.forEach((item: any) => {
          item.classList.remove("skills__active");
        });
        tab.classList.add("skills__active");
      });
    });
  }

  optionSelectHandler(e: CustomEvent) {
    this.tabContent?.forEach((item) => {
      item.classList.remove("skills__active");
      if (item.id === EnSkillArea[e.detail.id].toLocaleLowerCase()) {
        item.classList.add("skills__active");
      }
    });
  }

  render() {
    return html`
      <ph-dropdown
        .options="${this.skills.map((skill) => {
          return { id: skill.id, label: skill.label };
        })}"
        @onSelect="${(e: CustomEvent) => this.optionSelectHandler(e)}"
      ></ph-dropdown>
      <div class="select-info-container">
        <ul class="skills__tabs">
          ${this.skills.map((skill) => {
            let first = this.skills[0].id === skill.id;
            const liClasses = { skills__header: true, skills__active: first };
            return html`
              <li
                class=${classMap(liClasses)}
                data-target="#${skill.label.toLocaleLowerCase()}"
              >
                <object
                  data="${skill.iconUrl}"
                  type="image/svg+xml"
                  class="skills__icon"
                >
                  Skill Area SVG-Icon
                </object>
                <div>
                  <h2 class="skills__title">${skill.label}</h2>
                  <span class="skills__subtitle">${skill.description}</span>
                </div>
                <object
                  data="${arrowRightIcon}"
                  type="image/svg+xml"
                  class="skills__arrow"
                >
                  Arrow Right SVG-Icon
                </object>
              </li>
            `;
          })}
        </ul>

        <ul class="skills__content">
          ${this.skills.map((skill) => {
            let first = this.skills[0].id === skill.id;
            const contentClasses = {
              skills__group: true,
              skills__active: first,
            };
            return html`
              <li
                class=${classMap(contentClasses)}
                data-content
                id="${skill.label.toLocaleLowerCase()}"
              >
                <ul class="skills__list">
                  ${skill.entries.map((skillItem) => {
                    return html`
                      <li class="skills__data">
                        <div class="skills__titles">
                          <div class="skills__item_caption">
                            <h3 class="skills__name">${skillItem.label}</h3>
                            <object
                              data="${skillItem.iconUrl}"
                              type="image/svg+xml"
                              class="skills__icon"
                            >
                              Skill Item SVG-Icon
                            </object>
                          </div>
                          <div class="skills__item__progress">
                            <div class="skills__description"></div>
                              ${skillItem.description}
                            </div>
                            <span class="skills__number"
                              >${skillItem.progress * 100} %</span
                            >
                          </div>
                        </div>

                        <div class="skills__bar">
                          <span
                            class="skills__percentage"
                            style="width: ${skillItem.progress * 100}%;"
                          ></span>
                        </div>
                      </li>
                    `;
                  })}
                </ul>
              </li>
            `;
          })}
        </ul>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-select-info": PhSelectInfo;
  }
}
