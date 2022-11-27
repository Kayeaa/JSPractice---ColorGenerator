/*Les variables des rgb*/

let red = document.getElementById("redRange");
let green = document.getElementById("greenRange");
let blue = document.getElementById("blueRange");
let refreshBtn = document.getElementById("refreshBtn");
let resultColor = document.getElementById("resultColor");


/*Les variables du min et max des couleur rgb*/
const RANGE_MIN = 0;
const RANGE_MAX = 255;


/*Messages d'erreurs si il y a un soucis avec le contenu de la variable*/
if (!red) {
    console.error("erreur avec redRange");
}
else if (!green) {
    console.error("erreur avec greenRange");
}
else if (!blue) {
    console.error("erreur avec blueRange");
}
else {
    red.min = RANGE_MIN;
    green.min = RANGE_MIN;
    blue.min = RANGE_MIN;
    red.max = RANGE_MAX;
    green.max = RANGE_MAX;
    blue.max = RANGE_MAX;
}

function getHexaColor() {
    let redHex = convertFirstZero(parseInt(red.value));
    let greenHex = convertFirstZero(parseInt(green.value));
    let blueHex = convertFirstZero(parseInt(blue.value));

    resultColor.value = `#${redHex}${greenHex}${blueHex}`;
}

/* Si la valeur est plus petit que 16 alors la valeur doit etre = 0 
car le ToString pense qu'il n'y a pas besoin du premier caractere si
la valeur du premier caractere est de  = 0 */

function convertFirstZero(nb) {
    if (nb < 16) return `0${nb.toString(16)}`;
    return nb.toString(16)
}


