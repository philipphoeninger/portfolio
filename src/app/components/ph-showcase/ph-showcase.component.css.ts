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
    align-items: left;
    justify-content: center;
    text-align: left;
  }

  #name {
    margin: 0 auto 0 0;
    color: var(--clr-accent, black);
    font-style: italic;
  }

  h1 {
    font-size: 2rem;
    line-height: 1.1;
    margin-top: 0.25rem;
    text-indent: 2rem;
  }

  #text {
    margin-top: 1rem;
    color: var(--clr-secondary, black);
    opacity: 0.8;
    font-family: var(--ff-italic, sans-serif);
    font-style: italic;
    text-indent: 2rem;
    line-height: 1.7;
  }

  #text-container {
    margin-top: 0.5rem;
  }

  ph-button {
    margin: 0.5rem auto 0 0;
    width: fit-content;
  }

  #portrait {
    margin-top: 2rem;
    width: 100%;

    img {
      border-radius: 0.5rem;
      filter: grayscale(60%);
      width: 100%;
      height: 300px;
      object-fit: cover;
      object-position: center top;
    }
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
      justify-content: space-between;
      padding-inline: 1em;

      /* overflow: hidden; */

      li {
        /* cursor: pointer; */

        object {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 25px;
          pointer-events: none;
          filter: grayscale(40%);
        }

        #sql-icon {
          margin-right: -10px;
          height: 27px;
        }
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

  @media (min-width: 350px) {
    #social-media ul li {
      object {
        height: 30px;
      }

      #sql-icon {
        height: 32px;
      }
    }
  }

  @media (min-width: 580px) {
    #text-container {
      margin-top: 0;
    }

    ph-button {
      margin-top: 1rem;
    }

    #portrait {
      margin-top: 3rem;
    }

    #social-media {
      ul {
        justify-content: space-around;
        margin-bottom: 1rem;

        li {
          margin: 0 0.5rem 0 0;

          object {
            height: 35px;
          }

          #sql-icon {
            height: 37px;
          }
        }
      }
    }
  }

  @media (min-width: 769px) {
    :host {
      align-content: center;
      align-items: center;
      justify-content: center;

      display: grid;
      grid-template-columns: 2fr 3fr;
      column-gap: 4em;
      grid-template-areas:
        ". ."
        "portrait text"
        "portrait icons"
        ". .";
      grid-template-rows: 1fr 2fr 40px 1fr;
    }

    #text-container {
      grid-area: text;
      display: flex;
      flex-direction: column;
      margin-bottom: 3rem;
    }

    #portrait {
      grid-area: portrait;
      margin-top: 0;

      img {
        height: 20em;

        width: 100%;
        height: auto;
        min-height: 350px;
        max-height: 400px;
        object-fit: cover;
        object-position: center top;
      }
    }

    #social-media {
      margin-top: 0;
      grid-area: icons;

      ul {
        justify-content: left;
        padding-left: 0;
        margin-bottom: 0;

        li {
          margin-right: 2.25rem;
        }
      }
    }
  }

  @media (min-width: 890px) {
    #social-media ul li {
      margin-right: 3em;
    }
  }

  @media (min-width: 1250px) {
    #social-media ul li {
      margin-right: 3.25em;
    }

    #portrait {
      img {
        min-height: 350px;
      }
    }
  }
`;
