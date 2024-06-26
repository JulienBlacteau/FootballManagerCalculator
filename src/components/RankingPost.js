import React from 'react';
import '../style/RankingPost.css';
import posteRoles from '../data/posteRoles.json';

const RankingPost = ({ averages }) => {

  return (
    <div className='ranking-post-container'>
      <div className='ranking-post-title'>
        <h3>MOYENNE DE CHAQUE POSTE</h3>
      </div>
      <div className='category-container'>
        <table>
          <thead>
            <tr>
              <th>Postes & Rôles</th>
              <th>Technique</th>
              <th>Mental</th>
              <th>Physique</th>
              <th>Moyenne</th>
            </tr>
          </thead>
          <tbody>
            {posteRoles.map(poste => (
              <tr key={poste.id}>
                <td>{poste.name}</td>
                <td></td>
                <td></td>
                <td></td>
                <td>{averages && averages[poste.name] ? averages[poste.name] : '-'}</td> 
              </tr>
            ))} 
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RankingPost;
