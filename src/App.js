import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <main className="flex-1">
      <Body />
    </main>
    <Footer />
  </div>
);

export default App;
