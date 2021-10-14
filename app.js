const sum = (a,b) => {
    return a + b
}

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return Math.floor(valueInDollar);
}

const fromDollarToYen = function(valueInDollar){
    
    let euro=(valueInDollar/1.2);
    let valueInYen=  euro *oneEuroIs.JPY;
    return Math.floor(valueInYen);

}
const fromYenToPound= function(valueInYen){
   let  euro =(valueInYen/127.9)
   valueInYen= euro*oneEuroIs.GBP;
   return Math.floor(valueInYen);

}

console.log(sum(7,3));

module.exports = { sum, fromEuroToDollar ,  fromDollarToYen, fromYenToPound  }