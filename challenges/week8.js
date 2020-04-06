const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  
  let i = nums.indexOf(n);
  return nums.includes(n) && nums[++i] || null;
  
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  let result ={
    0:0,
    1:0
  }
  
  str.split("").filter(function(num){
    if(num === '1'){
      result[1]++
    }else{
      result[0]++
    }
  })
  
  return result
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  
  return Number(n.toString().split('').reverse().join(''));

};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
  
  let NewArr = [].concat(...arrs);
  let result = 0;
  for(var i=0;i<NewArr.length;i++){
    result += NewArr[i]  
  }
  return result;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  
  var arrCopy = [...arr];
  var [first] = [arrCopy.splice(0,1)]
  var[last] = [arrCopy.splice(-1)]
  
  return  [...last, ...arrCopy, ...first];
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
  
  return Object.values(haystack).toString().toUpperCase().includes(searchTerm.toUpperCase())
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  
  var newStr = str.replace(/[^\w\s]/gi, '').toLowerCase().split(' ')
  var freqMap = {};
  newStr.forEach(function(elem) {
    if (!freqMap[elem]) {
        freqMap[elem] = 0;
    }
    freqMap[elem] += 1;
  });

  return freqMap;
  
  /* shorter solution
  let newStr = str.replace(/[^\w\s]/gi, '').toLowerCase().split(' ')
  const obj = {}
  newStr.forEach(elem =>{
    obj[elem] = obj[elem] ? obj[elem] +1 : 1
  });
  return obj;
  */

};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
