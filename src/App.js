import React, { useState, useEffect } from 'react';
import './App.css';

/* Componente de Efeito de Digitação */
function TypingEffect({ text, speed = 150 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => setIndex(index + 1), speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return <h1>{text.slice(0, index)}</h1>;
}

/* Componente Principal da Aplicação */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TypingEffect text="Hello, World!" speed={150} />
        <p>By Dudu Fischer.</p>
      </header>
    </div>
  );
}

export default App;
