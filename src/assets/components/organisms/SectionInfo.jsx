import React, { useState, useEffect } from 'react';

function SectionInfo() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://www.dragonball-api.com/api/characters')
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Failed to fetch characters');
            })
            .then(data => {
                setCharacters(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {characters.map(item => (
                <div key={item.id} style={{ margin: '10px', border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
                    <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px' }} />
                    <h3>{item.name}</h3>
                    <p>Ki: {item.ki}</p>
                    <p>Max Ki: {item.maxKi}</p>
                    <p>Race: {item.race}</p>
                    <p>Gender: {item.gender}</p>
                    <p>Affiliation: {item.affiliation}</p>
                    <p>Description: {item.description}</p>
                </div>
            ))}
        </div>
    );
}

export default SectionInfo;
