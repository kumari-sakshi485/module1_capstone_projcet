function countOccurrences(str, char) {
    const occurrences = str.split(char).length - 1;
    return occurrences;
  }
  
  const str1 = "hello world";
  const char1 = "l";
  const str2 = "Elephant";
  const char2 = "E";
  
  const output1 = countOccurrences(str1, char1);
  const output2 = countOccurrences(str2, char2);
  
  console.log(output1); 
  console.log(output2);
  