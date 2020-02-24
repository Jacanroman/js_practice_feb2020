function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // Your code here!
    return sandwich.fillings

}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  if (person.city === "Manchester"){
    return true;
  }else{
    return false;
  }
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  return Math.ceil(people/40);  //Math.ceil() round to up
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  sheepy =0
  
  /*
  for (let i=0;i<arr.length;i++){
    if(arr[i]==="sheep"){
      sheepy++;
    }
  }
  return sheepy
  */

  for (let i in arr){
    if(arr[i]==="sheep"){
      sheepy++;
    }
  }
  return sheepy
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!ç
  for (let k in person){
    if (person.address.postCode.charAt(0).toUpperCase()==="M" && person.address.city.toUpperCase()=== "MANCHESTER"){
      return true;
    }else{
      return false;
    }
  }
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
