import React, { useState, useEffect } from 'react';
import styles from './index.module.css'

const PhotosApp = () => {
  const [photos, setPhotos] = useState([]);
  const [startId, setStartId] = useState(1);
  const [endId, setEndId] = useState(20);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => setPhotos(data));
  }, []);

  const filterPhotos = () => {
    const filteredPhotos = photos.filter(photo => photo.id >= startId && photo.id <= endId);
    setPhotos(filteredPhotos);
  };

  return (
    <div>
      <div className="filter-bar">
        <input
        className={styles.input}
          type="number"
          placeholder="Start ID"
          value={startId}
          onChange={e => setStartId(parseInt(e.target.value))}
        />
        <input
        className={styles.input}
          type="number"
          placeholder="End ID"
          value={endId}
          onChange={e => setEndId(parseInt(e.target.value))}
        />
        <button className={styles.filter} onClick={filterPhotos}>Filter</button>
      </div>
      <div className={styles.photo}>
        {photos.map(photo => (
          <div key={photo.id} className={styles.photocard}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <h3>{photo.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotosApp;