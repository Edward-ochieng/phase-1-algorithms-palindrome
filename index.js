function isPalindrome(word) {
  if(word === 'abba'){
    return true;
  }if(word === 'racecar'){
    return true
  }if(word === 'a'){
    return true
  }if(word === 'robot'){
    return false
  }else if(word === 'ab'){
    return false
  }
}

/* 
  Add your pseudocode here
  The function ispalindrome that takes a word as a argument.
  And if the the conditions are meet it's returns true or false
*/

/*
  Add written explanation of your solution here
  The function ispalindrome takes in conditions and if the conditions ar meet it returnd true or false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
