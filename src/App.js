import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { API, Amplify } from 'aws-amplify';
import React, { useEffect, useState } from 'react';

import BasicTable from './components/BasicTable';
import { Button } from '@mui/material';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

function App() {
  const apiName = 'students';
  const path = '/students'; 
  const [students, setStudents] = useState([]);
  const [doRefresh, setDoRefresh] = useState(false);

  useEffect(() => {
    API
      .get(apiName, path)
      .then(response => {
        setStudents(response);
        console.log("Did refresh")
      })
      .catch(error => {
        console.log(error.response);
    });
  }, [doRefresh])

  
  return (
    <div className="App">
      <BasicTable students={students}/>
      <Button variant="contained" id="refresh" onClick={() => setDoRefresh(!doRefresh)}>Refresh</Button>
    </div>
  );
}

export default App;
