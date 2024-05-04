import { WorkModel } from "./../models/work.model";
import { SkillModel } from "./../models/skill.model";
import { LitElement, html, nothing } from "lit";
import { customElement } from "lit/decorators.js";
import { style } from "./page.component.css.ts";
import { data } from "../../assets/data.ts";
import { msg, localized, LOCALE_STATUS_EVENT } from "@lit/localize";
import { setLocaleFromUrl } from "../localization.ts";
import { query } from "lit/decorators/query.js";
import { EnSkillArea } from "@app/models/skill-area.enum.ts";
import { ConfigModel } from "./../models/config.model.ts";

@customElement("app-page")
@localized()
export class Page extends LitElement {
  static get styles() {
    return [style];
  }

  @query("#spinner", true) _spinner: any;

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
      type: Array<{ name: string; link: string }>,
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
      { id: "", name: msg("Home") },
      { id: "", name: msg("Skills"), link: "todo" },
      { id: "", name: msg("Work"), link: "todo" },
      { id: "", name: msg("About"), link: "todo" },
      { id: "", name: msg("Contact"), link: "todo" },
    ];
    this.skillAreas = [
      { id: 0, caption: "Frontend" },
      { id: 1, caption: "Backend" },
    ];
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
          ></ph-menu>`
        : nothing;

    let scrollUp = this.configData.showScrollUp
      ? html`<a id="scroll-up" href="#top"
          ><i class="fa-solid fa-arrow-up"></i
        ></a>`
      : nothing;

    let spinner = this.configData.showSpinner
      ? html`<mwc-circular-progress
          id="spinner"
          indeterminate
          hidden
          style="position: absolute; top: 50%; left: 50%"
        ></mwc-circular-progress>`
      : nothing;

    let showcase = this.configData.showcase
      ? html`<ph-showcase
          heading="${msg(JSON.stringify(this.configData.showcase.heading), {
            desc: "TODO",
          })}"
          description="${msg(
            JSON.stringify(this.configData.showcase.description),
            { desc: "TODO" }
          )}"
        ></ph-showcase>`
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
          <h2>${msg("Contact", { desc: "TODO" })}</h2>
          <div id="mail" class="social">
            <a href="index.html">
              <i class="fa-solid fa-envelope"></i>
            </a>
            <a href="mailto:maxmustermann@mail.de">maxmustermann@mail.de</a>
            <hr />
          </div>
          <div id="linkedIn" class="social">
            <a href="index.html">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="index.html">www.linkedin.com/in/max-mustermann</a>
            <hr />
          </div>
          <form action="URL" method="post" enctype="multipart/form-data">
            <input
              type="text"
              name="name"
              id="name"
              size="10"
              maxlength="100"
              value=""
              required
              placeholder="${msg("Name", { desc: "TODO" })}"
            /><label for="name">Textfeld</label>
            <input
              type="email"
              name="email"
              id="email"
              size="10"
              maxlength="100"
              value=""
              required
              placeholder="${msg("EMail", { desc: "TODO" })}"
            /><label for="email">Textfeld</label>
            <!--cols und rows besser in CSS setzen. Textarea hat kein value-Attribut-->
            <textarea
              name="message"
              id="message"
              cols="20"
              rows="5"
              wrap="virtual"
              placeholder="${msg("Or type your message here...", {
                desc: "TODO",
              })}"
            ></textarea>
            <button type="submit">
              ${msg("Send", { desc: "TODO" })}
              <i class="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </section>`
      : nothing;

    return html`
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      />
      ${menu}
      <main id="main-container">
        <a id="top"></a>
        ${scrollUp} ${spinner} ${showcase} ${skills} ${work} ${about} ${contact}
      </main>
      <footer id="footer">
        <p>Copyright &copy; 2023. All rights are reserved</p>
      </footer>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "app-page": Page;
  }
}
