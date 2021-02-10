function XO(str) {
    let strCopy = [...str];
    let x = 0, o = 0;
    for(let i = 0; i<strCopy.length; i++){
        if(strCopy[i].toLowerCase() === 'x')
            x++;
        else if (strCopy[i].toLowerCase() === 'o')
            o++;
    }
    return x === o;
}