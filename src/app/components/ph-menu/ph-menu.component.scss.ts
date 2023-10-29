import { css } from "lit-element";

export const style = css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :host {
    --padding-inline: 25px;
    color: var(--clr-secondary, black);
    background-color: var(--clr-primary, white);
    font-family: var(--ff-main, sans-serif);
    font-weight: bold;
    font-size: 24px;
    box-sizing: border-box;
    display: block;
    height: 8vh;
    position: fixed;
    width: 100%;
    z-index: 100;
  }

  :host > * {
    padding: 5px var(--padding-inline);
  }

  ul {
    list-style-type: none;
    overflow: hidden;
    width: 100%;
  }

  .menu__items {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    clear: both;
    height: 0;
    padding: 0;
    box-sizing: border-box;
    transition: height 0.2s ease-out;
    background-color: var(--clr-primary, white);
    width: 100%;
  }

  a {
    text-decoration: none;
    /* color: var(--clr-secondary, white); */
  }

  .menu__items li {
    padding: 15px 5px;
    cursor: pointer;
  }

  .menu__items li:hover {
    background-color: var(--clr-light, #d9d9d9);
  }

  .menu__items a {
    display: block;
    text-align: center;
  }

  .logo {
    float: left;
    display: flex;
    font-size: 1.5rem;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  .menu-icon {
    padding: var(--padding-inline);
    position: relative;
    float: right;
    cursor: pointer;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav-icon {
    background: var(--clr-secondary, black);
    display: block;
    height: 3px;
    width: 20px;
    border-radius: 15px;
    position: relative;
    transition: background 0.2s ease-out;
  }

  .nav-icon:before {
    background: var(--clr-secondary, black);
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    border-radius: 15px;
    position: absolute;
    top: 7px;
    transition: all 0.2s ease-out;
  }

  .nav-icon:after {
    background: var(--clr-secondary, black);
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    border-radius: 15px;
    position: absolute;
    top: -7px;
    transition: all 0.2s ease-out;
  }

  .menu-btn {
    display: none;
  }

  .menu-btn:checked ~ .menu__items {
    height: 92vh;
  }

  .menu-btn:checked ~ .menu-icon .nav-icon {
    background: transparent;
  }
  .menu-btn:checked ~ .menu-icon .nav-icon:before {
    transform: rotate(-45deg);
    top: 0;
  }
  .menu-btn:checked ~ .menu-icon .nav-icon:after {
    transform: rotate(45deg);
    top: 0;
  }

  @media (min-width: 48em) {
    :host {
      font-size: 20px;
    }

    ul {
      height: 100%;
    }

    .menu__items li {
      float: left;
      padding-inline: 10px;
      padding-block: 0;
      height: 100%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .menu__items {
      clear: none;
      float: right;
      display: flex;
      align-items: center;
      justify-content: center;
      width: auto;
      height: 100%;
      padding-right: calc(var(--padding-inline) - 5px);
    }

    .menu-icon {
      display: none;
    }
  }
`;
