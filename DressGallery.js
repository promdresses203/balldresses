import React, { useState, useEffect } from 'react';

function DressGallery() {
  const [dresses, setDresses] = useState([]);

  useEffect(() => {
    // Fetch данни от бекенда
    fetch('http://localhost:5000/api/dresses')  // Адреса на бекенд сървъра
      .then((response) => response.json())
      .then((data) => setDresses(data))
      .catch((error) => console.error("Грешка при зареждане на данни:", error));
  }, []);

  return (
    <div className="dress-gallery">
      <h2>Галерия с бални рокли</h2>
      {dresses.map((dress, index) => (
        <div className="dress-item" key={index}>
          <img src={dress.image} alt={dress.name} />
          <p>{dress.name}</p>
        </div>
      ))}
    </div>
  );
}

export default DressGallery;

