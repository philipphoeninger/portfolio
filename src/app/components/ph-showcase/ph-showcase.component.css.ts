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

  #showcase {
    display: flex;
    flex-direction: column;
    height: 95vh;
    max-width: 1400px;
    align-items: left;
    justify-content: center;
    text-align: left;

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

    #button-group {
      display: flex;
      margin: 1rem auto 0 0;

      #action-button {
        padding: 0.5rem 0.75rem;
        border: none;
        font-size: 1rem;
        color: #dfe1e0;
        font-family: var(--ff-main, sans-serif);
        border-radius: 0.35rem;
        background-color: var(--clr-accent, blue);
        cursor: pointer;
        text-decoration: none;
        overflow: hidden;
        display: inline;
        z-index: 10;
      }

      #arrow {
        border: 1px solid rgba(47, 49, 48, 0.25);
        margin-left: -8px;
        border-radius: 0 0.35rem 0.35rem 0;
        padding-left: 0.75rem;
        padding-right: 0.5rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      #arrow > i {
        font-size: 12px;
        /* color: var(--clr-accent, blue); */
      }
    }

    #portrait {
      margin-top: 3rem;
      width: 100%;

      img {
        border-radius: 0.5rem;
        filter: grayscale(50%);
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
  }

  @media (min-width: 580px) {
    #showcase {
      #button-group {
        margin: 1rem auto 0;

        #social-media {
          ul {
            li {
              margin: 0.5rem;
            }
          }
        }
      }
    }
  }

  @media (min-width: 769px) {
    #showcase {
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
      grid-template-rows: 1fr 2fr 40px 2fr;

      #text-container {
        grid-area: text;
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
      }

      #button-group {
        margin: 1rem auto 0 0;
      }

      #portrait {
        grid-area: portrait;
        margin-top: 0;

        img {
          height: 20em;

          width: 100%;
          height: auto;
          min-height: 356px;
          max-height: 400px;
          object-fit: cover;
          object-position: center top;
        }
      }

      #social-media {
        margin-top: 0;
        margin-bottom: 1rem;
        grid-area: icons;

        ul {
          justify-content: left;
          padding-left: 0;
          li {
            margin-right: 3rem;
          }
        }
      }
    }
  }

  @media (min-width: 1250px) {
    #showcase {
      #portrait {
        img {
          min-height: 400px;
        }
      }
    }
  }
`;
