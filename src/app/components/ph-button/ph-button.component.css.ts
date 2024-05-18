import { css } from "lit-element";

export const style = css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :host {
    display: flex;
  }

  #action-button {
    padding: 0.5rem 0.75rem;
    border: none;
    font-size: 1rem;
    color: var(--clr-lighter, #dfe1e0);
    font-family: var(--ff-main, sans-serif);
    border-radius: 0.35rem;
    background-color: var(--clr-accent, blue);
    cursor: pointer;
    text-decoration: none;
    overflow: hidden;
    display: inline;
    z-index: 10;
  }

  #icon-container {
    border: 1px solid rgba(47, 49, 48, 0.25);
    margin-left: -6px;
    border-radius: 0 0.35rem 0.35rem 0;
    padding-left: 0.75rem;
    padding-right: 0.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #icon-container > object {
    height: 12px;
    pointer-events: none;
    /* color: var(--clr-accent, blue); */
  }
`;
