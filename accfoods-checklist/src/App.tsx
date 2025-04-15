import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// component imports
import NavBar from './components/NavBar';
import CheckListPage from './components/CheckListPage';
import FQAPage from './components/FQAPage';

function App() {
  const [choiceTab, setChoiceTab] = useState<boolean>(true)

  return (
    <Router>
      <NavBar setChosenTabForAppFile={setChoiceTab}/>
      
      {choiceTab ? (<><CheckListPage /></>) : (<><FQAPage/></>)}
    </Router>
  );
}

export default App;
