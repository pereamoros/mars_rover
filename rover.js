var myRover = {
  position: [0,0],
  direction: 'N',
  order: 'fffrffrrflbb'
};

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++
      break;
    case 'E':
      rover.position[1]++
      break;
    case 'S':
      rover.position[0]--
      break;
    case 'W':
      rover.position[1]--
      break;
  };
  console.log("Rover moved forwards. Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}
function goBackward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]--
      break;
    case 'E':
      rover.position[1]--
      break;
    case 'S':
      rover.position[0]++
      break;
    case 'W':
      rover.position[1]++
      break;
  };
  console.log("Rover moved backwards. Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}
function turnRight(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction = "E";
      break;
    case 'E':
      rover.direction = "S";
      break;
    case 'S':
      rover.direction = "W";
      break;
    case 'W':
      rover.direction = "N";
      break;
  };
  console.log("Rover turned right. Position: [" + rover.position[0] + ", " + rover.position[1] + "]. Direction: "+ rover.direction)
}
function turnLeft(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction = "W";
      break;
    case 'E':
      rover.direction = "N";
      break;
    case 'S':
      rover.direction = "E";
      break;
    case 'W':
      rover.direction = "S";
      break;
  };
console.log("Rover turned left. Position: [" + rover.position[0] + ", " + rover.position[1] + "]. Direction: "+ rover.direction)
}
// goForward(myRover);
// goForward(myRover);
// goForward(myRover);
// turnRight(myRover);
// goForward(myRover);
for (var i = 0; i < myRover.order.length; i++) {
  if(myRover.order[i]=== "f"){
    goForward(myRover);
  }
  else if(myRover.order[i]=== "b"){
    goBackward(myRover);
  }
  else if(myRover.order[i]=== "r"){
    turnRight(myRover);
  }
  else if(myRover.order[i]=== "l"){
    turnLeft(myRover);
  }
  else{
    console.log("Error in order command.")
  }
}
