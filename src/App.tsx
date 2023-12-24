import React from 'react';
import './App.css';
import { LeftSection } from './components/left-section.tsx';
import { RightSection } from './components/right-section.tsx';

function App() {
  return (
    <div className="container">
      <LeftSection/>
      <RightSection/>
    </div>
  );
}

export default App;
