import React from 'react';
import Review from './Pages/Review';
import Blog from './Pages/Blog';
import {
  Switch,
  Route
} from "react-router-dom";

import Navbar from './components/Navbar'
function App() {
  return (
    <main className="app">
      <Navbar />

      <div className="container">
        <Switch>
          <Route path="/" exact component={() => <Review />} />
          <Route path="/blog" exact component={() => <Blog />} />
        </Switch>
      </div>
    </main>
  );
}

export default App;
