import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main/Main'
/* Arquivo principal da aplicação */
/* Bable
Webpack - passa para o babel (mapear e converter) */


ReactDOM.render(
  <React.StrictMode>{/* Onde é colocado os componentes ( aviso de warnings), ciclo de vida dos componentes */}
    <Main/>
  </React.StrictMode>,
  document.getElementById('root')
);
