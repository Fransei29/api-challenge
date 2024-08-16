"use client";

import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Home() { 
  const [data, setData] = useState(null);               // State to store the API data  
  const [error, setError] = useState(null);             // State to store any error messages
  const [cursor, setCursor] = useState(null);           // State to store the current cursor
  const [isComplete, setIsComplete] = useState(false);  // State to check if the final message has been reached

  const fetchData = async (cursor) => {                 // Function to fetch data from the API
    try {
      const response = await axios.post('/api/challenge', cursor ? { cursor } : {}); // Make a POST request to the API with the cursor if available
      setData(response.data);

      
      if (response.data.nextCursor) {                  // Check if there is a next cursor to continue the requests
        setCursor(response.data.nextCursor);           // Update the cursor for the next request
      } else {
        setIsComplete(true);                           // Mark as complete if there are no more cursors
      }
    } catch (err) {
      console.error('Error fetching data:', err.message);
      setError('Error fetching data');
    }
  };

  useEffect(() => {                                    // useEffect hook to handle automatic fetching
    if (!isComplete && cursor !== null) {
      const timer = setTimeout(() => {                 // Timer to add a pause between requests (Now is 0.5s)
        fetchData(cursor);
      }, 500);
      return () => clearTimeout(timer);                // Clear the timer on unmount or cursor change
    }
  }, [cursor, isComplete]);

  return (
    <div className='container'>
      <h1>Data from API</h1>
      {error && <div>{error}</div>}
      {data ? (                                        /* Display the API data if available, or show a button to initiate the data fetching process */
        <div>
          <pre>{JSON.stringify(data, null, 2)}</pre>
          {isComplete && <p className="final-message">You have reached the final message!</p>}
        </div>
      ) : (
        <button onClick={() => fetchData(null)}>Start</button>  // Button to initiate the first API call
      )}
    </div>
  );
}
