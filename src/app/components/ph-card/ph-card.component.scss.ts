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
  }

  /* utilities */
  .margin-right {
    margin-right: 0.75rem;
  }

  .flex-group {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 1rem;
  }

  .flex-group li {
    padding: 3px 5px;
    margin: 0.375rem;
    cursor: pointer;
    border: 1px solid var(--clr-secondary, black);
    border-radius: 5px;
  }

  .visually-hidden:not(:focus):not(:active) {
    // maybe remove
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  /* component styles */
  :host {
    font-family: var(--ff-main, sans-serif);
    color: var(--clr-secondary, black);
    background-color: var(--clr-primary, white);
    box-sizing: border-box;
    display: grid;
    place-content: center;
    line-height: 1.5;
  }

  /* card styles */
  .card-container {
    --content-padding: 1.5rem;
    --content-spacing: 1rem;

    display: grid;
    background-color: var(--clr-primary, white);
    border-radius: 14px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.22);

    overflow: hidden;
    max-width: 1000px; /* der style außerhalb der component */
    padding: var(--content-padding);
  }

  @media (min-width: 600px) {
    :host {
      padding: 0;
    }

    .card-container {
      --content-padding: 2rem;
      grid-template-columns: 3fr 2fr;
      grid-template-areas: "img content";
      padding: 0;
      border-radius: 28px;
    }

    .card-container > * {
      order: revert;
    }

    .card__img {
      grid-area: img;
      /* order: 10; */
      /* grid-column: 1; */
    }

    .card__content {
      grid-area: content;
      /* order: 1; */
      /* grid-column: 2; */
      display: grid;
      gap: var(--content-spacing);
      padding: var(--content-padding);
    }

    .order-end {
      order: 1;
    }

    .card__title {
      font-size: 2rem;
      font-family: var(--ff-bold, sans-serif);
    }
  }
`;
