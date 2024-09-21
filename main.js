// Collapse menu (code written by Takuya Matsuyama)
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

// Mouse effect (code written by Maxim Verhoef)
var targetIsCursor = (s, o = document) => o.querySelector(s);
var targetIsButton = (s, o = document) => o.querySelectorAll(s);

targetIsButton('.magnetic').forEach(el => el.addEventListener('mousemove', function(e) {
  var pos = this.getBoundingClientRect();
  var mx = e.clientX - pos.left - pos.width/2; 
  var my = e.clientY - pos.top - pos.height/2;
   
  this.style.transform = 'translate('+ mx * 0.15 +'px, '+ my * 0.3 +'px)';
  this.children[0].style.transform = 'translate('+ mx * 0.025 +'px, '+ my * 0.075 +'px)';
}));

targetIsButton('.magnetic').forEach(el => el.addEventListener('mouseleave', function() {
  this.style.transform = 'translate3d(0px, 0px, 0px)';
  this.children[0].style.transform = 'translate3d(0px, 0px, 0px)';
}));