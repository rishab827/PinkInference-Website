import React, { useState } from 'react';

const Dropdown = ({ title, content, style }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const containerStyle = { // I noticed containerStyle isn't being used. If you intend to use it, then apply it to the outermost <div>.
    width: '600px',
    ...style,
  };

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '20px',
    fontFamily: "'Roboto Mono', monospace",
  };

  // Since we are aligning the arrow on the left, we don't need this title style anymore
  // const titleStyle = {}; 

  const arrowStyle = {
    transform: isDropdownVisible ? 'rotate(180deg)' : 'rotate(0)',
    transition: 'transform 0.3s',
    marginRight: '10px', // Optional: set a margin if you want some space between the arrow and the title
  };

  const contentStyle = {
    transition: 'max-height 0.5s ease, opacity 0.3s',
    width: '600px',
    maxHeight: isDropdownVisible ? '100%' : '0',
    overflow: 'hidden',
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: '15px',
    opacity: isDropdownVisible ? 1 : 0,
  };

  return (
    <div style={{ marginBottom: '50px', position: 'relative' }}>
      {/* The arrow should come before the title for it to be on the left */}
      <div onClick={toggleDropdown} style={headerStyle}>
        <span style={arrowStyle}>
          {isDropdownVisible ? '▲' : '▼'}
        </span>
        <span>{title}</span>
      </div>
      <div style={{ ...contentStyle, position: 'absolute', top: '100%', left: 0, whiteSpace: 'normal' }}>
        {isDropdownVisible && content}
      </div>
    </div>
  );
};

export default Dropdown;