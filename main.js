function setup(){
    canvas=createCanvas(600,400);
    canvas.position(650,150)
    video=createCapture(VIDEO);
    video.hide();
    model=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/vg_oU7S0D/model.json",modelLoaded);
}

function modelLoaded(){
    console.log("Model loaded.")
}

function draw(){
    image(video,0,0,600,400);
    model.classify(video,getResults);
}

function getResults(error,results){
    if (error){console.error(error);}
    else {
        console.log(results);
    document.getElementById("guess").innerHTML=results[0].label;
document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(2);}
}