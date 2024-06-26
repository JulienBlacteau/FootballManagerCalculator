import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/NoteJoueur';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Note />
      </div>
      <Footer />
    </div>
  );
}

export default App;
