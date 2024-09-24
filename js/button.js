// Button transform (code by Maxim Verhoef)
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