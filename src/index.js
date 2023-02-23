import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './18n'
import { Loader } from './basic_components/loader/Loader';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Suspense fallback={<Loader/>}>
      <App />
    </Suspense>
  </React.StrictMode>
);


