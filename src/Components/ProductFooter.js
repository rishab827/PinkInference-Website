import React from 'react';
import { Link } from 'react-router-dom';

const ProductFooter = () => {
  // Define the base style for links to avoid repeating code
  const linkStyle = {
    marginRight: '15px', // Spacing between links
    textDecoration: 'none',
    color: 'white',
    fontFamily: "'Roboto Mono', monospace", // Apply Roboto Mono font
    fontSize: '16px',
    lineHeight: '50px' // Align text vertically within the 50px height
  };

  return (
    <footer style={{
      position: 'fixed',
      left: 0,
      bottom: 0,
      width: '100%',
      backgroundColor: 'black',
      borderTop: '1px solid grey',
      zIndex: 10,
      height: '50px', // Footer height set to 50px
      paddingLeft: '15px', // 15 pixels padding on the left
      paddingRight: '15px' // 15 pixels padding on the right
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        maxWidth: 'calc(100% - 30px)' // Adjust the width to factor in the padding
      }}>
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', height: '75%' }}>
          <img src="PinkInferenceAndLogo.jpg" alt="PinkInference Logo" style={{ maxHeight: '100%' }} />
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <Link to="/daq/" style={{ ...linkStyle, marginRight: '40px' }}>product</Link>
          <Link to="https://example.com" style={{ ...linkStyle, marginRight: '40px' }}>docs</Link>
          <Link to="/mission/" style={{ ...linkStyle }}>mission</Link>
        </div>
      </div>
    </footer>
  );
}

export default ProductFooter;