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

  a {
    /* display: block; */
    color: var(--clr-secondary, black);
    text-decoration: none;
  }

  object {
    height: 25px;
    pointer-events: none;
  }

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

      object {
        height: 25px;
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

    object {
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
      resize: vertical;
      padding: 8px;
      border-radius: 7px;
      background-color: var(--clr-lighter, white);
    }

    #form-footer {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: center;
      justify-content: center;
      margin-top: 1rem;
      width: 100%;

      object {
        height: 1.125rem;
      }

      ph-button {
        margin-left: auto;
        margin-right: 0;
      }

      #loading {
        font-size: 0.85rem;
        display: none;
      }

      #result {
        font-size: 0.85rem;
        display: none;

        .bold {
          font-weight: bold;
        }
      }
    }
  }

  @media (min-width: 350px) {
    #email-section object {
      display: inline;
    }
  }

  @media (min-width: 580px) {
    form {
      input {
        padding-inline: 16px;
      }

      textarea {
        padding-inline: 16px;
      }
    }
  }
`;
