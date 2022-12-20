noseX = 0;
noseY = 0;
function preload()
{
    lipstick = loadImage('https://i.postimg.cc/bwnnCkky/10c7f940b16ccc0ff6a58d7318812cfe-removebg-preview.png');
}

function setup()
{
    canvas = createCanvas(450, 450);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(450,450);
    video.hide();
    poseNet = ml5.poseNet(video,gotfilter);
    poseNet.on('pose', lips);
}

function gotfilter()
{
    console.log("Model Loaded");
}
function draw()
{
    image(video,0,0,450,450);
    image(lipstick,noseX - 45,noseY + 10,100,100);
}

function lips(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x"+noseX);
        console.log("nose y"+noseY);
    }
}
function picture()
{
    save('mylipstickFilterimg.png')
}