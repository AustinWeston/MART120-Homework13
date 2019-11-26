
var myXs = [];
var myYs = [];
var myDiameters = [];
var myWs = [];
var myHs = [];


/*
var x = 50;
var y = 50;
var diameter = 25;

var x1 = 75;
var y1 = 125;
var diameter1 = 35;

var x2 = 125;
var y2 = 175;
var w = 35;
var h = 55;
*/

var mousex = 0;
var mousey = 0;

function setup()
{
    
    createCanvas(800,600);
    textSize(40);
    var x = 50;
    var y = 50;
    var diameter = 50;
   
    for(var i = 0; i < 6; i++)
    {
        myXs[i] = getRandomX(800);
        myYs[i] = getRandomY(600);
        myDiameters[i] = getRandomDiameter(100);

    }    
    /*for(var i = 0; i < 7; i++)
    {
        myXs[i] = 50;
        myYs[i] = 50;
        myDiameters[i] = 25;
        myWs[i] = 35;
        myHs[i] = 55;
        x += 10;
        y += 15;
        diameter += 12;


    }*/
    /*
    myXs[0] = 50;
    myXs[1] = 75;
    myYs[0] = 50;
    myYs[1] = 125;
    myDiameters[0] = 25;
    myDiameters[1] = 35;
    myWs[0] = 35;
    myHs[0] = 55;
    */

}


function draw()
{
    background(50,10,250);
    createPlayer();
    movePlayer();
    createExit();
    createCircle();
    createRectangle();
    createYouWin();
    moveCircle();
    moveRectangle();
    createMouseCircle();
    changeCircleDiameter();
    
    
  
}
function mouseClicked()  
{    

  mousex = mouseX
  mousey = mouseY

}
function createPlayer()
{
    fill(24,200,29);
    square(myXs[0],myYs[0],myDiameters[0]);
}
function movePlayer()
{
    if(keyIsDown(68))
    {
        myXs[0]+=5;
    }
    if(keyIsDown(65))
    {
        myXs[0]-=5;
    }
    if(keyIsDown(83))
    {
        myYs[0]+=5;
    }
    if(keyIsDown(87))
    {
        myYs[0]-=5;
    }
}
function createExit()
{
    fill(0);
    rect(750,400,15,200);
}
function createCircle()
{
    fill(175,25,200);
    for(var i = 0; i < myXs.length; i++)
    {
        fill(Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256));
        circle(myXs[i],myYs[i],myDiameters[i]);
    }
    
}
function createRectangle()
{
    fill(250,0,0);
    rect(myXs[2],myYs[2],myDiameters[2]);
}
function createYouWin()
{
    if(myXs[0] > 750 && myYs[0] >400)
    {
        text('You Win!', 600, 300)
    }
}
function moveCircle()
{
    if(myXs[1] <= 800)
    {
        myXs[1]+=10;
    }
    else
    {
        myXs[1] = -100;
    }
    if(myYs[1] <= 600)
    {
        myYs[1]+=3;
    }
    else
    {
        myYs[1] = -100;
    }
}
function moveRectangle()
{
    if(myXs[2] >= -20)
    {
        myXs[2]+=-5;
    }
    else
    {
        myXs[2] = 900
    }
    if(myYs[2] <= 600)
    {
        myYs[2]+=7;
    }
    else
    {
        myYs[2] = -100
    }
}
function createMouseCircle()
{
    fill(0)
    circle(mousex,mousey,25);
}
function changeCircleDiameter()
{
    
    if(myDiameters[1] <= 200)
    {
        myDiameters[1]+=5;
    }
    else if(myDiameters[1] > 200 && myDiameters[1] <=400)
    {
        myDiameters[1]+=3;
    }
    else if(myDiameters[1] > 400)
    {
        myDiameters[1] = 25;
    }
}

function getRandomX(x)
    {
        return Math.floor(Math.random()*x)+10;
    }

    function getRandomY(y)
    {
        return Math.floor(Math.random()*y) + 10;
    }

    function getRandomDiameter(diameter)
    {
        return Math.floor(Math.random()*diameter)+10
    }