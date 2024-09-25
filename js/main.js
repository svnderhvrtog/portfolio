// Background randomizer
const colors = ['#e7ec6816', '#e9494918', '#15fa8b1c', '#628dd238', '#b880c425', '#8a702924', '#9595952c', '#95c88314', '#564c6814', '#20232014', '#19d96628', '#5fdc5b30', '#3857c81c'];

function setBg() {
    document.body.style.backgroundColor = colors[Math.floor(14*Math.random())];
}