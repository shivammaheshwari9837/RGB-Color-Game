var number = 6;

var color = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var colorPicked = colorPick();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    number = 3;
    //Generating array of random colors
    color = generateRandomColors(number);

    //Picking up a random color from color array
    colorPicked = colorPick();

    //change color display 
    colorDisplay.textContent = colorPicked;

    for(var i=0; i<squares.length; ++i)
    {
        if(color[i])
        {
            squares[i].style.backgroundColor = color[i];
        }
        else
        {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click",function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");

    number = 6;
     //Generating array of random colors
     color = generateRandomColors(number);

     //Picking up a random color from color array
     colorPicked = colorPick();
 
     //change color display 
     colorDisplay.textContent = colorPicked;
     
 
     for(var i=0; i<squares.length; ++i)
     {
        squares[i].style.backgroundColor = color[i];
        squares[i].style.display = "block";
     }

});


reset.addEventListener("click",function(){
    //Generating array of random colors
    color = generateRandomColors(number);

    //Picking up a random color from color array
    colorPicked = colorPick();


    message.textContent = " ";
    reset.textContent = "New Colors";

    //change color display 
    colorDisplay.textContent = colorPicked;

    //Displaying Blocks with random colors
    for(var i=0; i<squares.length ;++i)
    {
        squares[i].style.backgroundColor = color[i];
    }
    h1.style.backgroundColor = "steelblue";
});

colorDisplay.textContent = colorPicked;

for(var i=0; i<squares.length ; ++i)
{
    // setting the color of the blocks
    squares[i].style.backgroundColor = color[i];

    //adding the click event on each block
    squares[i].addEventListener("click",function(){

        // grabbing the color of the clicked event
        var clickedColor = this.style.backgroundColor

        //matching the clicked color with questioning color
        if(clickedColor === colorPicked)
        {
            message.textContent = "Correct";
            colorChange(clickedColor);
            h1.style.backgroundColor = colorPicked;
            reset.textContent = "Play Again?"

        }
        else
        {
            this.style.backgroundColor = "#232323";
            message.textContent = "Try Again";
        }
    });
}

//function to change all colors 
function colorChange(coloring)
{
    for(var i=0; i<squares.length; ++i)
    {
        squares[i].style.backgroundColor = coloring;
    }
}

//Picking up a random color
function colorPick(){
    var random_color = Math.floor(Math.random() * color.length);
    return color[random_color];
}

//Genarating Random Colors
function generateRandomColors(num)
{
    //Create an array
    var arr = [];
    //Looping through the array
    for(var i=0;i<num;++i)
    {
        arr.push(randomColor());
    }
    //return the array
    return arr;
}

function randomColor()
{
    //pick a random color for red
    var r = Math.floor(Math.random()*256);

    //pick a random color for green
    var g = Math.floor(Math.random()*256);

    //pick a random color for blue
    var b = Math.floor(Math.random()*256);

    // "rgb(r, g, b)"
    return "rgb(" + r + ", " + g + ", " + b + ")";
}