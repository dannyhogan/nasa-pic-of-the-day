import React from 'react';
import Header from './components/Header/Header';
import PicOfTheDay from './containers/PicOfTheDay/PicOfTheDay';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <PicOfTheDay />
      <Footer />
    </div>
  );
}

export default App;
