import React from 'react';
import '../style/RankingPost.css'

const Rank = () => {

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
                    <tr>
                        <td>Défenseur Central Excentré – Soutien/Att</td>
                        <td>15,12</td>
                        <td>14,20</td>
                        <td>15,30</td>
                        <td>14,95</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
  
export default Rank;