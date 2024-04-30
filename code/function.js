function greeting(name){
    console.log("Hello "+name);
}

function max(n1, n2, n3){
    let max = 0;

    if (n1 > n2)
     max = n1;
    else
    max = n2;

  return  n3 > max ? n3 : max;
}

console.log(max(2,7,6));