import React, { useState, useEffect } from 'react';
import './SectionInfo.css';

function SectionInfo() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://dragonball-api.com/api/characters')
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Failed to fetch characters');
            })
            .then(data => {
                setCharacters(data.items);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div className="characters-container">
            <div className='Titule'>API de dragon ball</div>
            <div className='Texto'>Victor Alejandro Hernandez Perez</div>
            {characters.map(item => (
                <div key={item.id} className="character-card">
                    <img src={item.image} alt={item.name} className="character-image" />
                    <div className="character-details">
                        <h3 className="character-name">{item.name}</h3>
                        <p>Ki: {item.ki}</p>
                        <p>Max Ki: {item.maxKi}</p>
                        <p>Race: {item.race}</p>
                        <p>Gender: {item.gender}</p>
                        <p>Affiliation: {item.affiliation}</p>
                        <p className="character-description">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SectionInfo;
