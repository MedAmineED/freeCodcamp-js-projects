function rot13(str) {
    str = [...str];
    let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let truduction = [];

    for (let i = 0; i < str.length; i++) {

            if (str[i].toLowerCase() !== str[i].toUpperCase() && alphabet.indexOf(str[i]) <= 12 ) {
                    let a = alphabet.indexOf(`${str[i]}`) + 13;
                    truduction.push(alphabet[a]);
            }
            else if (str[i].toLowerCase() !== str[i].toUpperCase() && alphabet.indexOf(str[i]) > 12) {
                    let a = alphabet.indexOf(`${str[i]}`) - 13;
                    truduction.push(alphabet[a]);
                    
            } else {
                    truduction.push(str[i]);
            }
    }
    return truduction.join("");
}

rot13("SERR PBQR PNZC");