var currentCmd = '';
var trimFlag = false;
var seq = 0; // sequence number init
var intRef;

const takeoff = '290718208'; // Takeoff
const land = '290717696'; // Landing
const hover = '1,0,0,0,0'; // Hover
const moveForward = '1,0,-1102263091,0,0'; // Forward
const moveBackward = '1,0,1045220557,0,0'; // Backward
const moveLeft = '1,-1102263091,0,0,0'; //move left
const moveRight = '1,1045220557,0,0,0'; //move right
const rotateLeft = '1,0,0,0,-1102263091'; //move up
const rotateRight = '1,0,0,0,1045220557'; //move right

var cmd = '';

var doCurrentCmd = function (){

	  switch(currentCmd)
	  {
	  	case 'land':
	  	  seq=seq+1;
		  console.log('Landing the drone');
	  	  cmd = 'AT*REF='+seq+','+land;
	  	  break;
	  	case 'trim':
	  	  seq=seq+1;
	  	  console.log('Trimming the drone');
	  	  cmd = 'AT*FTRIM='+seq;
	  	  break;
	  	case 'takeoff':
	  	  console.log('TAKEOFF::'+trimFlag)
	  	  seq=seq+1;
	  	  console.log('Takeoff the drone');
	  	  cmd = 'AT*REF='+seq+','+takeoff;
	  	  break;
	  	case 'moveForward':
	  	  seq=seq+1;
	  	  cmd = 'AT*PCMD='+seq+','+moveForward;
	  	  break;
	  	case 'moveLeft':
	  	  seq=seq+1;
	  	  cmd = 'AT*PCMD='+seq+','+moveLeft;
	  	  break;
	  	case 'moveRight':
	  	  seq=seq+1;
	  	  cmd = 'AT*PCMD='+seq+','+moveRight;
	  	  break;
	  	case 'rotateLeft':
	  	  seq=seq+1;
	  	  cmd = 'AT*PCMD='+seq+','+rotateLeft;
	  	  break;
	  	case 'rotateRight':
	  	  seq=seq+1;
	  	  cmd = 'AT*PCMD='+seq+','+rotateRight;
	  	  break;
	  	case 'moveBackward':
	  	  seq=seq+1;
	  	  cmd = 'AT*PCMD='+seq+','+moveBackward;
	  	  break;	  	  
	  	default:
	  	  seq=seq+1;
	  	  cmd = 'AT*PCMD='+seq+','+hover;
	  }

  var jsonData = { "ipA": 192, "ipB": 168, "ipC": 1, "ipD": 1, "ipPort": 5556, "Command": cmd };
  community.udp.passUdpCmd(jsonData, aSyncJSONCallbackResult);
  showStatus(cmd);
  console.log('Send command' + cmd);
}

function aSyncJSONCallbackResult(data) {
	if (data) {
		console.log(data);
	}
}