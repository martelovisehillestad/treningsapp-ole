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
   console.log("riktigKategori:", riktigKategori);
   console.log("valgtEnerginiva:", valgtEnerginiva);
   console.log("alle øvelser:", exercises);

    const aktuelleOvelser = exercises.filter(
        (ovelse) =>
            ovelse.kategori === riktigKategori &&
            energiRangering[ovelse.energiniva] <= energiRangering[valgtEnerginiva]
    );

    const stokkeOvelser = stokkListe(aktuelleOvelser);
    return stokkeOvelser;
}
 
  function stokkListe(liste) {
    const kopi = [...liste];
    for (let i = kopi.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [kopi[i], kopi[j]] = [kopi[j], kopi[i]];
    }
    return kopi;
  }

 console.log(velgOkt(60, ENERGINIVA.HOY));