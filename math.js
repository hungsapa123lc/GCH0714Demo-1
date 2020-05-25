var myMathFunctions={
    hamMu: function(a,n){
        let result =1;
        for (let i = 1; i <=n; i++) {
           result = result*a;
        }
        return result;
    }
}
module.exports = myMathFunctions;