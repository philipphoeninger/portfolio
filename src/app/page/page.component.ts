import { WorkModel } from "./../models/work.model";
import { SkillModel } from "./../models/skill.model";
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { style } from "./page.component.scss.ts";
import { data } from "../../assets/data.ts";
import { msg, localized, LOCALE_STATUS_EVENT } from "@lit/localize";
import { setLocaleFromUrl } from "../localization.ts";
import { query } from "lit/decorators/query.js";

@localized()
@customElement("app-page")
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
  };

  constructor() {
    super();
    this.skills = data.skills || {};
    this.work = data.work || {};
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
    return html`
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      />
      <ph-select-locale></ph-select-locale>
      <header>
        <span>Max.dev</span><ph-menu options="${JSON.stringify()}"></ph-menu>
      </header>
      <main>
        <a id="top"></a>
        <mwc-circular-progress
          id="spinner"
          indeterminate
          hidden
          style="position: absolute; top: 50%; left: 50%"
        ></mwc-circular-progress>
        <section id="showcase">
          <picture>
            <!-- <source
      media="(min-width: 650px)"
      srcset="./src/assets/img/portrait.jpg"
    />
    <source
      media="(min-width: 465px)"
      srcset="./src/assets/img/portrait.jpg"
    /> -->
            <img
              src="./src/assets/img/portrait.jpg"
              alt="Portrait Image"
              height="300"
              width="433"
            />
          </picture>
          <h1>${msg("Full-Stack Web Developer")}</h1>
          <p>
            ${msg(
              "Hi, I'm Max, an aspiring Full-Stack Web Developer based in Munich, Germany."
            )}
          </p>
          <div>
            <ul>
              <li>
                <a href="index.html">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="index.html">
                  <i class="fa-solid fa-envelope"></i>
                </a>
              </li>
              <li>
                <a href="index.html">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="index.html">
                  <i class="fa-brands fa-github"></i>
                </a>
              </li>
              <li>
                <a href="index.html">
                  <i class="fa-solid fa-download"></i>
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section id="skills">
          <h2>${msg("Skills")}</h2>
          <ph-select-info
            skills="${JSON.stringify(this.skills)}"
          ></ph-select-info>
        </section>

        <section id="work">
          <h2>${msg("Work")}</h2>
          <ul>
            ${this.work.map(
              (workEntry: WorkModel) =>
                html`<ph-card
                  imageName="${workEntry.imageName}"
                  label="${workEntry.label}"
                  description="${workEntry.description}"
                  sourceUrl="${workEntry.sourceUrl}"
                  liveUrl="${workEntry.liveUrl}"
                  tags="${JSON.stringify(workEntry.tags)}"
                ></ph-card>`
            )}
          </ul>
        </section>

        <section id="about">
          <h2>${msg("About")}</h2>
        </section>

        <section id="contact">
          <h2>${msg("Contact")}</h2>
          <div id="mail">
            <a href="index.html">
              <i class="fa-solid fa-envelope"></i>
            </a>
            <a href="mailto:maxmustermann@mail.de">maxmustermann@mail.de</a>
          </div>
          <hr />
          <div id="linkedIn">
            <a href="index.html">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="index.html">www.linkedin.com/in/max-mustermann</a>
          </div>
          <hr />
          <form action="URL" method="post" enctype="multipart/form-data">
            <input
              type="text"
              name="name"
              id="name"
              size="100"
              maxlength="100"
              value=""
              required
              placeholder="${msg("Name")}"
            />Textfeld
            <input
              type="email"
              name="email"
              id="email"
              size="100"
              maxlength="100"
              value=""
              required
              placeholder="${msg("EMail")}"
            />Textfeld
            <!--cols und rows besser in CSS setzen. Textarea hat kein value-Attribut-->
            <textarea
              name="message"
              id="message"
              cols="20"
              rows="5"
              wrap="virtual"
              placeholder="${msg("Or type your message here...")}"
            ></textarea>
            <button type="submit">
              ${msg("Send")}
              <i class="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </section>

        <a href="#top">UP</a>
      </main>
      <footer>
        <p>Copyright c 2023. All rights reserved</p>
      </footer>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "app-page": Page;
  }
}
