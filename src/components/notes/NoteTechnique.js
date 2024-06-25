import React from 'react';
import Attributs from '../../data/attributs.json';
import './NoteStyle.css';

const Technique = () => {

  return (
    <div className="notestyle-container">
      <h3 className="notestyle-title">TECHNIQUE</h3>
      {
        Attributs.map(attribut => (
          <div className="notestyle-attribute" key={attribut.id}>
            <label>{attribut.name}</label>
            <input min="1" max="20"/>
          </div>
        ))
      }
    </div>
  );
};

export default Technique;