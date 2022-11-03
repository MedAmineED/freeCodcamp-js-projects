function telephoneCheck(str) {
    let numberRgex = /^1?\s?((\d{3}|(\(\d{3}\)))(\-?|\s?))\d{3}(\-?|\s?)\d{4}$/;
    console.log(str.match(numberRgex));
    let strTest = numberRgex.test(str);
        return strTest;
}

telephoneCheck("555-555-5555");