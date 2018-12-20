console.log(“Hello World!”);
var populationArray = []; 
var maxPopulation;
var isOverPopulated;

populationArray[0] = 5862342;
populationArray[1] = 6746723;
populationArray[2] = 8839455;
populationArray[3] = 4283741;
populationArray[4] = 9856936;
populationArray[5] = 7363984;

var arrSize = populationArray.length;

maxPopulation = 6746723;
isOverPopulated = false;

var i;
for (i = 0; i < populationArray.length; i++) { 
  if (populationArray[i] < maxPopulation) {
      console.log("smaller");
  }
  else if (populationArray[i] === maxPopulation) {
      console.log("equals");

  }
  else {
      console.log("larger");

  }
}

var last1 = populationArray[arrSize-1] < 100000;
var last2 = populationArray[arrSize-2] < 100000;
var last3 = populationArray[arrSize-3] < 100000;
 
var lastTreeCitysCondition = last1 && last2 && last3;

var maxPopCondition = maxPopulation < 100000;

if (lastTreeCitysCondition && maxPopCondition || isOverPopulated == false) {
    console.log("Small cities!!!");
}
else {
    console.log("Large cities!!!");
}
