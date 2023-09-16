function calculateBMI(weight, height) {
    // Write your code here
    const bmi = weight / (height * height);
  
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
      return "Overweight";
    } else {
      return "Obese";
    }
  }
  const weight=65;
  const height=1.75;
  const result=calculateBMI(weight,height);
  console.log(result);


  const weight1=45;
  const height1=1.60;
  const result1=calculateBMI(weight,height);
  console.log(result1);