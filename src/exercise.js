export const ENERGINIVA = {

    LAV: "lav",
    MIDDELS: "middels",
    HOY: "hoy",
};

export const KATEGORI = {
    STYRKE: "Styrke",
    KONDISJON: "Kondisjon",
    RESTITUSJON: "Restitusjon",
};

    export const exercises = [
        {
            id : "benkpress",
            navn : "Benkpress",
            kategori : KATEGORI.STYRKE,
            energiniva : ENERGINIVA.MIDDELS,
            tid : 12 ,
            detaljer : " 3 sett x 8 reps" 
        },
        {
            id : "utfall",
            navn : "Utfall",
            kategori : KATEGORI.STYRKE,
            energiniva : ENERGINIVA.HOY,
            tid : 20 ,
            detaljer : " 3 sett x 10 reps på hvert ben"
        },

        {
            id : "bicepscurl",
            navn : "Bicepscurl",
            kategori : KATEGORI.STYRKE,
            energiniva : ENERGINIVA.LAV,
            tid : 10 ,
            detaljer : " 3 sett x 12 reps"
        },

        {
            id : "skulderhev",
            navn : "Skulderhev",
            kategori : KATEGORI.STYRKE,
            energiniva : ENERGINIVA.LAV,
            tid : 7 ,
            detaljer : " 4 sett x 10 reps"
        },

        {
            id : "markløft",
            navn : "Markløft",
            kategori : KATEGORI.STYRKE,
            energiniva : ENERGINIVA.MIDDELS,
            tid : 15 ,
            detaljer : " 3 sett x 8 reps"
        },

        {
            id : "roing",
            navn : "Roing",
            kategori : KATEGORI.STYRKE,
            energiniva : ENERGINIVA.MIDDELS,
            tid : 20 ,
            detaljer : " 3 sett x 10 reps"
        },

        {
            id : "situps",
            navn : "Situps",
            kategori : KATEGORI.STYRKE,
            energiniva : ENERGINIVA.LAV,
            tid : 7 ,
            detaljer : " 3 sett x 15 reps"
        },

        {
            id : "hundetur",
            navn : "Hundetur",
            kategori : KATEGORI.KONDISJON,
            energiniva : ENERGINIVA.LAV,
            tid : 60 ,
            detaljer : " Gå tur med King"
        },

        {
            id : "landeveissykling",
            navn : "Landeveissykling",
            kategori : KATEGORI.KONDISJON,
            energiniva : ENERGINIVA.MIDDELS,
            tid : 60 ,
            detaljer : " Sykle på landevei, minst 20 km"
            
        },
    
        {
            id : "sykkelhund",
            navn : "Sykkel med hund",
            kategori : KATEGORI.RESTITUSJON,
            energiniva : ENERGINIVA.LAV,    
            tid : 60 ,
            detaljer : " Sykle med King"
        },

        {
            id : "skitur",
            navn : "Skitur",
            kategori : KATEGORI.KONDISJON,
            energiniva : ENERGINIVA.MIDDELS,
            tid : 90 ,
            detaljer : " Gå på ski i marka, minst 10 km"
        }
    ];



