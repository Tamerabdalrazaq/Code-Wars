String.prototype.toJadenCase = function () {
    const seperatedStr = this.split(" ");
    for(let x = 0; x<seperatedStr.length; x++){
        let tempStr = [...seperatedStr[x]];
        tempStr[0] = tempStr[0].toUpperCase();
        seperatedStr[x] = tempStr.join('');
    }
    return (seperatedStr.join(' '));
};

console.log('this is a string'.toJadenCase());