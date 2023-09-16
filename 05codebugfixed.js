function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const lowerStr = str.toLowerCase();
    let count = 0;
  
    for (let i = 0; i < lowerStr.length; i++) {
      if (vowels.includes(lowerStr[i])) {
        count++;
      }
    }
    return count;
  }
  
  console.log(countVowels("AlmaBetter")); 
  console.log(countVowels("Coding is fun with fellow learners"));