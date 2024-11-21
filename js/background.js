// Background randomizer
let colors = ['#c581811a', '#c596811a', '#c5b3811a', '#b1c5811a', '#81c5881a', '#81c5ad1a', '#81b3c51a', '#8581c51a', '#ac81c51a', '#c581ac1a', '#dcdcdc1a', '#2020201a'];
const randomNumbers = 12;

document.getElementById('backgrbtn').addEventListener('click', setBg);
function setBg() {
    if(!colors.length){
        for(let i = 0; i < randomNumbers; i++){
            colors.push(i)
        }
    }
    const index = [Math.floor(Math.random() * colors.length)];
    const validation = colors[index];

    colors.splice(index, 1);
    
    if(randomNumbers >= 0){
        colors = ['#c581811a', '#c596811a', '#c5b3811a', '#b1c5811a', '#81c5881a', '#81c5ad1a', '#81b3c51a', '#8581c51a', '#ac81c51a', '#c581ac1a', '#dcdcdc1a', '#2020201a'];
    }

    document.body.style.backgroundColor = validation
};

