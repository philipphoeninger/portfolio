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
    background: red;
    height: 100%;
    width: 4em;
    position: relative;
  }
`;
