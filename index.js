function distanceFromHqInBlocks(someValue) {
  const headquarters = 42;
  return Math.abs(headquarters - someValue);
}

function distanceFromHqInFeet(someValue) {
  const distanceInBlocks = distanceFromHqInBlocks(someValue);
  return distanceInBlocks * 264;
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs((destination - start) * 264);
}

function calculatesFarePrice(start, destination) {
  let distanceInFeet = distanceTravelledInFeet(start, destination); // ?
  if (distanceInFeet <= 400) {
    return 0;
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    distanceInFeet -= 400;
    const cents = distanceInFeet * 2;
    const dollars = cents / 100;
    return dollars;
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
