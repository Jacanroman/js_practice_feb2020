function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  return word.charAt(0).toUpperCase()+word.slice(1);
  
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.charAt(0).toUpperCase()+"."+lastName.charAt(0).toUpperCase()
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  
  let vat = (originalPrice * vatRate)/100
  
  let result = originalPrice + vat
  return Number(result.toFixed(2))
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // Add your code here!
  let discount = (originalPrice*reduction)/100
  discount = discount.toPrecision(4)
  
  return originalPrice - discount

}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!

  if(str.length % 2 ===0){
    return str.substr((str.length/2)-1,2);
  }else{
    return str.substr(str.length/2,1)
  }
  /* Another Solution
  return str.length % 2 ? str.substr(str.length / 2, 1) : str.substr((str.length / 2) - 1, 2);
  */
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  return word.split("").reverse().join("")
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
  let reverse_words = []
  for(var i=0;i<words.length;i++){
    let a = words[i].split("").reverse().join("")
    reverse_words.push(a);
  }
  return reverse_words
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
  var counter = 0;
  for(var i=0;i<users.length;i++){
    if(users[i].type==="Linux"){
      counter++;
    }
  }
  return counter;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
  var total = 0;
  for(var i=0;i<scores.length;i++){
    total += scores[i]
  }
  return Number((total / scores.length).toFixed(2))
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if(n%3===0 && n%5===0){
    return "fizzbuzz"
  }else if(n%5===0){
    return "buzz"
  }else if(n%3===0){
    return "fizz"
  }else{
    return n;
  }
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
