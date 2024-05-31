import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';

const navItems = ['DAQ', 'Software', 'Plates'];

function SimpleAppBar() {
  const location = useLocation();

  const isActivePage = (navItem) => {
    const currentPath = '/' + navItem.toLowerCase();
    return location.pathname === currentPath;
  };

  const buttonStyle = (navItem) => ({
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: '1rem',
    textTransform: 'none',
    backgroundColor: isActivePage(navItem) ? 'rgba(0, 0, 0, 0.8)' : 'transparent', // Solid color for active item
    borderRadius: '20px', // Adjusted for a less circular and more pill-like shape
    padding: '6px 16px',  // Padding to wrap text inside the button
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    margin: '0 8px',
  });
  return (
    <Box sx={{ 
      position: 'absolute',
      width: 'fit-content',  // Adjusted width to fit the content
      left: '50%',
      transform:'translate(-50%, 0)', // Adjusted for proper centering with dynamic width
      top: '100px',  // Assuming this is where it should be relative to another element
      zIndex: 1000,
    }}>
      <CssBaseline />
      <AppBar position="static" sx={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Translucent background color
        backdropFilter: 'blur(10px)',  // Applying blur effect for the translucent background
        padding: '0',
        boxShadow: 'none',
        borderRadius: '20px',  // Adjust the border radius to match the button style
      }}>
        <Toolbar disableGutters style={{ justifyContent: 'center' }}>
          {navItems.map((item) => (
            <Button key={item} sx={buttonStyle(item)}>
              <Link to={`/${item.toLowerCase()}`} style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {item}
              </Link>
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default SimpleAppBar;