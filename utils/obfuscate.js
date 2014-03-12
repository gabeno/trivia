/**
 * hide random charatcers from a string
 * @param  {[String]} str [string to be obfuscated]
 * @return {[String]}     [string with some characters replaced with '_']
 */
function obfuscate(str) {
  var len = str.length;
  var maskedStr = '';
  var showIndex = [];
  
  if (len <= 3) { // reveal only one letter / diff 1
    setIndex(1);
  }
  else if (len <= 6) { // reveal only two letters / diff = 2
    setIndex(2);
  }
  else if (len <= 8) {
    setIndex(3);
  }
  else if (len <= 10) {
    setIndex(4);
  }
  else {
    setIndex(5);
  }

  function setIndex(toShow) {
    var k = 0;

    showIndex.push( Math.floor(Math.random() * len) );
    // generate another random such that diff is 2 0r 3
    while (k < len) {
      if (Math.abs(k - showIndex[0]) == 5 || Math.abs(k - showIndex[0]) == 2) {
        if (showIndex.indexOf(k) == 1)
          continue;
        
        showIndex.push(k);

        if (showIndex.length == toShow)
          break;
      }
      k++;
    }
  }

  str = str.split('');

  for (var i=0; i < len; i++)
    maskedStr += (showIndex.indexOf(i) == -1) ? '_' : str[i];

  return maskedStr;
}

module.exports = obfuscate;