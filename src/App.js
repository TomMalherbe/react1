import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Course 411</h1>
        <img src="carte.png" className="App-logo" alt="logo" />
        <p>
          My first React App
        </p>
        <button className="Bouton" /*onClick=        
        {document.getElementsByClassName('App-logo')[0].src='carte.png'} 
      */
      >ChangerLogo</button>
        
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
