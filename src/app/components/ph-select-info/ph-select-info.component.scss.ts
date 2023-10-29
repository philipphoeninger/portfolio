import { css } from "lit-element";

export const style = css`
  /* resets */
  * {
    padding: 0;
    margin: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  h1,
  h2,
  h3 {
    line-height: 1;
  }

  ul {
    list-style: none;
    width: 100%;
    padding-top: 1rem;
    background-color: white;
  }

  :host {
  }

  .select-info-container {
    margin-top: 1rem;
    padding: 0 1rem 1rem 0;
    background-color: #f9f9f9;
    display: grid;
    grid-template-columns: 1fr 2fr;
    text-align: left;
  }

  .select-info-content {
    font-family: var(--ff-regular, sans-serif);
    padding: 1rem;
  }

  .select-info-header li {
    padding-block: 0.25rem;
    padding-inline: 0.75rem;
    display: block;
    cursor: pointer;
    background-color: white;
  }

  .select-info-header li:hover,
  .select-info-header li:focus {
    background-color: #f9f9f9;
  }
`;
