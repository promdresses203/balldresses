import React from 'react';
import DressGallery from './DressGallery';
import Filter from './Filter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Добре дошли в нашия каталог на бални рокли!</h1>
      </header>
      <Filter />
      <DressGallery />
    </div>
  );
}

export default App;



