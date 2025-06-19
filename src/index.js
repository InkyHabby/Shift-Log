
import React from 'react';
import ReactDOM from 'react-dom/client';
import EngineFuelLogForm from './EngineFuelLogForm';
import './index.css'; // optional
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EngineFuelLogForm />
  </React.StrictMode>
);

serviceWorkerRegistration.register();
