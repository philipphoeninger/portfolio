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

  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #sub-heading {
    margin: 0 auto 0 0;
    color: var(--clr-accent, black);
    font-style: italic;
  }

  h2 {
    margin: 0 auto 0 0;
    text-indent: 2rem;
  }

  a {
    /* display: block; */
    color: var(--clr-secondary, black);
    text-decoration: none;
  }

  i {
    font-size: 25px;
    cursor: pointer;
  }

  hr {
    margin-top: 1rem;
    width: 100%;
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid var(--clr-secondary, #ccc);
    padding: 0;
  }

  /* .social {
    margin: 2rem 0;
  } */

  #social-media {
    margin-top: 1rem;
    width: 100%;
    /* overflow: hidden; */

    a {
      display: block;
    }

    ul {
      /* width: 100%; */
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      /* padding-inline: 1em; */

      /* overflow: hidden; */

      li {
        cursor: pointer;
      }

      li:hover {
        background-color: var(--clr-light, #d9d9d9);
      }

      i {
        font-size: 25px;
        color: var(--clr-secondary, black);
      }
    }
  }

  #email-section {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    border: 1px solid var(--clr-secondary, black);
    width: 100%;
    padding: 0.5rem 1rem;
    border-radius: 7px;
    overflow: hidden;
    max-width: 800px;
    background-color: var(--clr-lighter, white);

    i {
      display: none;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    width: 100%;
    max-width: 800px;

    label {
      border: 0;
      clip: rect(0, 0, 0, 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }

    input {
      /* display: block; */
      border: 1px solid var(--clr-secondary, black);
      font-family: var(--ff-main, sans-serif);
      font-size: 1rem;
      width: 100%;
      padding: 8px;
      margin-bottom: 0.5rem;
      border-radius: 7px;
      background-color: var(--clr-lighter, white);
    }

    textarea {
      border: 1px solid var(--clr-secondary, black);
      font-family: var(--ff-main, sans-serif);
      font-size: 1rem;
      width: 100%;
      padding: 8px;
      margin-bottom: 0.5rem;
      border-radius: 7px;
      background-color: var(--clr-lighter, white);
    }

    ph-button {
      margin: 0 0 0 auto;
    }
    /* color: #32b73f; */
  }

  @media (min-width: 350px) {
    #email-section i {
      display: inline;
    }
  }
`;
