import './App.css';

import { API, Amplify } from 'aws-amplify';
import React, { useState } from 'react';

import awsconfig from './aws-exports';
import logo from './logo.svg';

Amplify.configure(awsconfig);

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="App">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default App;
