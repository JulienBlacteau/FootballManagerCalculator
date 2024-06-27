import React, { useState } from 'react';
import Attributs from '../data/attributsJoueur.json';
import posteRoles from '../data/posteRoles.json';
import TopTen from './TopTen';
import '../style/NoteJoueur.css';
import RankingPost from './RankingPost';

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

  const calculateAverages = () => {
    // Exemple de calcul des moyennes pour chaque poste
    const averages = posteRoles.reduce((acc, poste) => {
      const posteName = poste.name;
      const total = poste.attributs.reduce((sum, attr) => sum + (parseFloat(values[attr]) || 0), 0);
      const count = poste.attributs.length;
      acc[posteName] = (total / count).toFixed(2);
      return acc;
    }, {});

    return averages;
  };

  const averages = calculateAverages();

  const techniqueAttributes = Attributs.slice(0, 14);
  const mentalAttributes = Attributs.slice(14, 28);
  const physicalAttributes = Attributs.slice(28, 36);

  return (
    <div className='all-container'>
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
      <RankingPost averages={averages}/>
      <TopTen averages={averages} />
    </div>
  );
};

export default Note;
