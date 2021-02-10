function findOutlier(integers){
    let remainder;
    if( Math.abs(integers[0]%2) === Math.abs(integers[1]%2))
        remainder = Math.abs(integers[0]%2)
    else 
        remainder = (Math.abs(integers[2] % 2));
    console.log(remainder);
    for(let x = 0; x<integers.length; x++)
      if((Math.abs(integers[x])%2) !== remainder)
          return integers[x];
}
