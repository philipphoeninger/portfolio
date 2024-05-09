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
    /* color: var(--clr-secondary, white); */
    background-color: var(--clr-primary, white);
    /* font-family: var(--ff-main, sans-serif); */

    display: flex;
    flex-direction: column;
    align-items: center;

    /* justify-content: space-between; */
    /* background-color: var(--ph-color-bg); */
  }

  ph-menu.menu--hidden {
    transform: translateY(calc(var(--menu-height) * -1));
    /* display: none; */
  }

  #main-container {
    padding: var(--menu-height) var(--min-padding) 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1400px;

    i {
      font-size: 25px;
      color: var(--clr-secondary, black);
    }

    #scroll-up {
      position: fixed;
      bottom: 3rem;
      right: 3rem;
      transition: transform 0.2s;
      z-index: 999;
    }

    .scroll--hidden {
      transform: translateY(calc(3rem + 28px));
    }
  }

  .heading {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    margin: 0 auto 0 0;

    .heading-text {
      margin: 0 auto 0 0;
      color: var(--clr-accent, black);
      font-style: italic;
    }

    h2 {
      width: fit-content;
      text-indent: 2rem;
    }
  }

  .container-section {
    margin-top: 3rem;
    width: 100%;
  }

  #work {
    .work-entry {
      margin-bottom: 3rem;
    }
  }

  [hidden] {
    visibility: hidden;
  }
  #spinner {
    position: absolute;
    top: 50%;
    left: 50%;
  }

  #contact {
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    ph-contact {
      margin-top: 1rem;
      padding-inline: 1em;
      max-width: 1000px;
      width: 100%;
    }
  }

  #scroller {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 0;

    ph-scroller {
      max-width: 600px;
      width: 100%;
    }
  }

  #showcase {
    margin-top: 1rem;

    ph-showcase {
      height: 100%;
      min-height: calc(100svh - var(--menu-height) - var(--scroller-height));
    }
  }

  #footer {
    text-align: center;
    padding: 2rem;
    font-weight: bold;
    font-size: 1.25rem;
    background-color: var(--clr-secondary, black);
    color: var(--clr-lighter, white);
    width: 100%;
  }

  @media (min-width: 580px) {
    #footer {
      padding: 4rem;
    }
  }

  @media (min-width: 769px) {
    #showcase {
      margin-top: 0;

      ph-showcase {
        max-height: calc(100svh - var(--menu-height) - var(--scroller-height));
      }
    }
  }
`;
