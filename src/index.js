import React from 'react';
import { createRoot } from 'react-dom/client';
import styles from './scss/main.scss'

function App() {
    return <div>Somebody tell my momma her middle son is a React developer!</div>
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);