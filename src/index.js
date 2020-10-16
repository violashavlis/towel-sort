module.exports = function towelSort (matrix) {
  if (matrix == null)
    return [];
  var result = [];
  matrix.forEach((row, i, array) => {
    if (i % 2 === 1) {
      result = result.concat(row.reverse());
    } else {
      result = result.concat(row);
    }    
  });
  return result;
}