import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const div: HTMLElement = document.createElement('div');
div.setAttribute('id', 'root');
document.body.append(div);
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
