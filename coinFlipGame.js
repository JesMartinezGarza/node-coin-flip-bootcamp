// Goal: Create a simple web application that uses the fs and http modules. Use http to create the server and fs to read your html file. Include vanilla ES6 js in a script tag at the bottom of your html file. Try creating a coin flip guessing game

//http to create the server
//fs to read your html file
let chosenHeads = document.querySelector('#headsPic');
let chosenTails = document.querySelector('#tailsPic');


chosenHeads.addEventListener('click', flipForHeads)

chosenTails.addEventListener('click', flipForTails)


let face = '';

function flipForHeads(){
    let i = Math.random();
    if(i <= .5000){
        face = 'tails';
        alert("The coin fell on tails...trust me. Try again!");
    }else if(i > .5000){
        face = 'heads';
        alert("You won, the coin fell on heads!");
    }
}

function flipForTails(){
    let i = Math.random();
    if(i <= .5000){
        face = 'tails';
        alert("You won, the coin fell on tails!");
    }else if(i > .5000){
        face = 'heads';
        alert("The coin fell on heads...trust me. Try again!");
    }
}


const http = require('http')
const fs = require('fs')
http.createServer((req, res) => {
  fs.readFile('coinFlipGame.html', (err, data) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(data)
    res.end()
  })
}).listen(4000)