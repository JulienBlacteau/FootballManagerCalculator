// Bareme.js
import React from 'react';
import Rating from 'react-rating-stars-component';
import '../style/Bareme.css'; // Pour ajouter du style si nécessaire

const Bareme = () => {
  // Création des lignes avec étoiles et chaînes de caractères
  const rows = [
    { stars: 5, text: 'top 5' },
    { stars: 4.5, text: 'top 6 à 10' },
    { stars: 4, text: 'top 11 à 20' },
    { stars: 3.5, text: 'top 21 à 35' },
    { stars: 3, text: 'top 36 à 50' },
    { stars: 2.5, text: 'top 51 à 70' },
    { stars: 2, text: 'top 71 à 90' },
    { stars: 1.5, text: 'top 91 à 110' },
    { stars: 1, text: 'top 111 à 140' },
    { stars: 0.5, text: 'au-delà' }
  ];

  return (
    <div className="bareme-container">
      <table className="bareme-table">
        <thead>
          <tr>
            <th>Étoiles</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td className="rating-cell">
                <Rating
                  count={5}
                  value={row.stars}
                  isHalf={true}
                  edit={false}
                  size={24}
                  activeColor="#ffd700"
                  color="#e4e5e9"
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