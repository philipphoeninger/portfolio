import { localized } from "@lit/localize";
import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { style } from "./ph-info-page.component.css";

@customElement("ph-info-page")
@localized()
export class PhInfoPage extends LitElement {
  static get styles() {
    return [style];
  }

  @property({ type: Boolean }) impressum = false;

  render() {
    return this.impressum
      ? html` <ph-button
            caption="Back"
            icon="fa-solid fa-arrow-left"
            @click=${() =>
              this.dispatchEvent(
                new CustomEvent("onBack", { bubbles: true, composed: true })
              )}
          ></ph-button>
          <article>
            <h1>Impressum</h1>
            <p>
              Max Mustermann<br />
              Musterstra&szlig;e 111<br />
              Geb&auml;ude 44<br />
              90210 Musterstadt
            </p>
            <h2>Kontakt</h2>
            <p>
              Telefon: +49 (0) 123 44 55 66<br />
              Telefax: +49 (0) 123 44 55 99<br />
              E-Mail: mustermann@musterfirma.de
            </p>
            <h2>Redaktionell verantwortlich</h2>
            <p>
              Beate Beispielhaft<br />
              Musterstra&szlig;e 110<br />
              90210 Musterstadt
            </p>
            <p>
              Quelle:
              <a href="https://www.e-recht24.de/impressum-generator.html"
                >https://www.e-recht24.de/impressum-generator.html</a
              >
            </p>
          </article>`
      : html`<ph-button
            caption="Back"
            icon="fa-solid fa-arrow-left"
            @click=${() =>
              this.dispatchEvent(
                new CustomEvent("onBack", { bubbles: true, composed: true })
              )}
          ></ph-button>
          <article>
            <h1>Datenschutzerklärung</h1>
            <p>
              I'm (as the operator of the website at www.maxmustermann.de (also
              "website")) the responsible party in terms of the applicable data
              protection law, in particular the General Data Protection
              Regulation ("DSGVO"), for the personal data of the user ("you") of
              this website. In the following, we inform you clearly within the
              scope of our information obligations (Art. 13 et seq. DSGVO) about
              what data is processed when you visit our website and on what
              legal basis this is done. You will also receive information about
              how we protect your data from a technical and organizational point
              of view and what rights you have vis-à-vis us and the competent
              supervisory authority.
            </p>
            <h2>Verantwortlicher / Responsible party</h2>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den
              Webseitenbetreiber. Dessen Kontaktdaten können Sie dem Impressum
              dieser Website entnehmen.
            </p>
            <h2>Processing of your personal data</h2>
            <p>
              Informational use of our website. When you call up our website
              merely to visit it, so-called log files are processed by being
              automatically recorded by our system. The following log files are
              processed automatically:
            </p>
            <ul>
              <li>IP address of the requesting computer</li>
              <li>Type of Internet browser used</li>
              <li>Operating System and its version</li>
              <li>Date and time of the visit</li>
              <li>Time zone difference from Greenwich Mean Time (GMT)</li>
              <li>Access status / http status code</li>
              <li>Referrer</li>
              <li>
                Websites that are accessed by the visitor's system via our
                website
              </li>
            </ul>
            <p>
              The log files contain your IP address, but it is shortened before
              it is stored. Therefore, an assignment to you is not possible and
              your data will not be stored together with other personal data.For
              the provision of our website, the processing of the above data is
              necessary. The legal basis for processing the data for
              anonymization purposes is Art. 6 (1) lit. f DSGVO.
            </p>
            <h2>Use of offers</h2>
            <ul>
              <li>
                <div>
                  You have the option of contacting us by e-mail or telephone.
                  Your personal data transmitted in this way will be stored by
                  us. The data will not be passed on to third parties. The data
                  will only be processed in order to handle your contact. The
                  legal basis for the processing of your personal data is Art. 6
                  (1) lit. f DSGVO. The data will be stored until they are no
                  longer required to achieve the purpose of the conversation
                  with you and the matter of your contact has been
                  comprehensively clarified.
                  <br />
                  If your contact aims to conclude a contract with us, the
                  additional legal basis for processing your personal data is
                  Art. 6 (1) lit.
                </div>
              </li>
              <li>
                <div>
                  This data will be stored for as long as it is necessary for
                  the performance of the contract. Beyond that, we only store
                  your data in order to comply with contractual or legal
                  obligations (e.g. tax obligations).
                </div>
              </li>
            </ul>
          </article>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-info-page": PhInfoPage;
  }
}
