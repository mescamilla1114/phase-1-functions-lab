// Code your solution in this file!
let someValue;
const location = 42;
let blocks = location - someValue;

function distanceFromHqInBlocks(someValue,location, blocks) {
    //returns the number of blocks given a value

    if (blocks < 0){
        blocks*-1;
    }
    return (blocks);
  }

  function distanceFromHqInFeet(distance) {
    distanceFromHqInBlocks(distance);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  const blocks = 242;
  let feet = blocks*distance;
    // the return value of distanceFromHqInBlocks can then be used to calculate feet

    return(feet);
  }

  function distanceTravelledInFeet(thing, destination) {
    //returns the number of feet traveled
    return((destination-thing)*242);
  }

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    distanceTravelledInFeet();

    if (distanceTravelledInFeet <= 400){

    }
  }