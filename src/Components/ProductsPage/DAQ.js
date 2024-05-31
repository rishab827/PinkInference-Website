import React, { useState } from 'react';
import Dropdown from './Dropdown';

function DAQ() {

  
  return (
    <div style={{position: 'absolute', background: 'black', top: 0, left: 0, width: '100%', height: '510%'}}>
      <div style={{position: 'absolute', width: '1380px', height: '121px', left: '50px', top: '232px', fontFamily: 'Sansation', fontStyle: 'normal', fontWeight: '700', fontSize: '87.1995px', lineHeight: '98px', textAlign: 'center', color: '#FFFFFF'}}>Introducing the MEAk</div>
      <div style={{position: 'absolute', width: '859.96px', height: '105px', left: '300px', top: '353px', fontFamily: 'Sansation Light', fontStyle: 'normal', fontWeight: '300', fontSize: '31.1423px', lineHeight: '35px', textAlign: 'center', color: '#FFFFFF'}}>
        Meet the most accessible MEA on the market. The MEAk has 60-512 electrode options, multiwall, and electrical stimulation options. All at 20% the price of competitors
      </div>

      
      <img src="pinkaura.jpg" alt="Descriptive text for the image" class="glow" style={{position: 'absolute', top: '530px', left: '49%', transform: 'translateX(-50%)', maxWidth: '45%', height: 'auto'}} />
      <img src="meaphoto.jpg" alt="Descriptive text for the image" class="glow" style={{position: 'absolute', top: '300px', left: '47%', transform: 'translateX(-50%)', maxWidth: '80%', height: 'auto'}} />

      
      <div style={{position: 'absolute', top: '650px', left: '80px', width: '300px', height: '400px', overflow: 'auto', color: '#FFFFFF', textAlign: 'left', fontSize: '15px'}}>
      <img src="footprint.jpg" alt="Descriptive text for the image" class="glow" style={{position: 'absolute', top: '10px', left: '15%', transform: 'translateX(-50%)', maxWidth: '30%', height: 'auto'}} />
        <div style={{fontSize: '24px', fontWeight: 'bold', marginTop: '100px'}}>Small Footprint</div>
        The MEAk was designed to fit under microscopes, in incubators, and on small shelves. Its small footprint will allow you to perform your experiments while having little impendence on the rest of the lab!
      </div>

      <div style={{position: 'absolute', top: '1050px', left: '80px', width: '300px', height: '400px', overflow: 'auto', color: '#FFFFFF', textAlign: 'left', fontSize: '15px'}}>
        <img src="footprint.jpg" alt="Descriptive text for the image" class="glow" style={{position: 'absolute', top: '10px', left: '15%', transform: 'translateX(-50%)', maxWidth: '30%', height: 'auto'}} />
        <div style={{fontSize: '24px', fontWeight: 'bold', marginTop: '100px'}}>Small Footprint</div>
        The MEAk was designed to fit under microscopes, in incubators, and on small shelves. Its small footprint will allow you to perform your experiments while having little impendence on the rest of the lab!
      </div>

      <div style={{position: 'absolute', top: '650px', right: '80px', width: '300px', height: '400px', overflow: 'auto', color: '#FFFFFF', textAlign: 'left', fontSize: '15px'}}>
      <img src="footprint.jpg" alt="Descriptive text for the image" class="glow" style={{position: 'absolute', top: '10px', left: '15%', transform: 'translateX(-50%)', maxWidth: '30%', height: 'auto'}} />
        <div style={{fontSize: '24px', fontWeight: 'bold', marginTop: '100px'}}>Small Footprint</div>
        The MEAk was designed to fit under microscopes, in incubators, and on small shelves. Its small footprint will allow you to perform your experiments while having little impendence on the rest of the lab!
      </div>

      <div style={{position: 'absolute', top: '1050px', right: '80px', width: '300px', height: '400px', overflow: 'auto', color: '#FFFFFF', textAlign: 'left', fontSize: '15px'}}>
      <img src="footprint.jpg" alt="Descriptive text for the image" class="glow" style={{position: 'absolute', top: '10px', left: '15%', transform: 'translateX(-50%)', maxWidth: '30%', height: 'auto'}} />
        <div style={{fontSize: '24px', fontWeight: 'bold', marginTop: '100px'}}>Small Footprint</div>
        The MEAk was designed to fit under microscopes, in incubators, and on small shelves. Its small footprint will allow you to perform your experiments while having little impendence on the rest of the lab!
      </div>


      <div style={{ position: 'absolute', top: '1500px', left: '550px' }}> {/* Adjust `top` value accordingly */}
        <img src="dolla.jpg" alt="Descriptive text for the image" class="glow" style={{position: 'absolute', top: '0px', left: '-390px', maxWidth: '35%', height: 'auto'}} />
        <div style={{position: 'absolute', top: '0px', left: '-350px', color: '#FE5DA8', fontSize: '24px', fontFamily: "'Roboto Mono', monospace"}}>Pricing</div>
        <Dropdown
          title="Leasing"
          content="For researchers with small budgets, short projects, and high aspirations"
          style={{ marginBottom: '30px' }} // Adjust space below this Dropdown
        />
        
        <Dropdown
          title="Purchase"
          content="For fully-fledged electrophysiologists looking to level-up their labs."
          style={{ marginBottom: '30px' }} // Adjust space below this Dropdown
        />
      </div>

      <div style={{position: 'relative', top: '1675px', left: '12%', width: '75%', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.8)'}}></div>

      <div style={{ position: 'absolute', top: '1725px', left: '550px' }}> {/* Adjust `top` value accordingly */}
        <img src="dolla.jpg" alt="Descriptive text for the image" class="glow" style={{position: 'absolute', top: '0px', left: '-390px', maxWidth: '15%', height: 'auto'}} />
        <div style={{position: 'absolute', top: '0px', left: '-350px', color: '#FE5DA8', fontSize: '24px', fontFamily: "'Roboto Mono', monospace"}}>Technical</div>
        <Dropdown
          title="Dimensions & Weight"
          content="Ultra-light weight & small footprint. Designed to fit easily in culture incubators"
          style={{ marginBottom: '30px' }} // Adjust space below this Dropdown
        />
        
        <Dropdown
          title="Power Draw"
          content="Light power draw for long-term experiments"
          style={{ marginBottom: '30px' }} // Adjust space below this Dropdown
        />

        <Dropdown
          title="Electrode Specs"
          content="Variable diameter and pitch options"
          style={{ marginBottom: '30px' }} // Adjust space below this Dropdown
        />
        
        {/* Second dropdown with more space below */}
        <Dropdown
          title="Counts & Capabilities"
          content="60 - 512 channel count options"
          style={{ marginBottom: '30px' }} // Adjust space below this Dropdown
        />

        <Dropdown
          title="Sampling Speed"
          content="Fast enough for most neural and cardio experiments"
          style={{ marginBottom: '30px' }} // Adjust space below this Dropdown
        />
      </div>

      <div style={{position: 'absolute', top: '2125px', left: '12%', width: '75%', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.8)'}}></div>
      
      <div style={{ position: 'absolute', top: '2175px', left: '550px' }}> {/* Adjust `top` value accordingly */}
        <img src="dolla.jpg" alt="Descriptive text for the image" class="glow" style={{position: 'absolute', top: '0px', left: '-390px', maxWidth: '10%', height: 'auto'}} />
        <div style={{position: 'absolute', top: '0px', left: '-350px', color: '#FE5DA8', fontSize: '24px', fontFamily: "'Roboto Mono', monospace"}}>Features</div>
        <Dropdown
          title="Open-source Compatible"
          content="For researchers with small budgets, short projects, and high aspirations"
          style={{ marginBottom: '30px' }} // Adjust space below this Dropdown
        />
        
        {/* Second dropdown with more space below */}
        <Dropdown
          title="Local Field Potential Viewing"
          content="For fully-fledged electrophysiologists looking to level-up their labs."
          style={{ marginBottom: '30px' }} // Adjust space below this Dropdown
        />
      </div>

      <div style={{position: 'absolute', top: '2350px', left: '12%', width: '75%', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.8)'}}></div>

      <div style={{ position: 'absolute', top: '2400px', left: '550px' }}> {/* Adjust `top` value accordingly */}
        <img src="dolla.jpg" alt="Descriptive text for the image" class="glow" style={{position: 'absolute', top: '3px', left: '-390px', maxWidth: '30%', height: 'auto'}} />
        <div style={{position: 'absolute', top: '0px', left: '-350px', color: '#FE5DA8', fontSize: '24px', fontFamily: "'Roboto Mono', monospace"}}>Components</div>
        <Dropdown
          title="Leasing"
          content="For researchers with small budgets, short projects, and high aspirations"
          style={{ marginBottom: '30px' }} // Adjust space below this Dropdown
        />
        
        {/* Second dropdown with more space below */}
        <Dropdown
          title="Purchase"
          content="For fully-fledged electrophysiologists looking to level-up their labs."
          style={{ marginBottom: '30px' }} // Adjust space below this Dropdown
        />
      </div>

      <div style={{position: 'absolute', top: '3200px', left: 0, width: '100%', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.2)'}}></div>

      <div style={{position: 'absolute', top: '3250px', left: '30px', width: '600px', height: '80px', color: 'rgba(255, 255, 255, 0.5)', textAlign: 'left', fontSize: '15px'}}>
        <div style={{fontSize: '25px',  fontFamily: "'Roboto Mono', monospace"}}>Stay connected and informed about the latest from Pink Inference</div>
        <a href="https://example.com" style={{fontSize: '14px', fontFamily: "'Roboto Mono', monospace", position: 'relative', top: '30px', left: '10px', color: 'rgba(255, 255, 255, 0.5)', backgroundColor: 'rgba(0, 0, 0, 0.5)', border: '2px solid rgba(255, 255, 255, 0.5)', borderRadius: '50px', padding: '10px', textDecoration: 'none'}}>Sign Up For Updates</a>
      </div>

    </div>
  );
}

export default DAQ;
