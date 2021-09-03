import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [count, setcount] = useState(0);
  //useEffect contain 2 parameters 
  //1st parameter function
  //2nd parameter dependencies
  useEffect(() => {
    console.log('Update',count,'times');
  }, [count]);
  return (
    <div>
      <h1>Using useEffect Hook call after return Statement executes</h1>
      <h2>Update: {count} times</h2>
      <button onClick={() => setcount(count + 1)}>Update</button>
    </div>
  );
}
