import React, { useEffect, useState } from 'react';
import '../style/RankingPost.css';
import postesData from '../data/posteRoles.json';

const Rank = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(postesData);
    }, []);

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
                        {posts.length > 0 ? (
                            posts.map(post => (
                                <tr key={post.id}>
                                    <td>{post.name}</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5">Loading...</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Rank;