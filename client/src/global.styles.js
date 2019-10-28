import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
      font-family: 'Open Sans Condensed', sans-serif;
      padding: 20px 40px;

      @media screen and (max-width: 800px) {
        padding: 10px;
      }
  }

  .app-header {
      position: fixed;
  }

  a {
      text-decoration: none;
      color: black;
  }

  .winter-beautiful {
      padding: 5px 5px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      background: url('./assets/images/winter-resized.svg');
      background-size: 100px 82px;
      background-repeat: no-repeat;
  }

  * {
      box-sizing: border-box;
  }
`