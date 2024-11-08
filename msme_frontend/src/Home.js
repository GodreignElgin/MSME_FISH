import React, { useState } from 'react';

const Home = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [predictedImage, setPredictedImage] = useState(null);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
      setPredictedImage(null); // Reset predicted image on new upload
    }
  };

  const handlePredict = () => {
    // Here you would add logic to send the image to your ML model for prediction
    setPredictedImage(uploadedImage); // For demonstration, set it to the uploaded image
  };

  const handleRefresh = () => {
    setUploadedImage(null);
    setPredictedImage(null);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Image Prediction App</h1>
      
      <div style={styles.uploadContainer}>
        <input type="file" onChange={handleUpload} style={styles.uploadButton} />
        <button onClick={handlePredict} style={styles.predictButton} disabled={!uploadedImage}>
          Predict
        </button>
        <button onClick={handleRefresh} style={styles.refreshButton}>
          Refresh
        </button>
      </div>

      <div style={styles.imageContainer}>
        <div style={styles.imageBox}>
          <h2>Uploaded Image</h2>
          {uploadedImage ? (
            <img src={uploadedImage} alt="Uploaded" style={styles.image} />
          ) : (
            <p style={styles.placeholder}>No image uploaded.</p>
          )}
        </div>

        <div style={styles.imageBox}>
          <h2>Predicted Image</h2>
          {predictedImage ? (
            <img src={predictedImage} alt="Predicted" style={styles.image} />
          ) : (
            <p style={styles.placeholder}>Prediction will appear here.</p>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    fontSize: '28px',
    color: '#333',
    marginBottom: '30px',
  },
  uploadContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '20px',
  },
  uploadButton: {
    padding: '10px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  predictButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  refreshButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#f44336',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    marginTop: '30px',
  },
  imageBox: {
    textAlign: 'center',
    width: '220px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
  image: {
    width: '200px',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
  placeholder: {
    color: '#999',
    fontStyle: 'italic',
  },
};

export default Home;