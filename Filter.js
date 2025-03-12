import React, { useState } from 'react';

function Filter() {
  const [fabric, setFabric] = useState('');

  const handleFabricChange = (e) => {
    setFabric(e.target.value);
  };

  return (
    <div className="filter">
      <h3>Филтрирай по тип плат:</h3>
      <select value={fabric} onChange={handleFabricChange}>
        <option value="">Избери...</option>
        <option value="silk">Шелк</option>
        <option value="lace">Дантела</option>
        <option value="satin">Сатен</option>
      </select>
    </div>
  );
}

export default Filter;
