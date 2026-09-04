import { exercises, ENERGINIVA, KATEGORI} from './exercise.js';

 export function velgOkt(valgtTid, valgtEnerginiva) {
    let riktigKategori;

    if (valgtTid === 120) {
        riktigKategori = KATEGORI.KONDISJON;
    } else {
        riktigKategori = KATEGORI.STYRKE;
    }
 

    const energiRangering = {
        lav: 0,
        middels: 1,
        hoy: 2
    };
   console.log("riktigKategori:", riktigKategori);   // Log the correct category based on the selected time
   console.log("valgtEnerginiva:", valgtEnerginiva); // Log the selected energy level
   console.log("alle øvelser:", exercises); // Log all exercises to see their categories and energy levels

    const aktuelleOvelser = exercises.filter(
        (ovelse) =>
            ovelse.kategori === riktigKategori &&
            energiRangering[ovelse.energiniva] <= energiRangering[valgtEnerginiva]
    );


    const stokkeOvelser = stokkListe(aktuelleOvelser);

    const valgteOvelser = [];
    let bruktTid = 0;

    for ( const ovelse of stokkeOvelser) {
        if (bruktTid + ovelse.tid <= valgtTid) {
            valgteOvelser.push(ovelse);
            bruktTid += ovelse.tid;
        }
    }



    
    return valgteOvelser;




    
}
 
  function stokkListe(liste) {
    const kopi = [...liste];
    for (let i = kopi.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [kopi[i], kopi[j]] = [kopi[j], kopi[i]];
    }
    return kopi;
  }



 console.log(velgOkt(60, ENERGINIVA.HOY)); // Test the function with a 60-minute session and high energy level