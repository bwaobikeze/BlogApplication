import React from 'react';
import BlogHomePage from './pages/BlogHomePage';
import ViewPost from './pages/ViewPost';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<BlogHomePage />} />
          <Route path="/post/:id" element={<ViewPost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
