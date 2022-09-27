import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoadCountries></LoadCountries>
      </header>
    </div>
  );
}

function LoadCountries(){
  const [countries, setCountries] = useState([]);
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  },[])
  return(
    <div>
      <p>Total Country: {countries.length}</p>
      <h1>Vist New Countries!</h1>
      {
        countries.map(country => <p>{country.name.common}</p>)
      }
    </div>
  )
}

export default App;
