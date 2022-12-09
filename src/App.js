import Card from '@mui/material/Card';
import './App.css';

function App() {
  return (
    <div className="App">
        <Card className='qr-card'>
          <img className='qr-image' src="image-qr-code.png" alt='qr-code'/>
          <h1 className="qr-title">
            Improve your front-end skills by building projects.
          </h1>
          <h1 className="qr-description">  
            Scan the QR code to visit frontend mentor and take your coding skills to the next level.
          </h1>
      </Card>
    </div>
  );
}

export default App;
