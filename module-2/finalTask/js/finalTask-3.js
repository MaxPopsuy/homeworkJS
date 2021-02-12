const findLongestWord = function(string) {
    const stringSplited = string.split(" ");

    let longestWord = " ";

    for (const word of stringSplited) {
        if (word.length > longestWord.length) {
            longestWord = word;
            
        }
    }

    return `Longest word: ${longestWord}`;
};
  

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
  
console.log(findLongestWord('Google do a roll')); // 'Google'
  
console.log(findLongestWord('May the force be with you')); // 'force'

console.log(findLongestWord('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam cum modi et necessitatibus in sed?'));

