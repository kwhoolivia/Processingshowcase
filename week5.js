let inc =2;
let yinc=2

function setup() {
  createCanvas(500, 500);
  stroke(60);
  a=0
  b= 0
}

function draw() {
 background (112,83,68)
 rect (a,50,100);
  fill (112,73,68)
  a=a-inc;
  if(a < 0|| a>(width-100 )){inc*=-1};
  
if(b < 0|| b>height ){yinc*=-1};
  
  rect (a,350,100);
  fill (104,42,38)
  a=a;
  // if(a <0){a=height};

  rect (50,a,100);
  fill (88,52,50)
  a=a-inc;
  // if(a <0){a=height};
  
  rect (a,200,100);
  fill (125,36,30)
  a=a;
  // if(a <0){a=height};
  
   rect (350,a,100);
  fill (60,37,36)
  a=a-inc;
  // if(a <0){a=height};
  
  
   rect (200,a,100);
  fill (50,20,18)
  a=a-inc;
  // if(a <0){a=height};
  }
