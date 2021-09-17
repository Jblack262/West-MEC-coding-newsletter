import React from 'react';
import Review from './components/Review';
function App() {
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h2>West-Mec NEC</h2>
          <h2>Coding News Letter</h2>
          <div className='underline'></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;
