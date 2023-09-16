function findLongestWord(sentence) {
    const words = sentence.split(' ');
    let maxLength = 0;
  
    for (const word of words) {
      const length = word.length;
      if (length > maxLength) {
        maxLength = length;
      }
    }
  
    return maxLength;
  }
  
  // Do not modify the below lines
  module.exports = { findLongestWord };

  const sentence1="Coding is fun with fellow learners";
  const sentence2="The quick brown fox jumped over the lazy dog";
  const output1 = findLongestWord(sentence1);
const output2 = findLongestWord(sentence2);

console.log(output1);
console.log(output2); 
