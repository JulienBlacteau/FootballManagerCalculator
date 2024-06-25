import React, { useState } from 'react';
import Attributs from '../../data/attributsTechnique.json';
import '../../style/notes/NoteStyle.css';

const Technique = () => {
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

  return (
    <div className="notestyle-container">
      <h3 className="notestyle-title">TECHNIQUE</h3>
      {
        Attributs.map(attribut => (
          <div className="notestyle-attribute" key={attribut.id}>
            <label>{attribut.name}</label>
            <input
              value={values[attribut.id]}
              onChange={(e) => handleChange(e, attribut.id)}
            />
          </div>
        ))
      }
    </div>
  );
};

export default Technique;