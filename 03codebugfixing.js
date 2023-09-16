function calculateTip(billAmount, tipPercentage) {
    const tipAmount = billAmount * tipPercentage;
    const totalAmount = billAmount + tipAmount;
    return totalAmount.toFixed(2);
  }
  
  const billAmount = 60.75;
  const tipPercentage = 0.25;
  const totalAmount = calculateTip(billAmount, tipPercentage);
  console.log(totalAmount); 

  const billAmount1 = 90.00;
  const tipPercentage1 = 0.10;
  const totalAmount1 = calculateTip(billAmount, tipPercentage);
  console.log(totalAmount1); 