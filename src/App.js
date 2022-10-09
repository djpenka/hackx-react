import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { API, Amplify } from 'aws-amplify';
import React, { useState } from 'react';

import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="App">
      <p>You clicked {count} times</p>
    </div>
  );
}

export default App;
