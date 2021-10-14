
test('adds 14 + 9 to equal 23', () => {

    let total = sum(14, 9);

    expect(total).toBe(23);
});
test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    
    expect(fromEuroToDollar(10)).toBe(12); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
});

test ("One euro should be 127.9 yen ",function(){
    const { fromDollarToYen}= require ('./app.js')

    expect(fromDollarToYen(10)).toBe(1065); // 1 dolar son 127.9 yen

});
test ("One euro should be 0.8 gbp",function(){
    const {fromYenToPound}= require ('./app.js')

    expect(fromYenToPound(500)).toBe(3);

});