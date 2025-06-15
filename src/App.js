import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <h1>Hello, World!</h1>
          <p>By Dudu Fischer.</p>
        </div>
      </header>
    </div>
  );
}

export default App;
