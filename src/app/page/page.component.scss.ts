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
    /* color: var(--clr-secondary, white);
    background-color: var(--clr-primary, black);
    font-family: var(--ff-main, sans-serif); */

    display: flex;
    flex-direction: column;

    /* justify-content: space-between; */
    /* background-color: var(--ph-color-bg); */
  }

  h2 {
    margin-bottom: 1.5rem;
  }

  .container-section {
    margin-bottom: 6rem;
  }

  #showcase {
    margin-top: 5vh;
    height: 95vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  #showcase #portrait img {
    border-radius: 50%;
    border: 3px solid var(--clr-secondary, black);
  }

  #showcase h1 {
    margin-top: 1.5rem;
    font-size: 2rem;
    line-height: 1.2;
  }

  #showcase #text {
    margin-top: 1rem;
    color: var(--clr-secondary, black);
    opacity: 0.8;
    font-family: var(--ff-italic, sans-serif);
    font-style: italic;
  }

  #showcase #social-media {
    margin-top: 1rem;
    width: 100%;
    /* overflow: hidden; */
  }

  #showcase #social-media ul {
    /* width: 100%; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    /* overflow: hidden; */
  }

  #showcase #social-media ul li {
    padding: 1.25rem;
    cursor: pointer;
  }

  #showcase #social-media ul li:hover {
    background-color: var(--clr-light, #d9d9d9);
  }

  #showcase #social-media ul i {
    font-size: 25px;
    color: var(--clr-secondary, black);
  }

  #showcase #social-media ul a {
    display: block;
  }

  #main-container {
    padding: 0 1.5rem;
    text-align: center;
    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */
  }

  [hidden] {
    visibility: hidden;
  }
  #spinner {
    position: absolute;
    top: 50%;
    left: 50%;
  }

  #contact .social {
    margin: 2rem 0;
  }

  #contact form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
  }

  ph-card {
    /* --ph-color-text: black;
    --ph-color-bg: white;
    --ph-font-family: Poppins, sans-serif; */
  }
`;
