import { useState } from 'react';

import './app.css';

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h1>Welcome to React + typescript App</h1>
      <div className="content">
        <div>Current count: {count}</div>
        <button onClick={() => setCount(count + 1)}>INCREMENT</button>
      </div>
    </div>
  );
};
