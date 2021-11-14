import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --dark-bg: #262626;
    --gray-1: #BCB4B4;
    --deep-dark: #1E1E1E;
    --gray-2: #363636;
    --white : white;
    --black: black;
    --muave: #98817b;
    --copper: #b87333;
    --gray-blue: #536878;
    --goldenrod: #b8860b;
    --bud-green: #556b2f;
    --desert: #c19a6b;
    --muave-shadow: #bfafb2;
    --bronze: #a57164;
    --deer: #ba8759;
    --sky-blue: #b8f2e6;
    --grey-blue: #aed9e0;
    --lt-yellow: #fdfcdc;
    --pink: #ffa69e;

    
  }
  html{
  
    font-family: 'AtkinsonHyperlegible-Regular';
    background-color: var(--dark-bg);
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--gray-1);
    .scroll-content {
      background-color: var(--dark-bg);
    }
    .scrollbar-track.scrollbar-track-y {
      background: var(--deep-dark);
      .scrollbar-thumb-y {
        background: var(--gray-1);
      }
    }
  }
`;
export default GlobalStyles;