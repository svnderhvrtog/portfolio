// Background randomizer
const colors = ['#c581811a', '#c596811a', '#c5b3811a', '#b1c5811a', '#81c5881a', '#81c5ad1a', '#81b3c51a', '#8581c51a', '#ac81c51a', '#c581ac1a', '#dcdcdc1a', '#2020201a'];

document.getElementById('backgrbtn').addEventListener('click', setBg);
function setBg() {
    document.body.style.backgroundColor = colors[Math.floor(12*Math.random())];
};