import { createGlobalStyle } from "styled-components"
//'Comfortaa', cursive;
export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased !important;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -moz-osx-font-smoothing: grayscale;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
html,
body{
    scroll-behavior: smooth;
    overflow-x: hidden;
    height: 100%;
    margin: 0;
}
button {
    cursor: pointer;
}
a {
    text-decoration: none;
}


`
