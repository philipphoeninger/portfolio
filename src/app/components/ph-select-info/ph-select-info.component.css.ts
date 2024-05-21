import { css } from "lit-element";

export const style = css`
  /* resets */
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :host {
    display: block;
    background-color: var(--clr-primary, white);
  }

  object {
    height: 25px;
    pointer-events: none;
  }

  ul {
    list-style-type: none;
  }

  .select-info-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    text-align: left;
  }

  .skills__tabs {
    display: none;
  }

  .skills__header {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .skills__header:not(:first-child) {
    margin-top: 1rem;
  }

  .skills__icon,
  .skills__arrow {
    height: 1.5rem;
  }

  .skills__icon {
    margin-right: 1rem;
  }

  .skills__title {
    font-size: 1.25rem;
    font-weight: normal;
  }

  .skills__subtitle {
    font-size: 0.875rem;
    font-style: italic;
  }

  .skills__arrow {
    margin-left: auto;
  }

  .skills__active .skills__arrow {
    transform: rotate(90deg);
    transition: 0.3s;
  }

  .skills__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 1rem;
  }

  .skills__group[data-content] {
    display: none;
  }

  .skills__active[data-content] {
    display: block;
  }

  .skills__list {
    li {
      margin-bottom: 1rem;
    }
  }

  .skills__item_caption {
    display: flex;
    gap: 0.5rem;
  }

  .skills__item__progress {
    display: flex;
    gap: 0.5rem;

    .skills__description {
      padding-right: 0.5rem;
      font-size: 0.875rem;
      font-style: italic;
      border-right: 1px solid gray;
    }
  }

  .skills__titles {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    object {
      height: 20px;
      width: 20px;
      margin-right: 0;
    }
  }

  .skills__name {
    font-size: 1rem;
    font-weight: normal;
  }

  .skills__bar,
  .skills__percentage {
    height: 0.5rem;
    border-radius: 0.5rem;
    background-color: var(--clr-lighter, black);
  }

  .skills__bar {
    /* background-color: blue; */
  }

  .skills__percentage {
    display: block;
    background-color: var(--clr-accent, blue); // green
  }

  .select-info-content {
    font-family: var(--ff-regular, sans-serif);
    /* padding: 1rem; */
    overflow: auto;
  }

  .select-info-header li {
    padding-block: 0.25rem;
    padding-inline: 0.75rem;
    display: block;
    cursor: pointer;
    /* background-color: white; */
  }

  .select-info-header li:hover,
  .select-info-header li:focus {
    background-color: #f9f9f9;
  }

  @media (min-width: 768px) {
    .select-info-container {
      display: grid;
      grid-template-columns: 3fr 7fr;
      column-gap: 3rem;
      justify-content: center;
      text-align: left;
      height: 423px;
    }

    .skills__list {
      display: grid;
      row-gap: 1rem;
      li {
        margin-bottom: 1rem;
      }
    }

    .skills__tabs {
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
      gap: 2rem;
    }

    ph-dropdown {
      display: none;
    }
  }
`;
