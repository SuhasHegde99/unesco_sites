import React from 'react';
import { Link, useParams } from 'react-router-dom';
import '../App.css';

const MediaPage = () => {
  const { category } = useParams();

  const categoryTitle = category === 'unesco' 
    ? 'Karnataka UNESCO World Heritage Sites' 
    : 'Proposed UNESCO Heritage Sites';

  const sites = category === 'unesco' 
    ? ['Banavasi', 'Mirjan', 'Balligave', 'Brahmagiri', 'Someshwara']
    : ['Hirebenakal', 'Lakkundi'];

  return (
    <div className="container">
      <div className="header">
        <h2>{categoryTitle} - Media Gallery</h2>
        <p>View photos and videos of these heritage sites</p>
      </div>

      <Link to={`/sites/${category}`} className="back-button">
        ← Back to Sites List
      </Link>

      <div className="media-page-container">
        <h2>Select Media Type</h2>
        
        <div className="media-options">
          <div className="media-option-card">
            <h3>📷 Photos</h3>
            <p>Browse through beautiful photographs of {categoryTitle.toLowerCase()}</p>
            <div style={{ marginTop: '20px', fontSize: '0.9rem', opacity: 0.8 }}>
              <p>Sites: {sites.join(', ')}</p>
            </div>
          </div>

          <div className="media-option-card">
            <h3>🎥 Videos</h3>
            <p>Watch informative videos about {categoryTitle.toLowerCase()}</p>
            <div style={{ marginTop: '20px', fontSize: '0.9rem', opacity: 0.8 }}>
              <p>Sites: {sites.join(', ')}</p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '40px', padding: '20px', background: '#f5f5f5', borderRadius: '10px' }}>
          <h3 style={{ color: '#667eea', marginBottom: '15px' }}>Media Gallery Features</h3>
          <p style={{ color: '#666', lineHeight: '1.8' }}>
            This section will display photos and videos for all sites in the {category === 'unesco' ? 'UNESCO World Heritage' : 'Proposed UNESCO Heritage'} category.
            You can explore visual content for each of the {sites.length} sites: {sites.join(', ')}.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MediaPage;

