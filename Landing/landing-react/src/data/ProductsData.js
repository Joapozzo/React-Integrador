//Remeras
import rRonaldo from "../imgs/products/remeras/remera-ronaldo.jpg"
import rMessi from "../imgs/products/remeras/remera-messias.jpg"
import rDiego from "../imgs/products/remeras/remera-diego82.jpg"
import rCruyff from "../imgs/products/remeras/remera-johan.jpg"

//Gorras
import gorra1 from "../imgs/products/gorras/mod1.png"
import gorra2 from "../imgs/products/gorras/mod2.png"
import gorra3 from "../imgs/products/gorras/mod3.png"
import gorra4 from "../imgs/products/gorras/mod4.png"

//Billeteras
import bille1 from "../imgs/products/billeteras/1.png"
import bille2 from "../imgs/products/billeteras/2.png"
import bille3 from "../imgs/products/billeteras/3.png"
import bille4 from "../imgs/products/billeteras/4.png"

//Bolsos
import bolso1 from "../imgs/products/mochilas/mochila-line.jpg"
import bolso2 from "../imgs/products/rneceseres/neceser-gajos.png"
import bolso3 from "../imgs/products/morrales/mini-morral.png"
import bolso4 from "../imgs/products/bolsos/botinero-gajos.png"

export const products = [
    // REMERAS
    /* remera-01 */ {   
        id: 1,
        nombre: "Remera - 'CR7'",
        descripcion: "Casaca de un besito de R9 a la caprichosa, su mejor amiga.",
        img: rRonaldo,
        categoria: "Remeras",
        precio: 7500,
        destacado: true,
    },

    /* remera-02 */ {   
        id: 2,
        nombre: "Remera - 'Messias'",
        descripcion: "Casaca de un besito de R9 a la caprichosa, su mejor amiga.",
        img: rMessi,
        categoria: "Remeras",
        precio: 7500,
        destacado: true,
    },

    /* remera-03 */ {   
        id: 3,
        nombre: "Remera - 'D10S'",
        descripcion: "Casaca de un besito de R9 a la caprichosa, su mejor amiga.",
        img: rDiego,
        categoria: "Remeras",
        precio: 7500,
        destacado: true,
    },

    /* remera-04 */ {   
        id: 4,
        nombre: "Remera - 'Cruyff'",
        descripcion: "Casaca de un besito de R9 a la caprichosa, su mejor amiga.",
        img: rCruyff,
        categoria: "Remeras",
        precio: 7500,
        destacado: true,
    },
    // Gorras

    /* gorra-01 */ {   
        id: 5,
        nombre: "Gorra - 'GRAY'",
        descripcion: "",
        img: gorra1,
        categoria: "Gorras",
        precio: 4500,
        destacado: true,
    },
    /* gorra-02 */ {   
        id: 6,
        nombre: "Gorra - 'AEST'",
        descripcion: "",
        img: gorra2,
        categoria: "Gorras",
        precio: 4500,
        destacado: true,
    },
    /* gorra-03 */ {   
        id: 7,
        nombre: "Gorra - 'AEST-2'",
        descripcion: "",
        img: gorra3,
        categoria: "Gorras",
        precio: 4500,
        destacado: true,
    },
    /* gorra-04 */ {   
        id: 8,
        nombre: "Gorra - 'BLACK'",
        descripcion: "",
        img: gorra4,
        categoria: "Gorras",
        precio: 4500,
        destacado: true,
    },

    //BILLETERAS
    /* billetera-01 */ {   
        id: 9,
        nombre: "Billetera - 'Rustic'",
        descripcion: "",
        img: bille1,
        categoria: "Billeteras",
        precio: 6500,
        destacado: true,
    },
    /* billetera-02 */ {   
        id: 10,
        nombre: "Billetera - 'Black'",
        descripcion: "",
        img: bille2,
        categoria: "Billeteras",
        precio: 6500,
        destacado: true,
    },
    /* billetera-03 */ {   
        id: 11,
        nombre: "Billetera - 'Alpha'",
        descripcion: "",
        img: bille3,
        categoria: "Billeteras",
        precio: 6500,
        destacado: true,
    },
    /* billetera-04 */ {   
        id: 12,
        nombre: "Billetera - 'Indie'",
        descripcion: "",
        img: bille4,
        categoria: "Billeteras",
        precio: 6500,
        destacado: true,
    },

    //Bolsos
    /* bolso-01 */ {   
        id: 13,
        nombre: "Mochila - 'Line'",
        descripcion: "",
        img: bolso1,
        categoria: "Bolsos",
        precio: 9000,
        destacado: true,
    },
    /* bolso-02 */ {   
        id: 14,
        nombre: "Neceser - 'Gajos'",
        descripcion: "",
        img: bolso2,
        categoria: "Bolsos",
        precio: 8000,
        destacado: true,
    },
    /* bolso-03 */ {   
        id: 15,
        nombre: "Morral - 'Line-Whith'",
        descripcion: "",
        img: bolso3,
        categoria: "Bolsos",
        precio: 7000,
        destacado: true,
    },
    /* bolso-04 */ {   
        id: 16,
        nombre: "Botinero - 'Gajos'",
        descripcion: "",
        img: bolso4,
        categoria: "Bolsos",
        precio: 8500,
        destacado: true,
    },
];

export const TotalProducts = products.length;

export const ProductsFilter = products.reduce((acc, product) => {
    if (!acc[product.categoria]) {
        acc[product.categoria] = [];
    }

    acc[product.categoria] = [...acc[product.categoria], product];

    return acc;
}, {});