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
  const [steg, setSteg] = useState("energi");

  function finnOkt  () {
    const nyOkt = velgOkt(valgTid, valgEnerginiva);
    setResultat(nyOkt);
    console.log("Nytt resultat:", nyOkt); // Log the new result to see the selected exercises 
  }


  return (

<div>
    {steg === "energi" && (
      <div>
        <p>Hvordan føles energinivået i dag?</p>
        <button className="knapp-lav" onClick={() => { setValgtEnerginiva(ENERGINIVA.LAV); setSteg("tid"); }}>
        😣 Lav
        </button>
        <button className="knapp-middels" onClick={() => { setValgtEnerginiva(ENERGINIVA.MIDDELS); setSteg("tid"); }}>
        😐 Middels
        </button>
        <button className="knapp-hoy" onClick={() => { setValgtEnerginiva(ENERGINIVA.HOY); setSteg("tid"); }}>
        😊💪 Høy
        </button>

      </div>
    )}

    {steg === "tid" && (
      <div>
        <p>Hvor lang tid har du til å trene?</p>
        <button className="knapp-30" onClick={() => {setValgtTid(30); setSteg("resultat"); }}>30 minutter</button>

        <button className="knapp-60" onClick={() => {setValgtTid(60); setSteg("resultat"); }}>60 minutter</button>

        <button className="knapp-120" onClick={() => {setValgtTid(120); setSteg("resultat"); }}>120 minutter</button>
      </div>
    )}
      {steg === "resultat" && (

      <div>
        <button className="knapp-resultat" onClick={finnOkt}>Dagens økt</button>
        <ul>
          {resultat.map((ovelse) => (
            <li key={ovelse.id}>{ovelse.navn} - {ovelse.tid} min </li>
          ))}
        </ul>
      </div>
    )
      }


    



  
     

      <ul>
        {resultat.map((ovelse) => (
          <li key={ovelse.id}>{ovelse.navn} - {ovelse.tid} min </li>
        ))}
      </ul>


    </div>
       
  );
}






export default App;
