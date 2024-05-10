import { css } from "lit-element";

export const style = css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :host {
    width: 100%;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    font-size: 0.825rem;
    color: var(--clr-primary, white);
  }

  ul {
    list-style-type: none;
    overflow: hidden;

    li {
      margin-block: 0.5rem;
    }
  }

  #footer {
    padding: 2rem;
    background-color: var(--clr-secondary, black);
    color: var(--clr-lighter, white);
    width: 100%;

    p {
      display: block;
      /* width: 100%; */
      text-align: center;
      font-weight: bold;
      font-size: 1.25rem;
      margin-bottom: 1rem;
      line-height: 1.5;
    }

    #items {
      text-align: center;
    }
  }

  @media (min-width: 580px) {
    #footer {
      padding: 3rem;
    }

    #items ul {
      display: flex;
      justify-content: center;

      li {
        margin-inline: 2rem;
      }
    }
  }
`;
