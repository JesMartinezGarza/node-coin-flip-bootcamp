// Goal: Create a simple web application that uses the fs and http modules. Use http to create the server and fs to read your html file. Include vanilla ES6 js in a script tag at the bottom of your html file. Try creating a coin flip guessing game


let chosenHeads = document.querySelector('#headsPic');
let chosenTails = document.querySelector('#tailsPic');


chosenHeads.addEventListener('click', flipForHeads)

chosenTails.addEventListener('click', flipForTails)


let face = '';

document.querySelector('h3').innerText = 'Past Choices: ' + localStorage.getItem('choices')


async function flipForHeads(){
    document.querySelector('h4').innerText = 'Side that you chose: Heads'

    let choices;

    if(localStorage.getItem('choices') === null){
        choices = 'heads'
    }else
        choices = localStorage.getItem('choices') + " ; " + 'heads'
    localStorage.setItem('choices', choices)
    document.querySelector('h3').innerText = 'Past Choices: ' + localStorage.getItem('choices')
    let i = Math.random();
    if(i <= .5000){
        face = 'tails';
        document.querySelector('h5').innerText = "The coin fell on tails...trust me. Try again!"
        document.querySelector('h2').innerText = 'Coin landed on: Tails'
    }else if(i > .5000){
        face = 'heads';
        document.querySelector('h5').innerText =    "You won, the coin fell on heads!"
        document.querySelector('h2').innerText = 'Coin landed on: Heads'
    }
}

async function flipForTails(){
    document.querySelector('h4').innerText = 'Side that you chose: Tails'

    let choices;

    if(localStorage.getItem('choices') === null){
        choices = 'tails'
    }else
        choices = localStorage.getItem('choices') + " ; " + 'tails'
    localStorage.setItem('choices', choices)
    document.querySelector('h3').innerText = 'Past Choices: ' + localStorage.getItem('choices')
    let i = Math.random();
    if(i <= .5000){
        face = 'tails';
        document.querySelector('h5').innerText =    "You won, the coin fell on tails!"
        document.querySelector('h2').innerText = 'Coin landed on: Tails'
    }else if(i > .5000){
        face = 'heads';
        document.querySelector('h5').innerText = "The coin fell on heads...trust me. Try again!"
        document.querySelector('h2').innerText = 'Coin landed on: Heads'
    }
}