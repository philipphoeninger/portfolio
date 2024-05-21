import { css } from "lit-element";

export const style = css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  ul {
    list-style: none;
  }

  .tag-list {
    margin: 0;
    padding-inline: 0;

    li {
      padding: 1rem;
    }
  }

  .scroller {
    width: 100%;
    outline: 3px solid lime;
  }

  .scroller__inner {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    img {
      filter: grayscale(50%);
      width: 100%;
    }
  }

  .scroller[data-animated="true"] {
    overflow: hidden;
    -webkit-mask: linear-gradient(
      90deg,
      transparent,
      white 20%,
      white 80%,
      transparent
    ); /*for chromium browsers*/
    mask: linear-gradient(
      90deg,
      transparent,
      white 20%,
      white 80%,
      transparent
    );
  }

  .scroller[data-animated="true"] .scroller__inner {
    width: max-content;
    flex-wrap: nowrap;
    animation: scroll var(--_animation-duration, 30s)
      var(--_animation-direction, forwards) linear infinite;
  }

  .scroller[data-animated="true"] .scroller__inner:hover {
    animation-play-state: paused;
  }

  .scroller[data-direction="right"] {
    --_animation-direction: reverse;
  }

  .scroller[data-direction="left"] {
    --_animation-direction: forwards;
  }

  .scroller[data-speed="slow"] {
    --_animation-duration: 120s;
  }

  .scroller[data-speed="fast"] {
    --_animation-duration: 20s;
  }

  @keyframes scroll {
    to {
      transform: translate(calc(-50% - 0.5rem));
    }
  }
`;
