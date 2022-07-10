stats = "";


function setup() {
    canvas = createCanvas(540, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    objectDetector = ml5.objectDetector("cocossd", mdl)
}

function draw() {
    image(video, 0, 0, 540, 400);
}

function mdl() {
    console.log("Model Loaded")
}