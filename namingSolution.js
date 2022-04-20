//1 - Use searchable names
//2 - Declare them as capitalized named constants.
const MILLISECONDS_PER_DAY = 60 * 60 * 24 * 1000; //86400000;

setTimeout(blastOff, MILLISECONDS_PER_DAY);

//3 - Use explanatory variables
const address = "One Infinite Loop, Cupertino 95014";
const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
const [_, city, zipCode] = address.match(cityZipCodeRegex) || [];
saveCityZipCode(city, zipCode);

//4 -Avoid Mental Mapping
const locations = ["Austin", "New York", "San Francisco"];
locations.forEach((location) => {
  doStuff();
  doSomeOtherStuff();
  // ...
  // ...
  // ...
  dispatch(location);
});

//5 - Don't add unneeded context
const Car = {
  make: "Honda",
  model: "Accord",
  color: "Blue",
};

const paintCar = (car, color) => {
  car.color = color;
};

//6 - Use default arguments instead of short circuiting or conditionals
const createMicrobrewery = (name = "Hipster Brew Co.") => {
  // ...
};

//7 - don't use misguiding names on variable -
const alivePatients = patients.filter(({ isAlive }) => isAlive);
