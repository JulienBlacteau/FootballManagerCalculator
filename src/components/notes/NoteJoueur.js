import React from 'react';
import Technique from './NoteTechnique';
import Mental from './NoteMental';
import Physique from './NotePhysique';

import './NoteJoueur.css'


const Note = () => {
  return (
    <div className='note-container'>
      <Technique />
      <Mental />
      <Physique />
    </div>
  );
};

export default Note;