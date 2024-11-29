// Text popup
const popupContent = document.getElementById('popupContent');

document.getElementById('popupContainer').addEventListener('mouseover', () => {
    popupContent.style.display = 'block';
});
document.getElementById('popupContainer').addEventListener('mouseout', () => {
    popupContent.style.display = 'none';
});