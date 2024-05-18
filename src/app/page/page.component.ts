import { WorkModel } from "./../models/work.model";
import { SkillModel } from "./../models/skill.model";
import { LitElement, html, nothing } from "lit";
import { customElement } from "lit/decorators.js";
import { style } from "./page.component.css.ts";
import { data } from "../../assets/data.ts";
import { msg, localized, LOCALE_STATUS_EVENT } from "@lit/localize";
import { setLocaleFromUrl } from "../localization.ts";
import { query } from "lit/decorators/query.js";
// import { EnSkillArea } from "@models/skill-area.enum.ts";
import { ConfigModel } from "@models/config.model.ts";
import { EnMenuOption } from "@models/menuOption.enum.ts";
import portraitOne from "@assets/img/portrait.png";
import portraitTwo from "@assets/img/portrait.jpg";
import arrowUpLong from "@assets/icons/arrow-up-long-solid.svg";
// import arrowUp from "@assets/icons/arrow-up-solid.svg";

@customElement("app-page")
@localized()
export class Page extends LitElement {
  static get styles() {
    return [style];
  }

  @query("#spinner", true) _spinner: any;
  @query("#scroll-up", true) _scrollUp: any;
  @query("ph-menu", true) _menu: any;
  @query("#work", true) _work: any;
  @query("#skills", true) _skills: any;
  @query("#contact", true) _contact: any;
  @query("#main-container", true) _mainContainer: any;
  @query("#impressum", true) _impressum: any;
  @query("#dataPrivacy", true) _dataPrivacy: any;

  static properties = {
    skills: {
      type: Array<SkillModel>,
      attribute: false,
    },
    work: {
      type: Array<WorkModel>,
      attribute: false,
    },
    menuLinks: {
      type: Array<{ id: number; name: string; link: string }>,
      attribute: false,
    },
    footerLinks: {
      type: Array<{ id: number; caption: string }>,
      attribute: false,
    },
    skillAreas: {
      type: Array<{ id: number; caption: string }>,
      attribute: false,
    },
    configData: {
      type: ConfigModel,
      attribute: false,
    },
  };

  constructor() {
    super();
    /** extract and process config data */
    this.configData = data;
    this.skills = data.skills || {};
    this.work = data.work || {};
    this.menuLinks = [
      { id: EnMenuOption.Home, name: msg("Home") },
      // {
      //   id: EnMenuOption.Skills,
      //   name: msg("Skills"),
      // },
      // {
      //   id: EnMenuOption.About,
      //   name: msg("About"),
      // },
      {
        id: EnMenuOption.Contact,
        name: msg("Contact me"),
        highlighted: true,
      },
    ];
    this.footerLinks = [
      { id: 0, caption: "Terms" },
      {
        id: 1,
        caption: "Privacy",
      },
    ];
    this.skillAreas = [
      { id: 0, caption: "Frontend" },
      { id: 1, caption: "Backend" },
    ];

    this.handleScrollEvents();
  }

  connectedCallback() {
    super.connectedCallback();
    // Update the locale to match the URL when the user moves backwards or forwards
    // through history.
    window.addEventListener("popstate", () => {
      setLocaleFromUrl();
    });

    window.addEventListener(
      LOCALE_STATUS_EVENT,
      this.setSpinnerVisibility.bind(this)
    );
  }

  // Display a spinner whenever a new locale is loading.
  setSpinnerVisibility(event: any) {
    if (event.detail.status === "loading") {
      // console.log(`Loading new locale: ${detail.loadingLocale}`);
      this._spinner?.removeAttribute("hidden");
    } else if (event.detail.status === "ready") {
      // console.log(`Loaded new locale: ${detail.readyLocale}`);
      this._spinner?.setAttribute("hidden", "");
    } else if (event.detail.status === "error") {
      // console.error(
      //   `Error loading locale ${detail.errorLocale}: ` + detail.errorMessage
      // );
      this._spinner?.setAttribute("hidden", "");
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    window.removeEventListener("popstate", () => {
      setLocaleFromUrl();
    });
    window.removeEventListener(LOCALE_STATUS_EVENT, this.setSpinnerVisibility);
  }

  scrollToSection(event: CustomEvent) {
    switch (event.detail?.id) {
      case EnMenuOption.Home:
        window.scrollTo({ top: 0, behavior: "smooth" });
        // this._scrollUp?.classList.add("scroll--hidden"); --> makes to arrow disappear earlier
        break;
      case EnMenuOption.Skills:
        this._skills?.scrollIntoView({ behavior: "smooth" });
        break;
      case EnMenuOption.Work:
        this._work?.scrollIntoView({ behavior: "smooth" });
        break;
      case EnMenuOption.About:
        // this._about?.scrollIntoView({ behavior: "smooth" });
        // TODO
        break;
      case EnMenuOption.Contact:
        this._contact?.scrollIntoView({ behavior: "smooth" });
        break;
    }
  }

  /**
   * Handle scroll events to show/hide menu and scroll up button
   */
  handleScrollEvents() {
    let lastScrollY = window.scrollY;
    window.addEventListener("scroll", () => {
      const currentScroll = window.scrollY;
      if (lastScrollY < currentScroll) {
        this._menu?.classList.add("menu--hidden");
        this._scrollUp?.classList.remove("scroll--hidden");
      } else {
        this._menu?.classList.remove("menu--hidden");
      }
      if (window.scrollY === 0) this._scrollUp?.classList.add("scroll--hidden");
      lastScrollY = currentScroll;
    });
  }

  toggleInfoComponent(event: CustomEvent | null) {
    this._impressum?.classList.add("removed");
    this._dataPrivacy?.classList.add("removed");
    if (!event) {
      this._mainContainer?.classList.remove("removed");
      this._menu?.classList.remove("removed");
      return;
    }
    if (event.detail.id === 0) {
      // show terms info
      this._mainContainer?.classList.add("removed");
      this._menu?.classList.add("removed");
      this._impressum?.classList.remove("removed");
    } else if (event.detail.id === 1) {
      // show privacy info
      this._mainContainer?.classList.add("removed");
      this._menu?.classList.add("removed");
      this._dataPrivacy?.classList.remove("removed");
    }
  }

  render() {
    async () => {
      try {
        // Defer first render until our initial locale is ready, to avoid a flash of
        // the wrong locale.
        await setLocaleFromUrl();
      } catch (e) {
        // Either the URL locale code was invalid, or there was a problem loading
        // the locale module.
        console.error(`Error loading locale: ${(e as Error).message}`);
      }
    };

    let menu =
      this.configData.menu && this.configData.menu.showMenu
        ? html`<ph-menu
            logoCaption="${this.configData.menu.logoCaption}"
            options="${JSON.stringify(this.menuLinks)}"
            showLanguageSelector="${this.configData.menu.showLanguageSelector}"
            @onSelect="${(e: CustomEvent) => this.scrollToSection(e)}"
          ></ph-menu>`
        : nothing;

    let scrollUp = this.configData.showScrollUp
      ? html`<a id="scroll-up" class="scroll--hidden" href="#top"
          ><object
            data="${arrowUpLong.substring(4, arrowUpLong.length)}"
            type="image/svg+xml"
          >
            Arrow up SVG-Icon
          </object></a
        >`
      : nothing;

    let spinner = this.configData.showSpinner
      ? html`<mwc-circular-progress
          id="spinner"
          indeterminate
          hidden
          style="position: absolute; top: 50%; left: 50%"
        ></mwc-circular-progress>`
      : nothing;

    let images: string[] = [
      portraitOne.substring(4, portraitOne.length),
      portraitTwo.substring(4, portraitTwo.length),
      portraitOne.substring(4, portraitOne.length),
      portraitTwo.substring(4, portraitTwo.length),
    ];

    let showcase = this.configData.showcase
      ? html` <section id="showcase">
          <ph-showcase
            name="${this.configData.personalInfo.name}"
            heading="${msg(this.configData.showcase.heading, {
              desc: "TODO",
            })}"
            description="${msg(this.configData.showcase.description, {
              desc: "TODO",
            })}"
            .imgUrls="${images}"
          ></ph-showcase>
        </section>`
      : nothing;

    let skills = this.configData.skills
      ? html`<section id="skills" class="container-section">
          <h2>${msg("Skills", { desc: "TODO" })}</h2>
          <ph-select-info
            skills="${JSON.stringify(this.skills)}"
            skillAreas="${JSON.stringify(this.skillAreas)}"
          ></ph-select-info>
        </section>`
      : nothing;

    let work = this.configData.work
      ? html`<section id="work" class="container-section">
          <h2>${msg("Work", { desc: "TODO" })}</h2>
          <ul>
            ${this.work.map(
              (workEntry: WorkModel) =>
                html`<ph-card
                  class="work-entry"
                  imageName="${workEntry.imageName}"
                  label="${workEntry.label}"
                  description="${workEntry.description}"
                  sourceUrl="${workEntry.sourceUrl}"
                  liveUrl="${workEntry.liveUrl}"
                  tags="${JSON.stringify(workEntry.tags)}"
                ></ph-card>`
            )}
          </ul>
        </section>`
      : nothing;

    let about = this.configData.about
      ? html`<section id="about" class="container-section">
          <h2>${msg("About", { desc: "TODO" })}</h2>
        </section>`
      : nothing;

    let contact = this.configData.showContact
      ? html` <section id="contact" class="container-section">
          <div class="heading">
            <span class="heading-text">Work with me</span>
            <h2>${msg("Contact", { desc: "TODO" })}</h2>
          </div>
          <ph-contact
            name="${this.configData.personalInfo.name}"
            mail="${this.configData.personalInfo.mail}"
          ></ph-contact>
        </section>`
      : nothing;

    let footer = html`<ph-footer
      items="${JSON.stringify(this.footerLinks)}"
      @onSelect="${(e: CustomEvent) => this.toggleInfoComponent(e)}"
    ></ph-footer>`;

    let impressum = html`<ph-info-page
      id="impressum"
      class="removed"
      impressum="${true}"
      @onBack="${(e: CustomEvent) => this.toggleInfoComponent(null)}"
    ></ph-info-page>`;

    let dataPrivacy = html`<ph-info-page
      id="dataPrivacy"
      class="removed"
      @onBack="${(e: CustomEvent) => this.toggleInfoComponent(null)}"
    ></ph-info-page>`;

    return html`
      ${menu} ${scrollUp} ${spinner}
      <main id="main-container">
        ${showcase}
        <section id="scroller" class="container-section">
          <ph-scroller></ph-scroller>
        </section>
        ${contact}
      </main>
      ${impressum} ${dataPrivacy} ${footer}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "app-page": Page;
  }
}
