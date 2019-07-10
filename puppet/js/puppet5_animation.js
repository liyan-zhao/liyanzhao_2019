// $(function(){
// 	$('#title').okshadow({
//   color: '#999',
//   textShadow: true,
//   xMax: 200,
//   yMax: 200,
//   yOffset: 0,
//   fuzzMin: 5,
//   fuzzMax: 12,
// });
// });


$(document).mousemove(function() {
    $("#instructionsbg").hide();  
});

// -------------------PLAY ANIMATION---------------------

function animate( time ) {
	requestAnimationFrame( animate );
	TWEEN.update( time );
}

animate();

document.getElementById('playbutton').onclick = function () {
	$("#keyframes").css('filter', 'blur(1px)');
	$("#freezebutton").hide();
	$("#playbutton").hide();
	$("#keyframes").hide();
	$("#resetbutton").css('visibility', 'visible');
	$("#prev").css('color', '#b2a17b');
	$("#prev").css('mix-blend-mode', 'difference');

	var audio = document.getElementById("audio");
	audio.currentTime = Math.floor(Math.random() * (382));
	audio.loop = true;
    audio.play();

	// $("#arrayLength").html("Pose number: " + poses);
	positionpuppet = {x: posX[0], y: posY[0]};
	puppet = document.getElementById('puppet');
	var tweenpuppet = {};
	for (var i = 0; i < poses; i++) {
		tweenpuppet[i] = new TWEEN.Tween(positionpuppet)
		.to({x: posX[i], y: posY[i]}, 2000)
		.delay(1000)
		.onUpdate(updatepuppet);
	}	
	for (var i = 0; i < poses-1; i++) {
		tweenpuppet[i].chain(tweenpuppet[i+1]);
	}
	tweenpuppet[poses-1].chain(tweenpuppet[0]);
	tweenpuppet[0].start();


	head = document.getElementById('headrot');
	positionhead = {rotation: angleH[0]};
	var tweenhead = {};
	for (var i = 0; i < poses; i++) {
		tweenhead[i] = new TWEEN.Tween(positionhead)
		.to({rotation: angleH[i]}, 2000)
		.delay(1000)
		.onUpdate(updatehead);
	}	
	for (var i = 0; i < poses-1; i++) {
		tweenhead[i].chain(tweenhead[i+1]);
	}
	tweenhead[poses-1].chain(tweenhead[0]);
	tweenhead[0].start();

}

function updatepuppet() {
	puppet.style.left = positionpuppet.x + 'px';
	puppet.style.top = positionpuppet.y + 'px';
	puppet.style.webkitTransform = 'rotate(' + Math.floor(positionpuppet.rotation) + 'deg)';
}

function updatehead() {
	head.style.transformOrigin = '231px 337px'
	head.style.webkitTransform = 'rotate(' + Math.floor(positionhead.rotation) + 'deg)';
}

