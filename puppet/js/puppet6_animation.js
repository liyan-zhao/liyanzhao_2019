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

function updatetoptorso() {
	toptorso.style.transformOrigin = '408px 184px'
	toptorso.style.webkitTransform = 'rotate(' + Math.floor(positiontoptorso.rotation) + 'deg)';
}

function updateleftshoulder() {
	// var ox = document.getElementById('leftshoulderjoint').getBoundingClientRect().left;
 	// var oy = document.getElementById('leftshoulderjoint').getBoundingClientRect().top;
	// leftshoulder.style.transformOrigin = ox + 'px ' + oy 'px'
	leftshoulder.style.transformOrigin = '536.5px 272px'
	leftshoulder.style.webkitTransform = 'rotate(' + Math.floor(positionleftshoulder.rotation) + 'deg)';
}

function updaterightshoulder() {
	rightshoulder.style.transformOrigin = '573px 241px'
	rightshoulder.style.webkitTransform = 'rotate(' + Math.floor(positionrightshoulder.rotation) + 'deg)';
}

function updatebottomtorso() {
	bottomtorso.style.transformOrigin = '205px 141px'
	bottomtorso.style.webkitTransform = 'rotate(' + Math.floor(positionbottomtorso.rotation) + 'deg)';
}

function updateleftleg() {
	leftleg.style.transformOrigin = '195px 265.5px'
	leftleg.style.webkitTransform = 'rotate(' + Math.floor(positionleftleg.rotation) + 'deg)';
}

function updaterightleg() {
	rightleg.style.transformOrigin = '250.5px 275.5px'
	rightleg.style.webkitTransform = 'rotate(' + Math.floor(positionrightleg.rotation) + 'deg)';
}

