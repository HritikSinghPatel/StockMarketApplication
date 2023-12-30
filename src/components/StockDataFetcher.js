// StockDataFetcher.js

import React, { useState, useEffect } from 'react';

const StockDataFetcher = () => {
  const [symbol, setSymbol] = useState('');
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSymbolChange = (event) => {
    console.log(event.target.value);
    setSymbol(event.target.value);    
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://api.iex.cloud/v1/data/CORE/IEX_DEEP/${symbol}?token=pk_85f727a2802d4a7d9de64485baeb569b`);
      // https://api.iex.cloud/v1/data/CORE/VOLUME_BY_VENUE/
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (symbol) {
      fetchData();
    }
  }, [symbol]);

  return (
    <div>
      <label>
        Enter Symbol:
        <input type="text" value={symbol} onChange={handleSymbolChange} />
      </label>
      <button onClick={fetchData}>Fetch Data</button>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <h1>Data for Symbol: {symbol}</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )} 
    </div>
  );
};

export default StockDataFetcher;
