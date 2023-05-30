import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import styles from './scss/main.scss'

const root = createRoot(document.getElementById('root'));
root.render(<App />);