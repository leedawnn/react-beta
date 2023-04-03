import React from 'react';
import './index.css';
// import App from './App';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import Gallery from './components/state';
import Form from './components/form';
import Toolbar from './components/toolbar';
import Snapshot from './components/snapshot';
import Counter from './components/Counter';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    {/* <App /> */}
    <Counter />
  </StrictMode>,
);
