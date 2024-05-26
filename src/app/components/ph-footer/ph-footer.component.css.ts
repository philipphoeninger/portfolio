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
    display: block;
    font-size: 0.9125rem;
    color: var(--clr-primary, white);
  }

  ul {
    list-style-type: none;
    overflow: hidden;

    li {
      margin-block: 0.875rem;
      cursor: pointer;
    }

    li:last-child {
      margin-bottom: 0;
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
      margin-bottom: 0.75rem;
      line-height: 1.5;
    }

    #items {
      text-align: center;
    }
  }

  @media (min-width: 580px) {
    a {
      font-size: 1rem;
    }

    #footer {
      padding: 3rem;
    }

    #items ul {
      display: flex;
      justify-content: center;

      li {
        margin-inline: 3rem;
      }
    }
  }

  @media (min-width: 1250px) {
    #footer {
      padding: 3.5rem;
    }
  }
`;
