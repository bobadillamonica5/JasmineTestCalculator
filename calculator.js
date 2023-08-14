window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  setupIntialValues();
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    update();
  });
  }
);


function setupIntialValues() {
  // 1. Get the inputs from the DOM.
  let amount = document.getElementById("loan-amount");
  let years = document.getElementById("loan-years");
  let rate = document.getElementById("loan-rate"); 

  // 2. Put some default values in the inputs
  amount.value = '0';
  years.value = '0';
  rate.value = '0'; 

  // 3. Call a function to calculate the current monthly payment
  update();

}

// Get the current values from the UI
// Update the monthly payment
function update() {
  // 4. Create function to gather the form inputs into one object
  let values = getCurrentUIValues();
  // 6. once executed^, values = object w/ form inputs

  console.log('values: ', values)

  // 7. Use the output from #6 as argument to calc monthly pay using inputs obj
  const monthlyPayment = calculateMonthlyPayment(values);

  // 8. pass in monthly payment to populate
  updateMonthly(monthlyPayment);
}

// 4 = FUNCTION
function getCurrentUIValues() {
  // 5. generate object that stores individual form inputs 
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.

// 7 = FUNCTION
function calculateMonthlyPayment(values) {

  let p = values["amount"]; // principle
  let i = values["rate"] / 12; // distribute rate per month of year
  let n = values["years"] * 12;
  let negativeN = Math.pow((1 + i), -n)

  let monthlyPayment = 
    (p * i) / (1 - (negativeN));

  let newMonthlyPayment = monthlyPayment.toFixed(2)

  console.log('new monthly payment: ', newMonthlyPayment);

  return newMonthlyPayment;  
}

// 8 = FUNCTION
// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthlyPayment) {
  let monthlyUI = document.getElementById("monthly-payment");
  console.log("monthlyUI: ", monthlyPayment)
  monthlyUI.value = monthlyPayment;
  document.getElementById('monthly-payment').textContent = '$' + monthlyPayment;
}
