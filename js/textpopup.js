// Text popup
const popupContent = document.getElementById('popupContent');

document.getElementById('popupContainer').addEventListener('mouseover', showpop);
document.getElementById('popupContainer').addEventListener('mouseout', nopop);

function showpop() {
    popupContent.style.display = 'block';
};

function nopop() {
    popupContent.style.display = 'none';
};