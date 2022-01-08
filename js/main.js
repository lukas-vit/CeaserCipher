/**
 * Long live Sparta! Vytvořte funkci, která vyřeší Caesarovu širfu. Funkce dostane 
 * na vstup zašifrovaný text a také hodnotu, která byla použita při šifrování, a pak 
 * vrátí dešifrovaný text. Předpokládejte pouze anglickou abecedu s velkými 
 * písmeny, ostatní znaky ignorujte. Poté v konzoli dešifrujte/dešiftujte následující texty.
 * 
 * key used - encrypted text
 *       19 - MPH MABGZL TKX BGYBGBMX: MAX NGBOXKLX TGW ANFTG LMNIBWBMR; TGW B'F GHM LNKX TUHNM MAX NGBOXKLX. - TEUXKM XBGLMXBG
 *        5 - YMJWJ NX ST QFB JCHJUY YMJ QFB YMFY YMJWJ NX ST QFB. - OTMS FWHMNGFQI BMJJQJW
 *       12 - M YMZ ITA PMDQE FA IMEFQ AZQ TAGD AR FUYQ TME ZAF PUEOAHQDQP FTQ HMXGQ AR XURQ. ― OTMDXQE PMDIUZ
 * 
 * Následně vytvořte uživatelské rozhraní, ve kterém bude možné zadat zmíněné dvě 
 * vstupní hodnoty (zašifrovaný text a použitý klíč) a po kliknutí na tlačítko 
 * "Decipher!" se na určeném místě zobrazí dešifrovaný text. Rozhraní také vhodně
 * nastylujte.
 */
//              0123456789...
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const shiftChar = (c, shift) => {
    // a helper function to shift one character inside the 
    // alphabet based on the shift value and return the result
    const positionOfLetter = alphabet.indexOf(c) - shift;
    let newPosition = 0;
    let newLetter = '';

    if (alphabet.includes(c)) {
        if (positionOfLetter < 0) {
            newPosition = mod(positionOfLetter, alphabet.length);
            newLetter = alphabet.charAt(newPosition);
        } else {
            newLetter = alphabet.charAt(positionOfLetter);
        } 
    } else {
        return c;
    }

    return newLetter;
};

function mod(n, m) {
    return ((n % m) + m) % m;
}

const shiftString = (str, shift) => {
    // a helper function to shift one entire string inside the 
    // alphabet based on the shift value and return the result
    let newSentence = '';
    for (let i = 0; i < str.length; i += 1) {
        newSentence += shiftChar(str.charAt(i), shift);
    }
    return newSentence;
};

const caesarDecipher = (cipherText, usedKey) => {
    // your implementation goes here
    // good to know: 
    const decipherString = shiftString(cipherText, usedKey);
    return decipherString;
};

// albert einstein
console.log(caesarDecipher("MPH MABGZL TKX BGYBGBMX: MAX NGBOXKLX TGW ANFTG LMNIBWBMR; TGW B'F GHM LNKX TUHNM MAX NGBOXKLX. - TEUXKM XBGLMXBG", 19));

// john archibald wheeler
console.log(caesarDecipher("YMJWJ NX ST QFB JCHJUY YMJ QFB YMFY YMJWJ NX ST QFB. - OTMS FWHMNGFQI BMJJQJW", 5));

// charles darwin
console.log(caesarDecipher("M YMZ ITA PMDQE FA IMEFQ AZQ TAGD AR FUYQ TME ZAF PUEOAHQDQP FTQ HMXGQ AR XURQ. ― OTMDXQE PMDIUZ", 12));

//dešifrování
const textarea = document.getElementById('text');
const key = document.getElementById('key');
const submit = document.getElementById('submit');
const result = document.getElementById('result');

submit.addEventListener('click', function (e) {
    e.preventDefault();
    
    const textValue = textarea.value;
    const keyValue = parseInt(key.value);

    if(isNaN(keyValue)){
        alert('Key is missing');
    } else{
        result.innerText = caesarDecipher(textValue, keyValue);
    }
});