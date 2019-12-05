var swingingFlower = document.getElementsByClassName("swingingFlower");


//tree
var tlswingingFlower = new TimelineMax();
tlswingingFlower.staggerFromTo(swingingFlower, 2, {
  transformOrigin:"0% 100%",
  skewX:"1.5deg",
}, {
  skewX:"-1.5deg",
  repeat: -1,
  yoyo: true,
}, 1);

window.addEventListener('scroll', function() {
	var element = document.querySelector('.intro-text');
	var position = element.getBoundingClientRect();


	// checking for partial visibility
	if(position.top < window.innerHeight && position.bottom >= 0) {
    console.log('Element is partially visible in screen');
    element.classList.add('fadeInUp');
  }
  
  
});