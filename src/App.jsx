import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { exercises, ENERGINIVA } from './exercise.js';
import { velgOkt } from './velgOkt.js';

console.log(exercises);
function App() {
  const [valgTid, setValgtTid] = useState(0);
  const [valgEnerginiva, setValgtEnerginiva] = useState();
  const [resultat, setResultat] = useState([]);
 
  function finnOkt  () {
    const nyOkt = velgOkt(valgTid, valgEnerginiva);
    setResultat(nyOkt);
    console.log("Nytt resultat:", nyOkt); // Log the new result to see the selected exercises 
  }


  return (
    <div>
      <p> Valgt tid: {valgTid}</p>
      <button onClick={() => setValgtTid(30)}>30 minutter</button>
      <button onClick={() => setValgtTid(60)}>60 minutter</button>
      <button onClick={() => setValgtTid(120)}>120 minutter</button>

      <p> Velg energinivå: {valgEnerginiva}</p>
      <button onClick={() => setValgtEnerginiva(ENERGINIVA.LAV)}>Lav</button>
      <button onClick={() => setValgtEnerginiva(ENERGINIVA.MIDDELS)}>Middels</button>
      <button onClick={() => setValgtEnerginiva(ENERGINIVA.HOY)}>Høy</button>
      <button onClick={finnOkt}>Finn økt</button>



    </div>
       
  );
}






export default App;
