export const ENERGINIVA = {

    LAV: "lav",
    MIDDELS: "middels",
    HØY: "høy",
};

export const KATEGORI = {
    STYRKE: "styrke",
    KONDISJON: "kondisjon",
    RESTITUSJON: "restitusjon",
};

    export const exercises = [
        {
            id : "benkpress",
            navn : "Benkpress",
            kategori : KATEGORI.STYRKE,
            energiniva : ENERGINIVA.MIDDELS,
            tid : 12 , 
        },
        {
            id : "utfall",
            navn : "Utfall",
            kategori : KATEGORI.STYRKE,
            energiniva : ENERGINIVA.HØY,
            tid : 20 ,
        },

        {
            id : "bicepscurl",
            navn : "Bicepscurl",
            kategori : KATEGORI.STYRKE,
            energiniva : ENERGINIVA.LAV,
            tid : 10 ,
        },

        {
            id : "skulderhev",
            navn : "Skulderhev",
            kategori : KATEGORI.STYRKE,
            energiniva : ENERGINIVA.LAV,
            tid : 7 ,
        },

        {
            id : "markløft",
            navn : "Markløft",
            kategori : KATEGORI.STYRKE,
            energiniva : ENERGINIVA.MIDDELS,
            tid : 15 ,
        },

        {
            id : "roing",
            navn : "Roing",
            kategori : KATEGORI.STYRKE,
            energiniva : ENERGINIVA.MIDDELS,
            tid : 20 ,
        },

        {
            id : "situps",
            navn : "Situps",
            kategori : KATEGORI.STYRKE,
            energiniva : ENERGINIVA.LAV,
            tid : 7 ,
        },

        {
            id : "hundetur",
            navn : "Hundetur",
            kategori : KATEGORI.KONDISJON,
            energiniva : ENERGINIVA.LAV,
            tid : 60 ,
        },

        {
            id : "landeveissykling",
            navn : "Landeveissykling",
            kategori : KATEGORI.KONDISJON,
            energiniva : ENERGINIVA.MIDDELS,
            tid : 60 ,
        },
    
        {
            id : "sykkelhund",
            navn : "Sykkel med hund",
            kategori : KATEGORI.RESTITUSJON,
            energiniva : ENERGINIVA.LAV,    
            tid : 60 ,
        },

        {
            id : "skitur",
            navn : "Skitur",
            kategori : KATEGORI.KONDISJON,
            energiniva : ENERGINIVA.MIDDELS,
            tid : 90 ,
        }
    ];



