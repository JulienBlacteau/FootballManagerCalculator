import React from 'react';
import StarRatings from 'react-star-ratings';
import '../style/components/Bareme.css';

const Bareme = () => {
  
  const rows = [
    { stars: 5, text: 'TOP 5' },
    { stars: 4, text: 'TOP 6 à 20' },
    { stars: 3, text: 'TOP 21 à 60' },
    { stars: 2, text: 'TOP 61 à 100' },
    { stars: 1, text: 'TOP 100 +' },
  ];

  return (
    <div className="bareme-container">
      <table className="bareme-table">
        <thead>
          <tr>
            <th>Étoiles</th>
            <th>Championnat</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td className="rating-cell">
                <StarRatings
                  rating={row.stars}
                  starRatedColor="gold"
                  numberOfStars={5}
                  starDimension="24px"
                  starSpacing="2px"
                  name={`rating-${index}`}
                />
              </td>
              <td>{row.text}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bareme;
