import React from 'react';
import './index.css';
import Footer from './Componentes/Footer';
import Header from './Componentes/Header';


function App() {
  return (
  
      <div className="App bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text min-h-screen flex flex-col items-center">
      <Header />
  
   <h1>Welcome</h1>
   
       
        <Footer />
      </div>
  
  );
}

export default App;