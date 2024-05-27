"use client"
import React, { useState, useEffect } from 'react';

interface Data {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Reviews: React.FC = () => {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [result, setResult] = useState<number>(0);
  const [n1, setN1] = useState<number>(0);
  const [n2, setN2] = useState<number>(0);

  useEffect(() => {
    // Fetch data from an API when the component mounts
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then((data: Data) => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  const addNumbers = () => {
    const result = n1+n2;
    setResult(result);
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className='text-black'>
        <input type='number' onChange={(e) => setN1(parseInt(e.target.value))} />
        <input type='number' onChange={(e) => setN2(parseInt(e.target.value))} />
        <button onClick={addNumbers} className='p-4 bg-white text-black'>Add</button>
        <label className='text-white'>Result: {result}</label>
      </div>
      <div>
        <h1>Data from API:</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Reviews;