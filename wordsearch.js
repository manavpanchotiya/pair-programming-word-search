const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    {
      if (l.includes(word)) return true;
    }
    //logic for inner loop for vertical word here
    let verticalLetters = transpose(letters);
    const verticalJoin = verticalLetters.map(ls => ls.join(''));
    for (let l of verticalJoin) {
      if (l.includes(word)) return true;
    }
    
  }

  return false;
};

const transpose = function(matrix) {
  let result = [];//will be our array of arrays
  for (let rows = 0; rows < matrix[0].length; rows++) {
    let emptyRow = [];
    for (let columns = 0; columns < matrix.length; columns++) {
      emptyRow.push(matrix[columns][rows]);
    }
    result.push(emptyRow);
  }
  return result;
};
  
module.exports = wordSearch;