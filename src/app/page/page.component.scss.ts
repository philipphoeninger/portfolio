import { css } from "lit-element";

export const style = css`
  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  #showcase {
    height: 100vh; // -header
  }

  [hidden] {
    visibility: hidden;
  }
  #spinner {
    position: absolute;
    top: 50%;
    left: 50%;
  }
`;
