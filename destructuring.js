let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846

let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
  let {numPlanets, ...discoveryYears} = planetFacts;
  
  console.log(discoveryYears); // {yearNeptuneDiscovered:1846, yearMarsDiscovered: 1659}
  
  
  function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
  getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // Your name is alejandro and you like purple

  getUserData({firstName: "Melissa"}) // your name is melissa and you like green
  getUserData({}) // name is undefined and you like green 


  let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // maya
console.log(second); // marissa
console.log(third); // chi

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]
  
  console.log(raindrops); // Raindrops on roses
  console.log(whiskers); // whiskers on kitten
  console.log(aFewOfMyFavoriteThings); // bright copper kettles, warm woolen mittens, brown paper packagestied up with strings



  let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // [10,30,20]

var obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
  var a = obj.numbers.a;
  var b = obj.numbers.b;

  /* Write an ES2015 Version */
  const obj = {
    numbers: {
        a: 1,
        b: 2
    }
  };
  const {a,b} = obj.numbers


  var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;


/* Write an ES2015 Version */

[arr[0],arr[1]] = [arr[1],arr[0]]


raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])


  {
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  }
const raceResults = ({first,second,third, ...rest} => {first, second, third,rest})
  