import React from 'react';
import '../style/TopTen.css';
import posteRoles from '../data/posteRoles.json';

const TopTen = ({ averages }) => {
  // Calculer les moyennes pour chaque poste
  const posteAverages = posteRoles.map(poste => {
    const posteName = poste.name;
    const moyenne = averages[posteName] ? parseFloat(averages[posteName]) : 0;
    return { name: posteName, moyenne };
  });

  // Trier les postes par moyenne décroissante et prendre les 10 meilleurs
  const topTenPostes = posteAverages.sort((a, b) => b.moyenne - a.moyenne).slice(0, 10);

  return (
    <div className='topten-container'>
      <div className='topten-title'>
        <h3>TOP 10 POSTES</h3>
      </div>
      <div className='topten-list'>
        <table>
          <thead>
            <tr>
              <th>Postes & Rôles</th>
              <th>Moyenne</th>
            </tr>
          </thead>
          <tbody>
            {topTenPostes.map((poste, index) => (
              <tr key={index}>
                <td>{poste.name}</td>
                <td>{poste.moyenne.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopTen;
