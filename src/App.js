import React from 'react';
import Timeline from './Timeline';
import ThemeSwitch from './ThemeSwitch';
import './index.css';
import Header from './Header';


function App() {
  return (
    <div className="App bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text min-h-screen flex flex-col items-center">
      <header className="App-header p-4 w-full">
      
        <div className="flex justify-between items-center w-full max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-center w-full p-8">Mi Timeline</h1>
          <ThemeSwitch />
         
        </div>
        <Header />
        <Timeline />
      </header>
    </div>
  );
}

export default App;

