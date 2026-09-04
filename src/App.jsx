import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { exercises, ENERGINIVA } from './exercise.js';
import { velgOkt } from './velgOkt.js';
import { useState, useEffect } from 'react'


console.log(exercises);
function App() {
  const [valgTid, setValgtTid] = useState(0);
  const [valgEnerginiva, setValgtEnerginiva] = useState();
  const [resultat, setResultat] = useState([]);
  const [steg, setSteg] = useState("energi");
  const [apenOvelse, setApenOvelse] = useState(null);
  const [animasjonsIndeks, setAnimasjonsIndeks] = useState(0);
  const ikoner = ["🚶", "🚴", "🏋️"];


  function finnOkt  () {
    const nyOkt = velgOkt(valgTid, valgEnerginiva);
    setResultat(nyOkt);
    console.log("Nytt resultat:", nyOkt); // Log the new result to see the selected exercises 
  }


   useEffect(() => {
    if( steg === "genererer") {
      const inervalId = setInterval(() => {
        setAnimasjonsIndeks((forrige) => (forrige + 1) % ikoner.length);
      }, 400);

      const timeoutId = setTimeout(() => {
        finnOkt();
        setSteg("resultat");
      }, 3000);

      return () => {
        clearInterval(inervalId);
        clearTimeout(timeoutId);
      };
    }
  }, [steg]);


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
        <button className="knapp-30" onClick={() => { setValgtTid(30); setSteg("genererer"); }}>30 minutter</button>

        <button className="knapp-60" onClick={() => {setValgtTid(60); setSteg("genererer"); }}>60 minutter</button>

        <button className="knapp-120" onClick={() => {setValgtTid(120); setSteg("genererer"); }}>120 minutter</button>
      </div>
    )}
      {steg === "resultat" && (

      <div>
        <button className="knapp-resultat" onClick={finnOkt}>Dagens økt</button>
        <ul>
        {resultat.map((ovelse) => (
        <li
        key={ovelse.id}
         onClick={() => setApenOvelse(apenOvelse === ovelse.id ? null : ovelse.id)}>
         <span>{ovelse.navn}</span>
          {apenOvelse === ovelse.id && <p>{ovelse.detaljer}</p>}
          </li>
        
      ))}
       
        </ul>
      </div>
    )
  }
    {steg === "genererer" && (
      <div>
        <p>Genererer dagens treningsøkt... {ikoner[animasjonsIndeks]}</p>
      </div>
    )
  }

      

  

    </div>
       
  );
}






export default App;
