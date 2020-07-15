import { createGlobalStyle } from 'styled-components'

import githubBackground from '../assets/televisao.svg'

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}
body{
    /* background: #25ced1 url(${githubBackground}) no-repeat 70% top; */
    background: #25ced1;

    /* só funciona no chrome */
   -webkit-font-smoothing: antialiased;

}
body, input, button {
    font: 16px Roboto, sans-serif;

}

#root {
    max-width: 700px;
    margin: 0 auto;
  }

button{
    cursor: pointer;
}

`
