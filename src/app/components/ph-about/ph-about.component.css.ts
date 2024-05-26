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

  #about__list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  .about__item {
    border-left: 2px solid var(--clr-accent, black);
    padding-left: 1.5rem;
    position: relative;
  }

  .about__item:last-child {
    /* border-left: 2px solid var(--clr-primary, black); */
  }

  .about__item::before {
    content: "";
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid var(--clr-accent, black);
    position: absolute;
    left: -0.56rem;
    background-color: var(--clr-primary, white);
  }

  .about__item:not(:last-child) {
    padding-bottom: 2.5rem;
  }

  .about__item h3 {
    display: inline-block;
    line-height: 0.8;
    /* font-weight: normal; */
    /* font-size: 1.25rem; */
    margin-bottom: 0.75rem;
  }

  #description__list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
    margin-top: 1rem;
    text-align: justify;
    justify-content: center; // todo

    span {
      font-weight: bold;
    }

    /* li:not(:last-child) {
      margin-right: 0.75rem;
    } */
  }

  .description__item:not(:last-child) {
    margin-right: 0.75rem;
  }

  .about__date {
    color: var(--clr-secondary, black);
    opacity: 0.6;
    /* font-style: italic; */
    font-size: 0.825rem;
  }

  .about__icon {
    margin-right: 0.25rem;
    height: 0.75rem;
  }

  @media (min-width: 768px) {
    #about__list {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 3rem;
      justify-content: left;
      text-align: left;
    }

    #description__list {
      justify-content: left;
    }
  }
`;
