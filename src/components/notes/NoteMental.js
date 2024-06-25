import React, { useState } from 'react';
import '../../style/notes/NoteStyle.css';

const Mental = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    if (value < 1 || value > 20) {
      setValue('');
    } else {
      setValue(value);
    }
  };

  return (
    <div className="notestyle-container">
      <h3 className="notestyle-title">MENTAL</h3>
      <div className="notestyle-attribute">
        <label htmlFor="agressivite">Agressivité</label>
        <input id="agressivite" name="agressivite" min="1" max="20" value={value} onChange={handleChange}
        />
      </div>

      <div className="notestyle-attribute">
        <label htmlFor="anticipation">Anticipation</label>
        <input id="anticipation" name="anticipation" min="1" max="20" value={value} onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Mental;
