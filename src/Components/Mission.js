import * as React from 'react';

function Mission() {
  return (
    <>
      <div className="background page-three" style={{position: 'absolute', top: '0%', left: 0, width: '100%', height: '150%', backgroundImage: 'url("pic5.jpg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <div style={{ position: 'absolute', top: '3%', left: '0%', fontFamily: "'Syncopate', sans-serif", fontSize: '65px', textAlign: 'left', color: 'white', padding: '20px', maxWidth: '60%', fontWeight: 'bold' }}>
          <p>Make ephys research accessible for every experimenter in the world</p>
        </div>
        <div style={{ position: 'absolute', top: '5%', left: '0%', fontFamily: "'Syncopate', sans-serif", fontSize: '20px', textAlign: 'left', color: 'white', padding: '20px', maxWidth: '60%' }}>
          <p>Our Mission</p>
        </div>
      </div>
      <div className="background" style={{position: 'absolute', top: '708px', left: 0, width: '100%', height: '250%', backgroundColor: 'black'}}>
        <div style={{ position: 'absolute', top: '5%', right: '5%', fontFamily: "'Syncopate', sans-serif", fontSize: '30px', textAlign: 'left', color: 'white', padding: '20px', maxWidth: '60%' , fontWeight: 'bold', lineHeight: '1.8' }}>
            We are believe the magnitude of experimental biology research directly enhances its contributions. Our mission is to obliterate the barriers confronting electrophysiologists investigating network-level behavior, empowering them to advance their work rapidly, efficiently, and with an element of enjoyment. By supplying user-friendly, economical equipment and cultivating a dynamic community of researchers dedicated to the collective aim of unearthing cures for humanity's gravest illnesses, we are not merely facilitating scientific exploration but propelling the journey towards monumental medical discoveries.
        </div>
      </div>
    </>
  );
}
export default Mission;
