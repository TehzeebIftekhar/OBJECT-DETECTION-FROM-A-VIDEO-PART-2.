objects = [];
status = "";

function preload()
{
   
}

function setup()
{
    canvas = createCanvas(420,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded")
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}