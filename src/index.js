/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var widthPreferences = preferences.length;
  var numberTriangles = 0;
  
  for (i = 0; i < widthPreferences; i++) {
    numberOne = i + 1;
    valueOne = preferences[i];

    numberTwo = valueOne;
    valueTwo = preferences[numberTwo - 1];

    numberThree = valueTwo;
    valueThree = preferences[numberThree - 1];

    if (valueThree == numberOne && numberOne != numberThree) {
      numberTriangles += 1;
    }

  }
  return (numberTriangles / 3);
};
