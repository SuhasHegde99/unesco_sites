import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const SiteDetail = () => {
  const { category, id } = useParams();
  const [site, setSite] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSite = async () => {
      try {
        const response = await axios.get(`/api/sites/${category}/${id}`);
        setSite(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching site:', error);
        setLoading(false);
      }
    };

    fetchSite();
  }, [category, id]);

  if (loading) {
    return (
      <div className="container">
        <div className="header">
          <h2>Loading...</h2>
        </div>
      </div>
    );
  }

  if (!site) {
    return (
      <div className="container">
        <div className="header">
          <h2>Site not found</h2>
          <Link to="/" className="back-button">← Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <Link to={`/sites/${category}`} className="back-button">
        ← Back to {category === 'unesco' ? 'UNESCO Sites' : 'Proposed Sites'}
      </Link>

      <div className="detail-container">
        <h2>{site.name}</h2>
        <h3>{site.location}</h3>
        <p>{site.description}</p>
        
        <div style={{ marginTop: '30px' }}>
          <a
            href={site.wikipedia}
            target="_blank"
            rel="noopener noreferrer"
            className="wiki-link"
          >
            📖 Read more on Wikipedia →
          </a>
        </div>
      </div>
    </div>
  );
};

export default SiteDetail;

