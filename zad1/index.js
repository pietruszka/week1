/*
    Iterate through given array and replace each element if:
    -element is even replace with "Even"
    -element is divisible by 7 replace with "DivBy7"
    -element is divisible by 7 and 5 replace with "DivBy7and5"
    -element is negative replace "Negative"

    Example:
    input: [3,4,7,14]
    output: [3,"Even","DivBy7","EvenDivBy7"]
 */

window.onload = ()=> {

    let data = [-5,3,6,8,14,-7,2,1,35,3,5,-14,8,4,-1,-3];

    for (var i = 0; i < data.length; i++) {
      if(data[i] % 2 == 0){
        data[i] = "Even";
      }
      if(data[i] % 7 == 0 && data[i] % 5 == 0){
        data[i] = "DivBy7and5";
      }
      if(data[i] % 7 == 0){
        data[i] = "DivBy7";
      }
      if(data[i] < 0){
        data[i] = "Negative";
      }
    }

    document.body.innerHTML = data;
};
