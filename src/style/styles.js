import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  h1, 
  h2,
  p,
  button,
  input,
  li {
    font-family: 'Zen Maru Gothic', sans-serif;
  }

  button {
    cursor: pointer;
  }



  h1, 
  h2 {
    filter: drop-shadow(0 2mm 2mm #99764e);
  }

  p {
    font-size: 1.2em;
  }

  body {
    background-color: #fff5fd;
    margin: 0 auto;
    color: #99764e;
    text-align: center;
    max-width: 700px;
  }

  .modal {
    position: fixed;
    width: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fffaed;
    border-radius: 7px;
    padding: 25px;
    z-index: 1000;

  }
  
  .modal.modal-fade {
    animation: fadeIn 1s;
    animation-fill-mode: forwards;
    opacity: 0;
  }
  
  .modal-overlay {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.7);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
  }
  
  
  @keyframes fadeIn {
    0% {
      /* animation-timing-function: cubic-bezier(0.2542, 0.7899, 0.3142, 0.8148); */
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const FORM_STYLE = {
  display: 'block',
  position: 'relative',
  width: '300px',
  margin: 'auto'
}


export const INPUT_STYLES = {
  color: '#99764e',
  backgroundColor: '#fffaed',
  fontSize: '1.1em',
  maxWidth: '50%',
  border: '2px solid #99764e',
  borderRadius: '4px',
  margin: '1em',
  padding: '0.5em'
}

export const CONTENTBTN_STYLES = {
  display: 'inline-block',
  color: '#99764e',
  backgroundColor: '#fffaed',
  fontSize: '1.4em',
  margin: '1em',
  padding: '0.5em 1.5em',
  border: 'none',
  filter: 'drop-shadow(0 5mm 3mm #99764e)',
  borderRadius: '6px'
  
}

export const BUTTON_STYLES = {
  display: 'inline-block',
  color: '#fffaed',
  backgroundColor: '#99764e',
  fontSize: '1em',
  margin: '1em',
  padding: '0.25em 1em',
  border: 'none',
  filter: 'drop-shadow(0 3mm 3mm #99764e)',
  borderRadius: '5px'
}

export const LINK_STYLES = {
  textDecoration: 'none',
  color: '#fffaed'

}
