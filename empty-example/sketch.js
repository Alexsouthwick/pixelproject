  
var capture;
var tracker;
// var videoInput = document.getElementById('inputVideo');
var w = 640,
  h = 480;
 var blur= 0;


function setup() {
  capture = createCapture(VIDEO);
  canvas = createCanvas(w, h);
  capture.size(w, h);
  capture.hide();

 
  colorMode(HSB);

  tracker = new clm.tracker();
  tracker.init(pModel);
  tracker.start(capture.elt);

}

function draw() {
  image(capture, 0, 0, w, h);
  // filter(BLUR, 2);
  filter(GRAY);
  var positions = tracker.getCurrentPosition();
  // image(capture, 0, 0);

if (positions.length > 0) {
	// print(positions[16][1]);
	image(capture, positions[0][0], (positions[16][1]- (positions[16][1]/3.8)), (positions[14][0] - positions[0][0]), (positions[7][1] - (positions[16][1]-(positions[16][1]/3.8))), positions[0][0], (positions[16][1]-(positions[16][1]/3.8)), (positions[14][0]-positions[0][0]),(positions[7][1]- (positions[16][1]-(positions[16][1]/3.8))));
  }
}



