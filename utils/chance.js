/**
 * set the number of chances a player has depending
 * on the complexity of the string det by
 * number of unknowns
 * @param  {[String]} str [masked string]
 * @return {[Number]}     [chances a player has]
 */
function chance(str) {
  var len = str.length;
  var dash = 0;
  var chances = 2;

  for (var i =0; i < len; i++) {
    if (str[i] == '_')
      dash++;
  }

  chances = (Math.floor(dash/len) > 7) ? 4 : 3;
  return chances;
}

module.exports = chance;