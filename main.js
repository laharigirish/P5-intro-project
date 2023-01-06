function preload(){

}
function setup(){
   canvas= createCanvas(640,480);
   canvas.position(110, 200);
   video=createCapture(VIDEO);
   video.hide();
   

}
function draw(){
    stroke('#3929cc');
    rect(25, 15, 600, 450, 20);
   image(video, 50,50, 500,400);
    circle(30, 15,70);
    circle(620, 15,70);
    circle(30, 460,70);
    circle(620, 460,70);
}
function take_snapshot(){
   save("yourimage.jpg");
}