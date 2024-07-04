import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/NoteJoueur';
import LoginPage from './pages/LoginPage';
import Register from './pages/Register';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className='app-header'>
          <Header />
        </header>
        <main className='app-main'>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Note />} />
          </Routes>
        </main>
        <footer className='app-footer'>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
