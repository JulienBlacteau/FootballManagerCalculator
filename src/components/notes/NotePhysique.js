import React, { useState } from 'react';
import './NoteStyle.css';

const Physique = () => {
  const initialState = {
    acceleration: '',
    agilite: '',
    detente: '',
    endurence: '',
    equilibre: '',
    puissance: '',
    qpn: '',
    vitesse: ''
  };

  const [values, setValues] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (value === '' || (value >= 1 && value <= 20)) {
      setValues({
        ...values,
        [name]: value
      });
    } else {
      setValues({
        ...values,
        [name]: ''
      });
    }
  };

  return (
    <div className="notestyle-container">
      <h3 className="notestyle-title">PHYSIQUE</h3>
      
      <div className="notestyle-attribute">
        <label htmlFor="acceleration">Accélération</label>
        <input id="acceleration" name="acceleration" value={values.acceleration} onChange={handleChange}/>
      </div>    
      <div className="notestyle-attribute">
        <label htmlFor="agilite">Agilité</label>
        <input id="agilite" name="agilite" value={values.agilite} onChange={handleChange}/>
      </div>    
      <div className="notestyle-attribute">
        <label htmlFor="detente">Détente Verticale</label>
        <input id="detente" name="detente" value={values.detente} onChange={handleChange}/>
      </div>
      <div className="notestyle-attribute">
        <label htmlFor="endurence">Endurence</label>
        <input id="endurence" name="endurence" value={values.endurence} onChange={handleChange}/>
      </div>
      <div className="notestyle-attribute">
        <label htmlFor="equilibre">Equilibre</label>
        <input
          id="equilibre" name="equilibre" value={values.equilibre} onChange={handleChange}/>
      </div>
      <div className="notestyle-attribute">
        <label htmlFor="puissance">Puissance</label>
        <input
          id="puissance" name="puissance" value={values.puissance} onChange={handleChange}
        />
      </div>
      <div className="notestyle-attribute">
        <label htmlFor="qpn">Qualité Phys. Nat</label>
        <input id="qpn" name="qpn" value={values.qpn} onChange={handleChange}/>
      </div>
      <div className="notestyle-attribute">
        <label htmlFor="vitesse">Vitesse</label>
        <input id="vitesse" name="vitesse" value={values.vitesse} onChange={handleChange} />
      </div>
    </div>
  );
};

export default Physique;
