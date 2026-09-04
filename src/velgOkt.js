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

    return aktuelleOvelser;

} console.log(velgOkt(60, ENERGINIVA.LAV));