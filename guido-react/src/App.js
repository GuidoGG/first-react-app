import logo from './logo.svg';
import './App.css';
import pic from './pic.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Guido's eerste poging met Github
        </p>
        <button>
          Hoi
          </button>

  <img src={pic} className="photoSmall" alt="pic" />
          <p> 
            Tekst na de knop
          </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;