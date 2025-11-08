import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const SiteList = () => {
  const { category } = useParams();
  const [sites, setSites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSites = async () => {
      try {
        const response = await axios.get(`/api/sites/${category}`);
        setSites(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching sites:', error);
        setLoading(false);
      }
    };

    fetchSites();
  }, [category]);

  const categoryTitle = category === 'unesco' 
    ? 'Karnataka UNESCO World Heritage Sites' 
    : 'Proposed UNESCO Heritage Sites';

  if (loading) {
    return (
      <div className="container">
        <div className="header">
          <h2>Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="header">
        <h2>{categoryTitle}</h2>
        <p>Click on a site to view details</p>
      </div>

      <Link to="/" className="back-button">← Back to Home</Link>

      <div className="media-buttons">
        <Link to={`/media/${category}`} className="media-button">
          📷 Photos
        </Link>
        <Link to={`/media/${category}`} className="media-button secondary">
          🎥 Videos
        </Link>
      </div>

      <div className="sites-grid">
        {sites.map((site) => (
          <Link
            key={site.id}
            to={`/sites/${category}/${site.id}`}
            className="site-card"
          >
            <h3>{site.name}</h3>
            <p>{site.location}</p>
            <p style={{ marginTop: '10px', fontSize: '0.85rem', color: '#999' }}>
              {site.category}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SiteList;

