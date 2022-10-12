function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);//背景白色
  strokeWeight(3)
  stroke(mouseX/3,mouseY%255)
  noFill();//不要充滿顏色
 
  for(var j=0;j<(height/50);j=j+1)//j++ =>j=j+1
    for(var i=0;i<int(width/40);i=i+1)//i++ =>i=i+1
  { 
    ellipse(25+(i*50),25+(j*50),50)//在座標(25,25)劃一個直徑50圓
  rect(25+(i*50),25+(j*50),50)//方框座標
  ellipse(50+(i*50),50+(j*50),20)
  //ellipse(25+(i*50),25,50)//在座標(25,25)劃一個直徑50圓
  //rect(0+(i*50),50,50)//方框座標
  //ellipse(50+(i*50),50,20)


}
}


