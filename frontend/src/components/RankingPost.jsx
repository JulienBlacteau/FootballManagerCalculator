import React from 'react';
import StarRatings from 'react-star-ratings';
import '../style/components/RankingPost.css';
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

  // Fonction pour convertir une moyenne en nombre d'étoiles
  const getStars = (average) => {
    if (average === null) return 0;
    if (average >= 16) return 5;
    if (average >= 14 && average <= 16) return 4;
    if (average >= 12 && average < 14) return 3;
    if (average >= 10 && average < 12) return 2;
    return 1;
  };

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
              <th>Niveau</th>
            </tr>
          </thead>
          <tbody>
            {sortedPostes.map((poste) => {
              const starRating = getStars(poste.average);
              console.log(`Poste: ${poste.name}, Average: ${poste.average}, Stars: ${starRating}`);
              return (
                <tr key={poste.id}>
                  <td>{poste.name}</td>
                  <td>{poste.average !== null ? poste.average : '-'}</td>
                  <td>
                    <StarRatings
                      rating={starRating}
                      starRatedColor="gold"
                      numberOfStars={5}
                      starDimension="24px"
                      starSpacing="2px"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RankingPost;
