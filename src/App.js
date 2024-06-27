import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/NoteJoueur';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className='app-header'>
        <Header />
      </header>
      <main className='app-main'>
        <Note />
      </main>
      <footer className='app-footer'>
        <Footer />
      </footer>
        
      
    </div>
  );
}

export default App;
