// Code your solution in this file!

function distanceFromHqInBlocks(block) {
 if (block > 42){
    return block - 42
 } else {
    return 42 - block
 }
  }


function distanceFromHqInFeet(block){
    return distanceFromHqInBlocks(block) * 264
}

function distanceTravelledInFeet(start, destination) {
    if (start>destination){
        let blocksTravelled = start - destination
        return blocksTravelled * 264
    } else {
        let blocksTravelled = destination - start
        return blocksTravelled * 264
    }
  }

  function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination)<=400){
        return 0
    } else if (distanceTravelledInFeet(start, destination)>400 && distanceTravelledInFeet(start, destination)<=2000){
        let amountOfFeetToCharge = distanceTravelledInFeet(start, destination) - 400
        return amountOfFeetToCharge * 0.02
    } else if (distanceTravelledInFeet(start, destination)>2000 &&  distanceTravelledInFeet(start, destination)<=2500){
        return 25
    } else {
        return 'cannot travel that far'
    }
  }
