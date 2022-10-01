function setup(){
    canvas = createCanvas(640,480);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    video.size(640,480)
}

stratus = "";
objects = [];

function draw(){
    image(video,0,0,640,480);
}

function modelLoaded(){
    console.log("modelLoaded");
    stratus = true;
    }

function start_loading(){
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML ="Status : Detecting Objects";
    input = document.getElementById("input").value;
}