const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arrWords = [];
    let a = [];
    let b = [];
    let strResult = [];
    
    for (i = 0, j = 0; i < expr.length; i += 10, j++) {
        arrWords[j] = expr.slice(i, i+10);
    }
    for (i = 0; i < expr.length/10; i++) {
        for (j = 9, k = 0; j >= 0; j-=2, k++) {
            a[k] = arrWords[i][j-1] + arrWords[i][j];
        }
        a.reverse();
        for (ii = 0; ii < a.length; ii++) {
            if (a[ii] ==='**') b[ii] = '*';
            else if (a[ii] === '00') b[ii] = '';
            else if (a[ii] === '10') b[ii] = '.';
            else if (a[ii] === '11') b[ii] = '-';
        }
        if (MORSE_TABLE[b.join('')]) strResult = strResult + MORSE_TABLE[b.join('')];
        else strResult = strResult + ' ';
       
    }
    return strResult; 
    
}

module.exports = {
    decode
}