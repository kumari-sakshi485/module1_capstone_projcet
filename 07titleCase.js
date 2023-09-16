function titleCase(sentence) {
  const words = sentence.toLowerCase().split(' ');

  const titleCaseWords = words.map(word => {
    return word[0].toUpperCase() + word.substring(1);
  });

  return titleCaseWords.join(' ');
}

const sentence1 = "Dream big, work hard, and stay focused";
const sentence2 = "Be yourself; everyone else is already taken.";

const output1 = titleCase(sentence1);
const output2 = titleCase(sentence2);

console.log(output1); 
console.log(output2);

