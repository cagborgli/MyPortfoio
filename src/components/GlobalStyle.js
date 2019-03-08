import { createGlobalStyle } from 'styled-components'
import img from '../images/home.jpg'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    border: 0;
    padding: 0;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 100vh;
  }
`
export default GlobalStyle
