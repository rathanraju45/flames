function removeSpaces(str) {
    // Remove all spaces from a string
    if (str && str.indexOf(' ') !== -1) {
      // If it does, remove all spaces from the string
      str = str.replace(/\s/g, '');
    }
    return str
  }
  
  function countUncommonChars(str1, str2) {
    // Count the number of uncommon letters in two strings
    let counts = {};
    let uncommon = 0;
  
    for (let i = 0; i < str1.length; i++) {
      counts[str1[i]] = (counts[str1[i]] || 0) + 1;
    }
  
    for (let i = 0; i < str2.length; i++) {
      counts[str2[i]] = (counts[str2[i]] || 0) + 1;
    }
  
    for (const letter in counts) {
      if (counts[letter] === 1) {
        uncommon++;
      }
    }
  
    return uncommon;
  }
  
  function countFlames(uncommonCount) {
    // Count the FLAMES word based on the number of uncommon letters
    const flames = ['Freinds', 'Love', 'Attraction', 'Marraige', 'Enemies', 'Siblings'];
    let index = 0;
  
    while (flames.length > 1) {
      // Count from the current letter in the FLAMES word, skipping over letters until you reach the count of uncommon letters
      let count = uncommonCount % flames.length;
      index += count;
      index %= flames.length;
  
      // Remove the letter at which you ended the count from the remaining letters in the FLAMES word
      flames.splice(index, 1);
  
      // Start the next count from the next letter in the remaining letters
      index %= flames.length;
    }
  
    return flames[0];
  }
  
  function runFlames() {
    // Get the names from the form
    const name1 = document.getElementsByClassName('name1').value;
    const name2 = document.getElementsByClassName('name2').value;
  
    // Remove spaces from the names
    const name1NoSpaces = removeSpaces(name1);
    const name2NoSpaces = removeSpaces(name2);
  
    // Count the number of uncommon letters
    const uncommonCount = countUncommonChars(name1NoSpaces, name2NoSpaces);
  
    // Count the FLAMES word and get the result
    const result = countFlames(uncommonCount);
  
    // Display the result in the form
    document.getElementById('flamesResult').value = result;
    alert(result)
  }
var vid1=document.querySelector(".bgvid");
vid1.playbackRate = 0.6;