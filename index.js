function distanceFromHqInBlocks(block){
  return Math.abs(block - 42);
}

function distanceFromHqInFeet(block){
  return distanceFromHqInBlocks(block) * 264
}
