
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0,2)

}


const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2)

}
selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
  let integer = int;
  return function(fare) {
    // debugger;
    return (fare * integer);
  }
};

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

// selectDifferentDrivers() — This function takes two arguments, an array of drivers and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function. Based on these two arguments, selectDifferentDrivers() will return either the first two drivers or the last two drivers.
function selectDifferentDrivers(drivers, func) {
  return func(drivers)

}
