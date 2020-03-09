function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  let result = []
  nums.filter(function(num){
    if(num<1){
      result.push(num);
    }
  });
  return result;

  /* Another Solution
  let result = []
  for(let i =0; i<nums.length;i++){
    if(nums[i]<1){
      result.push(nums[i]);
    }
  }
  return result;
  */

  /*Another Solution
  return nums.filter((n) => n < 1 )*/
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  /* One Solution
  let result = []
  for(let i=0;i<names.length;i++){
    if(names[i].toUpperCase().charAt(0)===char.toUpperCase()){
      result.push(names[i]);
    }
  }
  return result;
  */
 
  /* another Solution
  let result = []
  names.filter(function(name){
    if(name.toUpperCase().charAt(0)===char.toUpperCase()){
      result.push(name)
    }
  });
  return result
  */
  return names.filter((name)=>name.includes(char))
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
  /*One Solution
  let result = []
  for(let i=0;i<words.length;i++){
    if(words[i].split(" ")[0]==="to"){
      result.push(words[i]);
    }
  }
  return result;
  */

  let result = []
  words.filter(function(word){
    if(word.split(" ")[0]==="to"){
      result.push(word)
    }
  });
  return result
  
  /* Another Solution
  return words.filter((word) => word.includes('to ') )
  */
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let result = []
  for(let i=0;i<nums.length;i++){
    if(Number.isInteger(nums[i])){
      result.push(nums[i]);
    }
  }
  return result;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  /* One solution
  let result = [];
  for(var user in users){
    result.push(users[user].data.city.displayName);
  }
  return result
  */
  return users.map((user)=>user.data.city.displayName)
  
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let result = []
  nums.forEach(function(num) {
    result.push(Number(Math.sqrt(num).toFixed(2)))
  });
  return result;
  
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
  /*
  let result = [];
  for(let i=0;i<sentences.length;i++){
    if(sentences[i].toUpperCase().includes(str.toUpperCase())){
      result.push(sentences[i])
    }
  }
  return result;
  */

  let result = [];
  sentences.filter(function(sentence){
    if(sentence.toUpperCase().includes(str.toUpperCase())){
      result.push(sentence);
    }
  });
  return result;


  /*another solution*/
  //return sentences.filter((s) => s.toLowerCase().includes(str.toLowerCase()))

}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
  /* First Solution
  let result=[];
  for(let i=0;i<triangles.length;i++){
    result.push(Math.max(...triangles[i]));
  }
  return result;
  
  // Second Solution

  let result=[];
  triangles.forEach(function(triangle){
    result.push(Math.max(...triangle));
  });
  return result;
  */
 
 let result = []
 triangles.forEach((triangle)=> result.push(Math.max(...triangle)))
 return result
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
