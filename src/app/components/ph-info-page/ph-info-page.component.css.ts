import { css } from "lit-element";

export const style = css`
  * {
    box-sizing: border-box;
  }

  :host {
    margin: var(--menu-height) !important;
    margin-top: var(--menu-height) !important;
    padding: var(--min-padding) !important;
    padding-bottom: 0 !important;
    min-height: calc(80svh - var(--menu-height));
    width: 100%;
    max-width: 800px;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    margin-top: 0;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }

  ph-button {
    margin-bottom: 3rem;
  }

  @media (min-width: 580px) {
    :host {
      padding: calc(var(--min-padding) * 2) !important;
    }
  }
`;
