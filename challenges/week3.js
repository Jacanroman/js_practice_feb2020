function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  arr = []
  for(let i=0; i<nums.length;i++){
    let a = nums[i]*nums[i];
    arr.push(a)
  }
  return arr;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!
  let arr = words.slice(1)
  let result = []
  arr.map((word) => result.push(word.charAt(0).toUpperCase() + word.slice(1)))

  return words.length > 1 ? `${words[0]}${result.join('')}` : words.toString()
}  


function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let result = 0;
  people.forEach((subject) => result += subject.subjects.length);
  return result;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  
  const men = menu.map((arr) =>Object.values(arr.ingredients)).some((i)=>i.includes(ingredient));
  return men
  
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  
  const duplicate = arr1.filter((item) => arr2.includes(item)).filter((item, index, arr) => arr.indexOf(item) === index).sort();
  return duplicate;
  
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
