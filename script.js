let pixelColor ='White';
const container = document.querySelector('.grid');
let gridAmounts = 16;
window.onload = createGrid(gridAmounts);
let userInput='black';
let selectedColor ='black';

let slider = document.querySelector('#myRange')

function pixelSize() {
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.remove());
    createGrid(slider.value);
}

function colorSelected (element)
{return selectedColor = element.value;}

//I don't think im using this function here, so I can probably delete this;
function setColorRandom()
{this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;}

function createGrid(gridAmounts)
{
   
let gridHXW = gridAmounts * gridAmounts;
for (let i = 1; i <= gridHXW; i++)
{
let gridItem = document.createElement('div');
container.style.gridTemplateColumns = `repeat(${gridAmounts}, 1fr)`;
container.style.gridTemplateRows = `repeat(${gridAmounts}, 1fr)`;
container.insertAdjacentElement('beforeend',gridItem);

}
console.log(gridHXW);
var gridPixels = container.querySelectorAll('div');
gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', colorGrid));
}

function colorGrid()
{   
if(userInput === 'black')
 {this.style.backgroundColor = 'black';}
if(userInput ==='rainbow')
{{this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;}}
if(userInput === 'eraser')
 {this.style.backgroundColor = 'white';}
if(userInput === 'userPick')
{this.style.backgroundColor = selectedColor;}


}


   


function setColorBlack()
{ return  userInput = 'black';
}

function rainbowColor()
{ return userInput = 'rainbow';}

function eraserColor()
{ return userInput = 'eraser';}

function userPicks()
{return userInput = 'userPick'}

function clearColor()
{
    let clearPixels = container.querySelectorAll('div');
clearPixels.forEach(clearPixel => clearPixel.style.backgroundColor = 'white');
}        

slider.addEventListener('mouseup', pixelSize);

