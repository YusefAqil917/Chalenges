import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// Placeholder getGifs function
const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=YOUR_API_KEY&q=${category}&limit=10`;
  const response = await fetch(url);
  const { data } = await response.json();
  return data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized_medium.url
  }));
};

// GifItem Component
const GifItem = ({ title, url }) => {
  return (
    <div className="gif-item">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

// GifGrid Component
const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const fetchGifs = async () => {
    const gifs = await getGifs(category);
    console.log(gifs);  // Print the list of Gifs to the console
    setImages(gifs);
  };

  useEffect(() => {
    fetchGifs();
  }, [category]);

  return (
    <div className="gif-grid">
      {images.map(img => (
        <GifItem key={img.id} {...img} />
      ))}
    </div>
  );
};

// Main App Component
const App = () => {
  const category = 'cats';  // Example category

  return (
    <div>
      <h2>GifGrid</h2>
      <GifGrid category={category} />
    </div>
  );
};

// Render App
ReactDOM.render(<App />, document.getElementById('root'));

// CSS Styles
const styles = `
  .gif-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .gif-item {
    width: 200px;
    margin: 10px;
  }
  .gif-item img {
    width: 100%;
    border-radius: 5px;
  }
  .gif-item p {
    text-align: center;
    margin-top: 5px;
  }
`;

// Apply CSS styles
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
