import * as React from 'react';
function MainContent() {

  return (
    <div style={{
      backgroundColor: 'black',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 'calc(100vh + 10px)', // Extend the background down 10 pixels
      width: '100vw', // Fill the entire width of the page
      position: 'fixed', // Position fixed to prevent scrolling
      top: 0, // Align to the top of the page
      left: 0, // Align to the left of the page
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', top: '-150px'}}>
        <img src="meaphoto.jpg" alt="Mea Photo" style={{ width: '65%', height: 'auto', transform: 'rotate(90deg)', position: 'relative'}} />
        <div style={{ position: 'absolute', top: '65%', fontFamily: "sans-serif", fontSize: '65px', textAlign: 'center', color: 'white', padding: '20px', maxWidth: '60%'}}>
          <p>The <span style={{ color: '#FE5DA8' }}>MEA</span>ONSTER</p>
        </div>
        <div style={{ position: 'absolute', top: '74%', fontFamily: "sans-serif", fontSize: '30px', textAlign: 'center', color: 'white', padding: '20px', maxWidth: '60%'}}>
          <p style={{ color: 'grey' }}>The world's most accessible MEA</p>
        </div>
      </div>
      
      <a href="/support/" style={{ position: 'absolute', top: 15, right: 15, backgroundColor: '#49D4C6', color: 'black', padding: '12.5px', textDecoration: 'none', borderRadius: '12.5px', fontSize: '110%', width: '100px', textAlign: 'center' }}>Support</a>
    </div>
  )
}

export default MainContent;
