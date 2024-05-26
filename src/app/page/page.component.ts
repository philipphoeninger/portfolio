import { WorkModel } from "@models/work.model";
// import { SkillModel } from "@models/skill.model";
import { LitElement, html, nothing } from "lit";
import { customElement } from "lit/decorators.js";
import { style } from "./page.component.css.ts";
import { data as config } from "@assets/data.ts";
import { localized, LOCALE_STATUS_EVENT, msg } from "@lit/localize";
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
  @query("#about", true) _about: any;
  @query("#contact", true) _contact: any;
  @query("#main-container", true) _mainContainer: any;
  @query("#impressum", true) _impressum: any;
  @query("#dataPrivacy", true) _dataPrivacy: any;

  constructor() {
    super();
    /** extract and process config data */

    this.handleScrollEvents();
  }

  connectedCallback() {
    super.connectedCallback();
    setLocaleFromUrl();
    // Update the locale to match the URL when the user moves backwards or forwards
    // through history.
    // window.addEventListener("popstate", () => {
    //   setLocaleFromUrl();
    // });

    // window.addEventListener(
    //   LOCALE_STATUS_EVENT,
    //   this.setSpinnerVisibility.bind(this)
    // );
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
    // window.removeEventListener("popstate", () => {
    //   setLocaleFromUrl();
    // });
    // window.removeEventListener(LOCALE_STATUS_EVENT, this.setSpinnerVisibility);
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
        this._about?.scrollIntoView({ behavior: "smooth" });
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
    window.scrollTo({ top: 0, behavior: "smooth" });
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

    let menuLinks = [
      { id: EnMenuOption.Home, name: msg("Home") },
      {
        id: EnMenuOption.Skills,
        name: msg("Skills"),
      },
      {
        id: EnMenuOption.About,
        name: msg("About"),
      },
      {
        id: EnMenuOption.Contact,
        name: msg("Contact me"),
        highlighted: true,
      },
    ];
    let menu =
      config.menu && config.menu.showMenu
        ? html`<ph-menu
            logoCaption="${config.menu.logoCaption}"
            .options="${menuLinks}"
            .showLanguageSelector="${config.menu.showLanguageSelector}"
            @onSelect="${(e: CustomEvent) => this.scrollToSection(e)}"
          ></ph-menu>`
        : nothing;

    let scrollUp = config.showScrollUp
      ? html`<a id="scroll-up" class="scroll--hidden" href="#top"
          ><object data="${arrowUpLong}" type="image/svg+xml">
            Arrow up SVG-Icon
          </object></a
        >`
      : nothing;

    let spinner = config.showSpinner
      ? html`<mwc-circular-progress
          id="spinner"
          indeterminate
          hidden
          style="position: absolute; top: 50%; left: 50%"
        ></mwc-circular-progress>`
      : nothing;

    let images: string[] = [portraitOne, portraitTwo, portraitOne, portraitTwo];

    let showcase = config.showcase
      ? html` <section id="showcase" class="container-section">
          <ph-showcase
            name="${config.personalInfo.name}"
            heading="${msg("Full-Stack Web Developer")}"
            btnCaption="${msg("Contact me")}"
            description="${msg(
              "Interested in all technical aspects of developing web software applications in and for companies. Currently employed at Ceiton technologies GmbH, Leipzig."
            )}"
            .imgUrls="${images}"
            @onBtnClick="${(_: any) =>
              this.scrollToSection(
                new CustomEvent("scrollToContact", {
                  detail: { id: EnMenuOption.Contact },
                })
              )}"
          ></ph-showcase>
        </section>`
      : nothing;

    let skills = config.skills
      ? html`<section id="skills" class="container-section">
          <div class="heading">
            <span class="heading-text">${msg("What I can do")}</span>
            <h2>${msg("Skills")}</h2>
          </div>
          <ph-select-info .skills="${config.skills}"></ph-select-info>
        </section>`
      : nothing;

    let work = config.work
      ? html`<section id="work" class="container-section">
          <h2>${msg("Work")}</h2>
          <ul>
            ${config.work.map(
              (workEntry: WorkModel) =>
                html`<ph-card
                  class="work-entry"
                  imageName="${workEntry.imageName}"
                  label="${workEntry.label}"
                  description="${workEntry.description}"
                  sourceUrl="${workEntry.sourceUrl}"
                  liveUrl="${workEntry.liveUrl}"
                  .tags="${workEntry.tags}"
                ></ph-card>`
            )}
          </ul>
        </section>`
      : nothing;

    let about = config.about.visible
      ? html`<section id="about" class="container-section">
          <div class="heading">
            <span class="heading-text">${msg("My career")}</span>
            <h2>${msg("About")}</h2>
          </div>
          <ph-about .entries="${config.about.entries}"></ph-about>
        </section>`
      : nothing;

    let contact = config.contact.visible
      ? html` <section id="contact" class="container-section">
          <div class="heading">
            <span class="heading-text">${msg("Work with me!")}</span>
            <h2>${msg("Contact")}</h2>
          </div>
          <ph-contact name="${config.personalInfo.name}"></ph-contact>
          <!-- mail="${config.personalInfo.mail}" -->
        </section>`
      : nothing;

    let footerLinks = [
      { id: 0, caption: msg("Legal Notice") },
      {
        id: 1,
        caption: msg("Privacy Policy"),
      },
    ];
    let footer = html`<ph-footer
      .items="${footerLinks}"
      @onSelect="${(e: CustomEvent) => this.toggleInfoComponent(e)}"
    ></ph-footer>`;

    let impressum = html`<ph-info-page
      id="impressum"
      class="removed"
      .impressum="${true}"
      @onBack="${(e: CustomEvent) => this.toggleInfoComponent(null)}"
      @onPrivacy="${(e: CustomEvent) => this.toggleInfoComponent(e)}"
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
        ${skills} ${about} ${contact}
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
