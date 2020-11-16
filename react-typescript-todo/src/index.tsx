import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import * as Styled from './globalStyled';

ReactDOM.render(
  <React.StrictMode>
    <Styled.Global>
      <App />
    </Styled.Global>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
