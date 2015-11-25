var sys = require('sys');
var exec = require('child_process').exec;

function puts(error, stdout, stderr) {
    console.log(stdout);
}
var Leap = require("leapjs");


var handInfo = [ [], [], [], [], [] ];


var controller = Leap.loop({enableGestures: true}, function(frame){
  if(frame.valid && frame.fingers.length > 0){


      // written for single hand
      var c = 0;
      for(finger in frame.fingers){ 
        //handInfo[c].append( )
        
        // append to next hand
        c++ ; 
        }
      
      //var temp  = frame.fingers[1].distal ;
    
      console.log(frame.fingers[1].distal);

  }
});
