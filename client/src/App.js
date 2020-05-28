import React from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';

const App = () => {
  const name = 'Axel';
  return (
    <div className="App">
      <Navbar />
      Welcome {name}
    </div>
  );
};

export default App;
