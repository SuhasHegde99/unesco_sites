import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SiteList from './components/SiteList';
import SiteDetail from './components/SiteDetail';
import MediaPage from './components/MediaPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sites/:category" element={<SiteList />} />
          <Route path="/sites/:category/:id" element={<SiteDetail />} />
          <Route path="/media/:category" element={<MediaPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

