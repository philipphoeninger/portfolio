import { css } from "lit-element";

export const style = css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  ul {
    list-style: none;
  }

  #container {
    border-bottom: 1px solid black;
    position: relative;
  }

  #container select {
    font-size: 1.25rem;
    padding: 0.5em 3em 0.5em 1em;
    background-color: var(--clr-primary, white);
    color: var(--clr-secondary, black);
    border: none;
    width: 100%;
  }

  #container select:focus {
    border: none;
  }

  #icon {
    height: 100%;
    width: 4em;
    position: relative;
  }

  /* #icon span {
    display: inline-block;
    position: absolute;
    width: 4em;
    height: 100%;
  } */

  /* .custom-arrow {
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    background-color: var(--clr-primary, white);
    height: 100%;
    width: 4em;
    pointer-events: none;
  } */

  /* .custom-arrow::before,
  .custom-arrow::after {
    --size: 0.5em;

    content: "";
    position: absolute;
    width: 0;
    height: 0;

    left: 50%;
    transform: translate(-50%, -50%);
  } */

  /* .custom-arrow::before {
    border-left: var(--size) solid transparent;
    border-right: var(--size) solid transparent;
    border-bottom: var(--size) solid var(--clr-secondary, black);

    top: 35%;
  }

  .custom-arrow::after {
    border-left: var(--size) solid transparent;
    border-right: var(--size) solid transparent;
    border-top: var(--size) solid var(--clr-secondary, black);

    top: 65%;
  } */
`;
