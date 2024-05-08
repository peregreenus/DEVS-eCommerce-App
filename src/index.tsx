import React from 'react';
import { createRoot } from 'react-dom/client';
import Singup from './view/pages/Singup/singup';

const rootElement: HTMLDivElement = document.createElement('div');
rootElement.id = 'root';
document.body.append(rootElement);

const root = createRoot(rootElement!);

root.render(<Singup />);
