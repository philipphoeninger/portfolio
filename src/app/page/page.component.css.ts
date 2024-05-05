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

    /* justify-content: space-between; */
    /* background-color: var(--ph-color-bg); */
  }

  ph-menu.menu--hidden {
    transform: translateY(calc(var(--menu-height) * -1));
    /* display: none; */
  }

  #main-container {
    padding: 0 1.5rem;
    text-align: center;
    padding-top: var(--menu-height);
    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */
  }

  #main-container i {
    font-size: 25px;
    color: var(--clr-secondary, black);
  }

  #main-container #scroll-up {
    position: fixed;
    bottom: 3rem;
    right: 3rem;
    z-index: 999;
  }

  .container-section {
    margin-bottom: 6rem;
    padding-inline: 3rem;
  }

  h2 {
    margin-bottom: 1.5rem;
  }

  #work .work-entry {
    margin-bottom: 3rem;
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
  }

  #contact .social {
    margin: 2rem 0;
  }

  #contact form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* max-width: 1000px; */
  }

  #contact form label {
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

  #contact form input {
    /* display: block; */
    border: 1px solid var(--clr-secondary, black);
    font-family: var(--ff-main, sans-serif);
    width: 100%;
    padding: 8px;
    margin-bottom: 0.5rem;
    border-radius: 7px;
  }

  #contact form textarea {
    border: 1px solid var(--clr-secondary, black);
    font-family: var(--ff-main, sans-serif);
    width: 100%;
    padding: 8px;
    margin-bottom: 0.5rem;
    border-radius: 7px;
  }

  #contact form button {
    background-color: var(--clr-primary, white);
    border: 1px solid var(--clr-secondary, black);
    border-radius: 7px;
    font-family: var(--ff-main, sans-serif);
    padding: 8px;
    margin-left: auto;
  }

  #contact form button i {
    font-size: 18px;
    color: #32b73f;
  }

  #contact a {
    display: block;
    color: var(--clr-secondary, black);
    text-decoration: none;
  }

  #contact i {
    font-size: 25px;
  }

  #contact hr {
    margin-top: 2rem;
    width: 35%;
    margin-inline: auto;
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid var(--clr-secondary, #ccc);
    padding: 0;
  }

  #footer {
    text-align: center;
    padding: 5rem;
    font-weight: bold;
    font-size: 1.25rem;
    background-color: var(--clr-secondary, black);
    color: var(--clr-primary, white);
  }
`;
