import { css } from "lit-element";

export const style = css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
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

  ul {
    list-style: none;
  }

  a {
    color: var(--clr-primary, white);
    text-decoration: none;
  }

  object {
    height: 25px;
    /* fill: var(--clr-secondary, black); */
    pointer-events: none;
  }

  svg {
    cursor: pointer;
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
  }

  #scroll-up {
    position: fixed;
    bottom: 3rem;
    right: 3rem;
    transition: transform 0.2s;
    z-index: 999;
  }

  .scroll--hidden {
    transform: translateY(calc(3rem + 32px));
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

  .removed {
    display: none !important;
  }

  #spinner {
    position: absolute;
    top: 50%;
    left: 50%;
  }

  #skills {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;

    ph-select-info {
      margin-top: 1rem;
      max-width: 800px;
      width: 100%;
    }
  }

  #skills-text {
    margin-top: 1rem;
    opacity: 0.6;
    font-weight: normal;

    a {
      color: var(--clr-secondary, black);
      text-decoration: underline;
      cursor: pointer;
    }
  }

  #about {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* padding-top: 3rem; */

    ph-about {
      margin-top: 1.875rem;
      max-width: 800px;
    }
  }

  #contact {
    margin-block: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    ph-contact {
      margin-top: 1rem;
      max-width: 800px;
      width: 100%;
    }
  }

  #scroller {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 1rem;

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

  @media (min-width: 769px) {
    #scroller {
      margin-top: 0;
    }

    #skills {
      margin-top: 5rem;
    }

    #contact {
      margin-top: 5rem;
    }

    .container-section {
      margin-top: 7rem;
    }

    #showcase {
      margin-top: 0;

      ph-showcase {
        max-height: calc(100svh - var(--menu-height) - var(--scroller-height));
      }
    }

    #skills-text {
      margin-top: 1.5rem;
    }
  }
`;
