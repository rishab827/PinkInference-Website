import * as React from 'react';
import ReactPlayer from 'react-player';

function Software() {
  // Initialize state to hold the current video URL
  const [currentVideoUrl, setCurrentVideoUrl] = React.useState('http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4');

  // List of video URLs
  const videoUrls = [
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
  ];

  // Generate style for button based on whether it is active
  const getButtonStyle = (url) => ({
    backgroundColor: currentVideoUrl === url ? '#FFFFFF' : 'transparent', // Highlight active button with white background
    color: currentVideoUrl === url ? 'black' : 'white',
    border: currentVideoUrl === url ? '1px solid white' : '1px solid transparent',
    borderRadius: '50%', // Circular buttons
    padding: '10px',
    marginLeft: '5px',
    cursor: 'pointer',
    outline: 'none',
    transition: 'background-color 0.3s ease-in-out',
  });

  return (
    <div> 
      {/* Existing content */}
      <div style={{position: 'absolute', background: 'linear-gradient(to bottom, #001AAB, #101426)', top: 0, left: 0, width: '100%', height: '400%'}}>
        <div style={{position: 'absolute', top: '200px', left: '130px', width: '600px', height: '80px', color: '#FFFFFF', textAlign: 'left', fontSize: '15px'}}>
          <div style={{fontSize: '40px', fontWeight: 'bold', background: 'linear-gradient(to right, #EAECF8, #9DAADE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Open-Source, Powerful Electrophysiology Software</div>
          <div style={{fontSize: '12px', position: 'relative', top: '20px', left: '0px'}}>
            Compatible with all your favorite electrophysiology software & more! Easy exportation & connection.
          </div>
          <div style={{position: 'absolute', top: '190px', left: '130px', transform: 'translateX(-50%)'}}>
            <a href="https://www.example.com" style={{marginRight: '20px', color: '#FFFFFF', textDecoration: 'none', backgroundColor: 'black', padding: '10px', borderRadius: '15px'}}>See Our Docs</a>
            <a href="https://www.example.com" style={{color: '#FFFFFF', textDecoration: 'none', backgroundColor: 'black', padding: '10px', borderRadius: '15px'}}>Software Support</a>
          </div>
        </div>
      </div>

      {/* Video Player */}
      <div style={{position: 'absolute', width: '100%', paddingTop: '56.25%', marginTop: '600px', left: '100px'}}>
        <ReactPlayer
          url={currentVideoUrl}
          playing
          controls
          style={{position: 'absolute', top: '0', left: '0'}}
          width='80%'
          height='80%'
        />
      </div>
      <div style={{position: 'absolute', display: 'flex', justifyContent: 'center', backgroundColor: '#000000', padding: '10px', alignItems: 'center', marginTop: '500px', right: '100px', borderRadius: '50px', width: 'fit-content'}}>
        {videoUrls.map((url, index) => {
          return (
            <button
              key={`video-btn-${index}`}
              style={getButtonStyle(url)}
              onClick={() => setCurrentVideoUrl(url)}
            >
              {`Button ${index + 1}`}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Software;