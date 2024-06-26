import React, { useState, useEffect } from 'react';
import Attributs from '../data/attributsJoueur.json';
import posteRoles from '../data/posteRoles.json';
import '../style/NoteJoueur.css';
import RankingPost from './RankingPost'; 

const Note = () => {
  const initialState = Attributs.reduce((acc, attribut) => {
    acc[attribut.id] = '';
    return acc;
  }, {});

  const [values, setValues] = useState(initialState);
  const [averages, setAverages] = useState({});

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

  useEffect(() => {
    const calculateAverages = () => {
      const averages = {};

      posteRoles.forEach(poste => {
        let sum = 0;
        let count = 0;

        poste.attributs.forEach(attr => {
          const value = values[attr];
          if (value) {
            sum += parseInt(value, 10);
            count += 1;
          }
        });

        if (count > 0) {
          averages[poste.name] = (sum / count).toFixed(2);
        }
      });

      setAverages(averages);
    };

    calculateAverages();
  }, [values]);

  const techniqueAttributes = Attributs.slice(0, 14);
  const mentalAttributes = Attributs.slice(14, 28);
  const physicalAttributes = Attributs.slice(28, 36);

  return (
    <div className="note-ranking-container">
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

      <RankingPost averages={averages} /> 
    </div>
  );
};

export default Note;
