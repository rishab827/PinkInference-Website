import * as React from 'react';

function Plates() {
  return (
    <div style={{position: 'absolute', background: 'linear-gradient(to bottom, #FE5DA8, #FE5DA8)', top: 0, left: 0, width: '100%', height: '400%'}}>
        <div style={{position: 'absolute', top: '200px', left: '130px', width: '600px', height: '80px', color: '#FFFFFF', textAlign: 'left', fontSize: '15px'}}>
          <div style={{fontSize: '40px', fontWeight: 'bold', background: 'linear-gradient(to right, #FEFEFF, #DE9DB4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Tired of multi-month plate shipping time?</div>
          <div style={{fontSize: '12px', position: 'relative', top: '20px', left: '0px'}}>
          Based in the USA, our transparent supply chain works with you to make sure you always have the consumables you need.
          </div>
          <div style={{position: 'absolute', top: '210px', left: '70px', transform: 'translateX(-50%)'}}>
            <a href="https://www.example.com" style={{marginRight: '20px', color: 'black', textDecoration: 'none', backgroundColor: 'white', padding: '10px', borderRadius: '15px', fontWeight: 'bold'}}>Set Up a Call</a>
          </div>
        </div>

      <div style={{position: 'absolute', top: '500px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center'}}>
        <a href="https://www.example.com" style={{fontSize: '40px', color: '#FFFFFF', textDecoration: 'none', fontWeight: 'bold'}}>Single-well MEA Plates</a>
        <img src="platephoto.jpg" alt="MEA Plates" style={{display: 'block', marginTop: '10px', width: '400px', height: 'auto'}} />
      </div>

      <div style={{position: 'absolute', top: '1100px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center'}}>
        <a href="https://www.example.com" style={{fontSize: '40px', color: '#FFFFFF', textDecoration: 'none', fontWeight: 'bold'}}>Multi-well MEA Plates</a>
        <img src="platephoto.jpg" alt="MEA Plates" style={{display: 'block', marginTop: '10px', width: '400px', height: 'auto'}} />
      </div>
      </div>
  );
}

export default Plates;