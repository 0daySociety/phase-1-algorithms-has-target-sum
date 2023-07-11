function hasTargetSum(array, target) {
  // Write your algorithm here

  const  myArray= new Set();

  for(let x=0; x< array.length; x++){
    const value=target - array[x]
    if (myArray.has(value)){
      return true;
      
    }
    else {
      myArray.add(array[x])
    }
  }
  return false

}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  creat a new variable called myArray and use the set method on it 
  iterate through the array list and find any number when subtructed from the 
  array store the value to a {value} variable .look if the myArray variable has that valueru 
  it returns true else add the value to the myarray variable

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
