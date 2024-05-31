import React, { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setHasError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, hasError };
};

const useCounter = (initialState = 1) => {
  const [counter, setCounter] = useState(initialState);

  const increment = () => {
    setCounter(counter + 1);
  };

  return { counter, increment };
};

const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter();
  const { data, isLoading, hasError } = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`);

  return (
    <div>
      <h1>Breaking Bad Quotes</h1>
      <button onClick={increment}>Next Quote</button>
      {isLoading ? (
        <div>Loading...</div>
      ) : hasError ? (
        <div>Error: {hasError}</div>
      ) : (
        <blockquote>
          <p>{data[0].quote}</p>
          <footer>- {data[0].author}</footer>
        </blockquote>
      )}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <MultipleCustomHooks />
    </div>
  );
}

export default App;
