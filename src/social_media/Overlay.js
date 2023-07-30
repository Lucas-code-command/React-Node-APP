import React from 'react';
import '/Users/lukemoliterno/Documents/GitHub/React-Node-APP/src/social_media/css/Overlay.css'

const Overlay_ = ({ onClose }) => {
  return (
    <div className="overlay">
      <div className="overlay-content">
        {/* Add your content for the overlay here */}
        <h2>This is an overlay</h2>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Overlay_;
