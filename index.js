function distanceFromHqInBlocks(block){
  return Math.abs(block - 42);
}

function distanceFromHqInFeet(block){
  return distanceFromHqInBlocks(block) * 264
}
function distanceTravelledInFeet(starting, ending){
  return Math.abs(starting - ending) * 264
}
function calculatesFarePrice(starting,ending){
  let travelled =  distanceTravelledInFeet(starting,ending)
  let response
  if (travelled <= 400) {
    response = 0
  }
  else if (400 < travelled < 2000) {
    response = travelled * .02
  }
  else if (2000 <= travelled <= 2500) {
    response = 25
  }
  else if (travelled > 2500) {
    response = 'cannot travel that far'
  }

  return response
}
