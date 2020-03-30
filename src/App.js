import React from 'react';
import Stars from './components/Stars.js'
import './App.css';

function App() {
  return (
    <div className="App">
     <Stars count={3} />
     <Stars count={5} />
    </div>
  );
}

export default App;
