import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Profilo  from './components/profilo/Profilo';
import Resume from './components/resume/Resume';




function App() {
  return (
    <>
      <Sidebar />
      <main className='main'>
          <Home />
          <About />
          <Services />
          <Resume />
          <Profilo />
      </main>
    </>
  );
}

export default App;
