
it('should calculate the monthly rate correctly', function () {
  calculateMonthlyPayment({
    amount: 1000,
    years: 2,
    rate: .25
}).toEqual(53.37);
});


// it("should return a result with 2 decimal places", function() {
//   // ..
// });

// /// etc
