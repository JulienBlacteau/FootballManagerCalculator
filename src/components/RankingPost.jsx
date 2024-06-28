import React from 'react';
import '../style/RankingPost.css';
import posteRoles from '../data/posteRoles.json';

const RankingPost = ({ averages }) => {
  // Convert averages object to an array and sort it in descending order of the overall average
  const sortedPostes = posteRoles
    .map(poste => ({
      ...poste,
      average: averages && averages[poste.name] ? averages[poste.name].overall : null,
      technique: averages && averages[poste.name] ? averages[poste.name].technique : '-',
      mental: averages && averages[poste.name] ? averages[poste.name].mental : '-',
      physical: averages && averages[poste.name] ? averages[poste.name].physical : '-'
    }))
    .sort((a, b) => (b.average || 0) - (a.average || 0));

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
              <th>Moyenne</th>
              <th>Technique</th>
            </tr>
          </thead>
          <tbody>
            {sortedPostes.map(poste => (
              <tr key={poste.id}>
                <td>{poste.name}</td>
                <td>{poste.average ? poste.average : '-'}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RankingPost;
