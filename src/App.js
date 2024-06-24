import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Note from './components/notes/NoteJoueur';
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
