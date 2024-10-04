// Background randomizer
const colors = ['#e7ec6816', '#e9494918', '#15fa8b1c', '#628dd238', '#b880c425', '#8a702924', '#9595952c', '#95c88314', '#564c6814', '#20232014', '#19d96628', '#5fdc5b30', '#3857c81c'];

document.getElementById('backgrbtn').addEventListener('click', setBg);
function setBg() {
    document.body.style.backgroundColor = colors[Math.floor(14*Math.random())];
};

// Zoom function 

// Tracker (nice for mixed bag)
/* 
HTML
<div id="divBox"></div>
<div id="divCoords"></div>

CSS
#divBox {
}

#divCoords {
    position: sticky;
    top: 0;
    z-index: 99;
    color: #5c5c5c43;
    margin-top: 4px;
} 

JS
window.addEventListener('load', function () {
    const box = document.getElementById('divBox');
    const coords = document.getElementById('divCoords');

box.onmousemove = function (e) {
    coords.innerHTML = 'Coordinaten: X : ' + e.clientX + ', Y: ' + e.clientY;
};

});

*/