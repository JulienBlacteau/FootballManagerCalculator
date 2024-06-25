import React, { useState } from 'react';
import Attributs from '../data/attributsJoueur.json';

import '../style/NoteJoueur.css';

const Note = () => {
  const initialState = Attributs.reduce((acc, attribut) => {
    acc[attribut.id] = '';
    return acc;
  }, {});

  const [values, setValues] = useState(initialState);

  const handleChange = (event, id) => {
    const value = event.target.value;
    if (value === '' || (value >= 1 && value <= 20)) {
      setValues(prevValues => ({
        ...prevValues,
        [id]: value
      }));
    } else {
      setValues(prevValues => ({
        ...prevValues,
        [id]: ''
      }));
    }
  };

  // Diviser les attributs en trois catégories
  const techniqueAttributes = Attributs.slice(0, 14);
  const mentalAttributes = Attributs.slice(14, 28);
  const physicalAttributes = Attributs.slice(28, 36);

  return (
    <div className="notestyle-container">
      <div className="notestyle-section">
        <h3>Technique</h3>
        {techniqueAttributes.map(attribut => (
          <div className="notestyle-attribute" key={attribut.id}>
            <label>{attribut.name}</label>
            <input
              value={values[attribut.id]}
              onChange={(e) => handleChange(e, attribut.id)}
            />
          </div>
        ))}
      </div>
      
      <div className="notestyle-section">
        <h3>Mental</h3>
        {mentalAttributes.map(attribut => (
          <div className="notestyle-attribute" key={attribut.id}>
            <label>{attribut.name}</label>
            <input
              value={values[attribut.id]}
              onChange={(e) => handleChange(e, attribut.id)}
            />
          </div>
        ))}
      </div>
      
      <div className="notestyle-section">
        <h3>Physique</h3>
        {physicalAttributes.map(attribut => (
          <div className="notestyle-attribute" key={attribut.id}>
            <label>{attribut.name}</label>
            <input
              value={values[attribut.id]}
              onChange={(e) => handleChange(e, attribut.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Note;
