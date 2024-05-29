import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const div = document.createElement('div');
div.setAttribute('id', 'root');
document.body.append(div);

const rootElement = document.getElementById('root');
if (rootElement !== null) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
} else {
  console.error('Root element not found');
}
