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


	toptorso = document.getElementById('toptorsorot');
	positiontoptorso = {rotation: angleTT[0]};
	var tweentoptorso = {};
	for (var i = 0; i < poses; i++) {
		tweentoptorso[i] = new TWEEN.Tween(positiontoptorso)
		.to({rotation: angleTT[i]}, 2000)
		.delay(1000)
		.onUpdate(updatetoptorso);
	}	
	for (var i = 0; i < poses-1; i++) {
		tweentoptorso[i].chain(tweentoptorso[i+1]);
	}
	tweentoptorso[poses-1].chain(tweentoptorso[0]);
	tweentoptorso[0].start();


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


	rightshoulder = document.getElementById('rightshoulderrot');
	positionrightshoulder = {rotation: angleRS[0]};
	var tweenrightshoulder = {};
	for (var i = 0; i < poses; i++) {
		tweenrightshoulder[i] = new TWEEN.Tween(positionrightshoulder)
		.to({rotation: angleRS[i]}, 2000)
		.delay(1000)
		.onUpdate(updaterightshoulder);
	}	
	for (var i = 0; i < poses-1; i++) {
		tweenrightshoulder[i].chain(tweenrightshoulder[i+1]);
	}
	tweenrightshoulder[poses-1].chain(tweenrightshoulder[0]);
	tweenrightshoulder[0].start();


	rightarm = document.getElementById('rightarmrot');
	positionrightarm = {rotation: angleRA[0]};
	var tweenrightarm = {};
	for (var i = 0; i < poses; i++) {
		tweenrightarm[i] = new TWEEN.Tween(positionrightarm)
		.to({rotation: angleRA[i]}, 2000)
		.delay(1000)
		.onUpdate(updaterightarm);
	}	
	for (var i = 0; i < poses-1; i++) {
		tweenrightarm[i].chain(tweenrightarm[i+1]);
	}
	tweenrightarm[poses-1].chain(tweenrightarm[0]);
	tweenrightarm[0].start();


	righthand = document.getElementById('righthandrot');
	positionrighthand = {rotation: angleRH[0]};
	var tweenrighthand = {};
	for (var i = 0; i < poses; i++) {
		tweenrighthand[i] = new TWEEN.Tween(positionrighthand)
		.to({rotation: angleRH[i]}, 2000)
		.delay(1000)
		.onUpdate(updaterighthand);
	}	
	for (var i = 0; i < poses-1; i++) {
		tweenrighthand[i].chain(tweenrighthand[i+1]);
	}
	tweenrighthand[poses-1].chain(tweenrighthand[0]);
	tweenrighthand[0].start();


	bottomtorso = document.getElementById('bottomtorsorot');
	positionbottomtorso = {rotation: angleBT[0]};
	var tweenbottomtorso = {};
	for (var i = 0; i < poses; i++) {
		tweenbottomtorso[i] = new TWEEN.Tween(positionbottomtorso)
		.to({rotation: angleBT[i]}, 2000)
		.delay(1000)
		.onUpdate(updatebottomtorso);
	}	
	for (var i = 0; i < poses-1; i++) {
		tweenbottomtorso[i].chain(tweenbottomtorso[i+1]);
	}
	tweenbottomtorso[poses-1].chain(tweenbottomtorso[0]);
	tweenbottomtorso[0].start();


	leftleg = document.getElementById('leftlegrot');
	positionleftleg = {rotation: angleLL[0]};
	var tweenleftleg = {};
	for (var i = 0; i < poses; i++) {
		tweenleftleg[i] = new TWEEN.Tween(positionleftleg)
		.to({rotation: angleLL[i]}, 2000)
		.delay(1000)
		.onUpdate(updateleftleg);
	}	
	for (var i = 0; i < poses-1; i++) {
		tweenleftleg[i].chain(tweenleftleg[i+1]);
	}
	tweenleftleg[poses-1].chain(tweenleftleg[0]);
	tweenleftleg[0].start();


	rightleg = document.getElementById('rightlegrot');
	positionrightleg = {rotation: angleRL[0]};
	var tweenrightleg = {};
	for (var i = 0; i < poses; i++) {
		tweenrightleg[i] = new TWEEN.Tween(positionrightleg)
		.to({rotation: angleRL[i]}, 2000)
		.delay(1000)
		.onUpdate(updaterightleg);
	}	
	for (var i = 0; i < poses-1; i++) {
		tweenrightleg[i].chain(tweenrightleg[i+1]);
	}
	tweenrightleg[poses-1].chain(tweenrightleg[0]);
	tweenrightleg[0].start();

}

function updatepuppet() {
	puppet.style.left = positionpuppet.x + 'px';
	puppet.style.top = positionpuppet.y + 'px';
	puppet.style.webkitTransform = 'rotate(' + Math.floor(positionpuppet.rotation) + 'deg)';
}

function updatehead() {
	head.style.transformOrigin = '353px 158px'
	head.style.webkitTransform = 'rotate(' + Math.floor(positionhead.rotation) + 'deg)';
}

function updatetoptorso() {
	toptorso.style.transformOrigin = '353px 158px'
	toptorso.style.webkitTransform = 'rotate(' + Math.floor(positiontoptorso.rotation) + 'deg)';
}

function updateleftshoulder() {
	// var ox = document.getElementById('leftshoulderjoint').getBoundingClientRect().left;
 	// var oy = document.getElementById('leftshoulderjoint').getBoundingClientRect().top;
	// leftshoulder.style.transformOrigin = ox + 'px ' + oy 'px'
	leftshoulder.style.transformOrigin = '334px 199px'
	leftshoulder.style.webkitTransform = 'rotate(' + Math.floor(positionleftshoulder.rotation) + 'deg)';
}

function updateleftarm() {
	leftarm.style.transformOrigin = '177.5px 199px'
	leftarm.style.webkitTransform = 'rotate(' + Math.floor(positionleftarm.rotation) + 'deg)';
}

function updatelefthand() {
	lefthand.style.transformOrigin = '51.5px 251.5px'
	lefthand.style.webkitTransform = 'rotate(' + Math.floor(positionlefthand.rotation) + 'deg)';
}

function updaterightshoulder() {
	rightshoulder.style.transformOrigin = '334px 199px'
	rightshoulder.style.webkitTransform = 'rotate(' + Math.floor(positionrightshoulder.rotation) + 'deg)';
}

function updaterightarm() {
	rightarm.style.transformOrigin = '494px 198px'
	rightarm.style.webkitTransform = 'rotate(' + Math.floor(positionrightarm.rotation) + 'deg)';
}

function updaterighthand() {
	righthand.style.transformOrigin = '620px 160px'
	righthand.style.webkitTransform = 'rotate(' + Math.floor(positionrighthand.rotation) + 'deg)';
}

function updatebottomtorso() {
	bottomtorso.style.transformOrigin = '350px 327px'
	bottomtorso.style.webkitTransform = 'rotate(' + Math.floor(positionbottomtorso.rotation) + 'deg)';
}

function updateleftleg() {
	leftleg.style.transformOrigin = '298px 449px'
	leftleg.style.webkitTransform = 'rotate(' + Math.floor(positionleftleg.rotation) + 'deg)';
}

function updaterightleg() {
	rightleg.style.transformOrigin = '391px 446px'
	rightleg.style.webkitTransform = 'rotate(' + Math.floor(positionrightleg.rotation) + 'deg)';
}

