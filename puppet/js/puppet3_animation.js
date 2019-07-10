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


	leftshoulder = document.getElementById('leftshoulderrot');
	positionleftshoulder = {rotation: angleLS[0]};
	var tweenleftshoulder = {};
	for (var i = 0; i < poses; i++) {
		tweenleftshoulder[i] = new TWEEN.Tween(positionleftshoulder)
		.to({rotation: angleLS[i]}, 2000)
		.delay(1000)
		.onUpdate(updateleftshoulder);
	}	
	for (var i = 0; i < poses-1; i++) {
		tweenleftshoulder[i].chain(tweenleftshoulder[i+1]);
	}
	tweenleftshoulder[poses-1].chain(tweenleftshoulder[0]);
	tweenleftshoulder[0].start();


	leftarm = document.getElementById('leftarmrot');
	positionleftarm = {rotation: angleLA[0]};
	var tweenleftarm = {};
	for (var i = 0; i < poses; i++) {
		tweenleftarm[i] = new TWEEN.Tween(positionleftarm)
		.to({rotation: angleLA[i]}, 2000)
		.delay(1000)
		.onUpdate(updateleftarm);
	}	
	for (var i = 0; i < poses-1; i++) {
		tweenleftarm[i].chain(tweenleftarm[i+1]);
	}
	tweenleftarm[poses-1].chain(tweenleftarm[0]);
	tweenleftarm[0].start();


	lefthand = document.getElementById('lefthandrot');
	positionlefthand = {rotation: angleLH[0]};
	var tweenlefthand = {};
	for (var i = 0; i < poses; i++) {
		tweenlefthand[i] = new TWEEN.Tween(positionlefthand)
		.to({rotation: angleLH[i]}, 2000)
		.delay(1000)
		.onUpdate(updatelefthand);
	}	
	for (var i = 0; i < poses-1; i++) {
		tweenlefthand[i].chain(tweenlefthand[i+1]);
	}
	tweenlefthand[poses-1].chain(tweenlefthand[0]);
	tweenlefthand[0].start();

}

function updatepuppet() {
	puppet.style.left = positionpuppet.x + 'px';
	puppet.style.top = positionpuppet.y + 'px';
	puppet.style.webkitTransform = 'rotate(' + Math.floor(positionpuppet.rotation) + 'deg)';
}

function updateleftshoulder() {
	// var ox = document.getElementById('leftshoulderjoint').getBoundingClientRect().left;
 	// var oy = document.getElementById('leftshoulderjoint').getBoundingClientRect().top;
	// leftshoulder.style.transformOrigin = ox + 'px ' + oy 'px'
	leftshoulder.style.transformOrigin = '474px 86px'
	leftshoulder.style.webkitTransform = 'rotate(' + Math.floor(positionleftshoulder.rotation) + 'deg)';
}

function updateleftarm() {
	leftarm.style.transformOrigin = '474px 86px'
	leftarm.style.webkitTransform = 'rotate(' + Math.floor(positionleftarm.rotation) + 'deg)';
}

function updatelefthand() {
	lefthand.style.transformOrigin = '288px 84px'
	lefthand.style.webkitTransform = 'rotate(' + Math.floor(positionlefthand.rotation) + 'deg)';
}
