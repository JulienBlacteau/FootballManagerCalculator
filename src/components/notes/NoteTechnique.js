import React from 'react';
import Attributs from '../../data/attributs.json';
import './NoteStyle.css';

const Technique = () => {

  console.log(Attributs)
  return (
    <div className="notestyle-container">
      <h3 className="notestyle-title">TECHNIQUE</h3>
        {
            Attributs.map( attribut =>{

              return(
                <div className="notestyle-attribute" key={ attribut.id }>
                  {attribut.name}
                </div>   
              )
            
            })
          }
              
    </div>
  );
};

export default Technique;
