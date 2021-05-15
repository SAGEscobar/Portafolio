import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css'
import './styles/Proyecto.css';
import './styles/Certificado.css'
import reportWebVitals from './reportWebVitals';

import Home from './pages/Home';

ReactDOM.render(
  <Home />,
  document.getElementById('app')
);

reportWebVitals();
