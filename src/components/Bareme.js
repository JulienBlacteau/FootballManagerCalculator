import React from 'react';
import Rating from 'react-rating-stars-component';
import '../style/Bareme.css';

const Bareme = () => {
  const rows = [
    { stars: 5, text: 'TOP 5' },
    { stars: 4.5, text: 'TOP 6 à 10' },
    { stars: 4, text: 'TOP 11 à 20' },
    { stars: 3.5, text: 'TOP 21 à 35' },
    { stars: 3, text: 'TOP 36 à 50' },
    { stars: 2.5, text: 'TOP 51 à 70' },
    { stars: 2, text: 'TOP 71 à 90'},
    { stars: 1.5, text: 'TOP 91 à 110' },
    { stars: 1, text: 'TOP 111 à 140' },
    { stars: 0.5, text: '141 et plus' },
  ];

  return (
    <div className="bareme-container">
      <div className='bareme-post-title'>
        <h3>BAREME DES ETOILES</h3>
      </div>
      <table className="bareme-table">
        <thead>
          <tr>
            <th>Niveau</th>
            <th>Championnat</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>
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
