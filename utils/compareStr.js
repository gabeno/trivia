/**
 * compare two strings by letter and determine how near they compare
 * the higher the number the lesser the two strings compare
 * @param  {[String]} str1 [string to be compared against]
 * @param  {[String]} str2 [string to compare]
 * @return {[Number]}      [degree to which the strings compare]
 */
function compareStr(str1, str2) {
  var nearness = 0;

  if (str1.length !== str2.length)
    return;

  for (var i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i])
      nearness++;
  }
  
  return nearness;
}