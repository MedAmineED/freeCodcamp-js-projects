function palindrome(str) {
                let first = str.replace(/\s+/g, '');
                let sec = /([0-9]|[a-z]|[A-Z])/ig;

                let th = first.match(sec);
                let thRv = [];     

        th.forEach((el) => {thRv.push(el);});
        thRv.reverse();

                let finalTh = th.join("");   
                let finalThRv = thRv.join("");

        if (finalTh.toLowerCase() == finalThRv.toLowerCase()){
            return true;
        }else {
            return false;
}
}