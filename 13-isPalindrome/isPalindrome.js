function isPalindrome(word) {
  // Insert code here;
  for(var i = 0; i < word.length; i++){
    if(word[i] !== word[word.length-i-1])
      return false;
    return true;
  }
}

// Do not edit this line;
module.exports = isPalindrome;