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
    padding-inline: 3rem;
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
`;
