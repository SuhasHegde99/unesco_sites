import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>🏛️ Karnataka Heritage Sites</h1>
        <p>Explore UNESCO World Heritage Sites and Proposed Heritage Sites</p>
      </div>

      <div className="options-container">
        <Link to="/sites/unesco" className="option-card">
          <h2>Karnataka UNESCO World Heritage Sites</h2>
          <p>Discover 5 pre-historic places of historical significance</p>
          <a 
            href="https://en.wikipedia.org/wiki/List_of_World_Heritage_Sites_in_India" 
            target="_blank" 
            rel="noopener noreferrer"
            className="wiki-link"
            onClick={(e) => e.stopPropagation()}
          >
            📖 Wikipedia
          </a>
        </Link>

        <Link to="/sites/proposed" className="option-card">
          <h2>Proposed UNESCO Heritage Sites</h2>
          <p>Explore 2 sites proposed for UNESCO World Heritage status</p>
          <a 
            href="https://en.wikipedia.org/wiki/Tentative_list_of_World_Heritage_Sites_in_India" 
            target="_blank" 
            rel="noopener noreferrer"
            className="wiki-link"
            onClick={(e) => e.stopPropagation()}
          >
            📖 Wikipedia
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Home;

