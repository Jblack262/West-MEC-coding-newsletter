import React from 'react';
import Review from './components/Review';

import Navbar from './components/Navbar'
function App() {
  return (
    <main className="app">
      <Navbar />
      <div className="container">
        <Review />
      </div>
    </main>
  );
}

export default App;
