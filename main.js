noseX=results[0].pose.nose.x
noseY=results[0].pose.nose.y
function preload(){
    moustache_image=modelLoaded('https://i.postimg.cc/3x3QzSGq/m.png')
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    image(video,0,0,300,300);
    image(moustache_image,noseX-1.5,noseY-1.5,30,30)
}
function take_snapshot(){
    save('myFilterImage.png')
}
function gotPoses (results){
    if (results.length>0){
        console.log(results);
        console.log("nose x="+results[0].pose.nose.x)
        console.log("nose y="+results[0].pose.nose.y)
    }

}
function modelLoaded(){
    console.log("poseNet is Initialized");}
