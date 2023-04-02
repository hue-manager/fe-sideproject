import React from 'react'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  :root{
    --color-primary: #745CF2;
    --color-lightpurple: #F7F3FF;
    --color-pink: #FF99E5;
    --color-black: #262626;
    --color-black90: #262626;
    --color-black80: #3C3C3C;
    --color-black70: #515151;
    --color-black60: #676767;
    --color-black50: #7D7D7D;
    --color-black40: #A8A8A8;
    --color-black30: #BEBEBE;
    --color-black20: #D4D4D4;
    --color-black10: #E9E9E9;
    --color-white: #FFFFFF;
  }
  ${reset};

  #root {
    font-family: "Pretendard Variable", "Pretendard", -apple-system, "BlinkMacSystemFont", system-ui, "Roboto", "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji",  "Segoe UI Symbol", sans-serif;
    font-size: 14px;
  }
  
 * {
    padding:0;
    margin:0;
    box-sizing:border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }

  a {
    color:inherit;
    text-decoration: none;
  }

  svg {
    margin:0 auto;
  }

  input {
    width: 100%;
    height: 100%;
    border:none;
    background:transparent;
    outline:none;
    cursor:pointer;
  }

  button {
    cursor:pointer;
  }

  body {
    background: var(--color-lightpurple)
  }

  ::selection {
    color: var(--color-white);
    background: var(--color-primary);
  }

  @media screen and (max-width:1400px){
   body .big-screen-text{display: flex;}
  }

  .big-screen-text{
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0; top: 0;
    z-index: 10000;
    background-color: var(--color-lightpurple);
    font-weight: bold;
    font-size: 50px;
    display: none;
    justify-content: center;
    align-items: center;
    color: var(--color-primary);
  
  }
 
 
`
