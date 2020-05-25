var myModule = require('./myModule.js');
var myMath = require('./math.js');
myModule.myPrint('hi hey hi');
myModule.myPrint2('hi hey hi');

let k = myMath.hamMu(2,4);
console.log(k);

for(i=1;i<=5;i++)
{
   sayHi("Hello Visual Studio code "+ 2*i); 
}


function sayHi(msg){
    console.log(msg);
}