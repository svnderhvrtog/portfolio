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