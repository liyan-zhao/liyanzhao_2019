// ------------ARROW KEY MOVE--------------
/// store key codes and currently pressed ones
var keys = {};
    keys.UP = 38;
    keys.LEFT = 37;
    keys.RIGHT = 39;
    keys.DOWN = 40;
    keys.SPACE = 32;

/// store reference to character's position and element
var puppet = {
  x: 0,
  y: 0,
  speedMultiplier: 6,
  element: document.getElementById("puppet")
};

/// key detection (better to use addEventListener, but this will do)
document.body.onkeyup = 
document.body.onkeydown = function(e){
  if (e.preventDefault) { 
    e.preventDefault();
  }
  else {
    e.returnValue = false; 
  }
  var kc = e.keyCode || e.which;
  keys[kc] = e.type == 'keydown';
};

/// character movement update
var movePuppet = function(dx, dy){
  puppet.x += (dx||0) * puppet.speedMultiplier;
  puppet.y += (dy||0) * puppet.speedMultiplier;
  puppet.element.style.left = puppet.x + 'px';
  puppet.element.style.top = puppet.y + 'px';
};

/// character control
var detectPuppetMovement = function(){
  if ( keys[keys.LEFT] ) {
    movePuppet(-1, 0);
  }
  if ( keys[keys.RIGHT] ) {
    movePuppet(1, 0);
  }
  if ( keys[keys.UP] ) {
    movePuppet(0, -1);
  }
  if ( keys[keys.DOWN] ) {
    movePuppet(0, 1);
  }

  // if( keys[keys.SPACE] ){
  //       $('#puppet').css('transform', 'scaleX(-1)');
  //   }
};

/// update current position on screen
movePuppet();

/// game loop
setInterval(function(){
  detectPuppetMovement();
}, 1000/24);



// ------------MOUSE DRAG ROTATE--------------

$(function () {
    var dragging = false,
        target_wp,
        o_x, o_y, h_x, h_y, last_angle;

    $('#toptorsoclick').mousedown(function (e) {
        h_x = e.pageX;
        h_y = e.pageY; // clicked point
        e.preventDefault();
        e.stopPropagation();
        dragging = true;
        joint = $('#toptorsojoint');
        o_x = joint.offset().left;
        o_y = joint.offset().top; // origin point

        target_wp = $(e.target).closest('#toptorsorot');
        if (!target_wp.data("origin")) target_wp.data("origin", {
            left: target_wp.offset().left,
            top: target_wp.offset().top
        });
        
        last_angle = target_wp.data("last_angle") || 0;
    })

   
    $('#bottomtorsoclick').mousedown(function (e) {
        h_x = e.pageX;
        h_y = e.pageY; // clicked point
        e.preventDefault();
        e.stopPropagation();
        dragging = true;
        joint = $('#bottomtorsojoint');
        o_x = joint.offset().left;
        o_y = joint.offset().top; // origin point

        target_wp = $(e.target).closest('#bottomtorsorot');
        if (!target_wp.data("origin")) target_wp.data("origin", {
            left: target_wp.offset().left,
            top: target_wp.offset().top
        });
        
        last_angle = target_wp.data("last_angle") || 0;
    })

    
    $('#leftlegclick').mousedown(function (e) {
        h_x = e.pageX;
        h_y = e.pageY; // clicked point
        e.preventDefault();
        e.stopPropagation();
        dragging = true;
        joint = $('#leftlegjoint');
        o_x = joint.offset().left;
        o_y = joint.offset().top; // origin point

        target_wp = $(e.target).closest('#leftlegrot');
        if (!target_wp.data("origin")) target_wp.data("origin", {
            left: target_wp.offset().left,
            top: target_wp.offset().top
        });
        
        last_angle = target_wp.data("last_angle") || 0;
    })

    
    $('#rightlegclick').mousedown(function (e) {
        h_x = e.pageX;
        h_y = e.pageY; // clicked point
        e.preventDefault();
        e.stopPropagation();
        dragging = true;
        joint = $('#rightlegjoint');
        o_x = joint.offset().left;
        o_y = joint.offset().top; // origin point

        target_wp = $(e.target).closest('#rightlegrot');
        if (!target_wp.data("origin")) target_wp.data("origin", {
            left: target_wp.offset().left,
            top: target_wp.offset().top
        });
        
        last_angle = target_wp.data("last_angle") || 0;
    })

   
    $('#leftshoulderclick').mousedown(function (e) {
        h_x = e.pageX;
        h_y = e.pageY; // clicked point
        e.preventDefault();
        e.stopPropagation();
        dragging = true;
        joint = $('#leftshoulderjoint');
        target_wp = $(e.target).closest('#leftshoulderrot');
        if (!target_wp.data("origin")) target_wp.data("origin", {
            left: target_wp.offset().left,
            top: target_wp.offset().top
        });
        o_x = joint.offset().left;
        o_y = joint.offset().top; // origin point
        
        last_angle = target_wp.data("last_angle") || 0;
    })

    
    $('#rightshoulderclick').mousedown(function (e) {
        h_x = e.pageX;
        h_y = e.pageY; // clicked point
        e.preventDefault();
        e.stopPropagation();
        dragging = true;
        joint = $('#rightshoulderjoint');
        o_x = joint.offset().left;
        o_y = joint.offset().top; // origin point

        target_wp = $(e.target).closest('#rightshoulderrot');
        if (!target_wp.data("origin")) target_wp.data("origin", {
            left: target_wp.offset().left,
            top: target_wp.offset().top
        });
        
        last_angle = target_wp.data("last_angle") || 0;
    })

    $(document).mousemove(function (e) {
        if (dragging) {
            var s_x = e.pageX,
                s_y = e.pageY; // start rotate point
            if (s_x !== o_x && s_y !== o_y) { //start rotate
                var s_rad = Math.atan2(s_y - o_y, s_x - o_x); // current to origin
                s_rad -= Math.atan2(h_y - o_y, h_x - o_x); // handle to origin
                s_rad += last_angle; // relative to the last one
                var degree = (s_rad * (360 / (2 * Math.PI)));
                var n_x = parseInt(joint.parent("div").css("margin-left")) + parseInt(joint.css("margin-left")), 
                n_y = parseInt(joint.parent("div").css("margin-top")) + parseInt(joint.css("margin-top"));
                target_wp.css('-webkit-transform', 'rotate(' + degree + 'deg)');
                target_wp.css('-webkit-transform-origin', n_x + 'px ' + n_y + 'px');
            }
        }
    }) // end mousemove
    
    $(document).mouseup(function (e) {
        dragging = false
        var s_x = e.pageX,
            s_y = e.pageY;  
        // Saves the last angle for future iterations
        var s_rad = Math.atan2(s_y - o_y, s_x - o_x); // current to origin
        s_rad -= Math.atan2(h_y - o_y, h_x - o_x); // handle to origin
        s_rad += last_angle;
        target_wp.data("last_angle", s_rad);

        // $("#angle").html("Angle: "+ $("#headrot").css('-webkit-transform') );
    })
})


// ----------------------PLAY MODE----------------------

$(function () {
    $('#playbutton').click(function () {
        if($('#lightscreen').css('visibility') != 'visible'){
            $('#lightscreen').css('visibility', 'visible');
            $('.shadowmode').css('filter', 'brightness(10%) blur(12px)');
            $('#playbutton').css('border', '2px solid white');
            $('#playbutton').css('background-color', 'black');
            $('#playbutton').css('color', 'white');
        }
        else{
            // $('#lightscreen').css('visibility', 'hidden');
            // $('.shadowmode').css('filter', 'brightness(100%) blur(0px)');
            // $('#playbutton').css('border', '2px solid black');
            // $('#playbutton').css('background-color', 'white');
            // $('#playbutton').css('color', 'black');
            location.reload();
        }
    })

})

// ---------------------FREEZE MODE-----------------------

var count = 0,
posX = [], posY = [],
angleTT = [], 
angleLS = [], 
angleRS = [], 
angleBT = [], angleLL = [], angleRL = [];
var poses = 0;

$('#freezebutton').click(function() {
    var puppetX = parseInt($('#puppet').offset().left)-window.innerWidth*0.50+360;
    var puppetY = parseInt($('#puppet').offset().top)-window.innerHeight*0.50+260;
    posX[count] = puppetX;
    posY[count] = puppetY;
    posX.toString();
    posY.toString();
    // $("#xArray").html("Puppet X: " + posX);
    // $("#yArray").html("Puppet Y: " + posY);

    var matrixtoptorso = $("#toptorsorot").css('-webkit-transform');
    if(matrixtoptorso !== 'none') {
        var values_toptorso = matrixtoptorso.split('(')[1].split(')')[0].split(',');
        var a_toptorso = values_toptorso[0];
        var b_toptorso = values_toptorso[1];
        var angle_toptorso = Math.round(Math.atan2(b_toptorso, a_toptorso) * (180/Math.PI));
        angleTT[count] = angle_toptorso;
        angleTT.toString();
        // $("#angle_toptorso").html("Top Torso angle: " + angleTT);
    } else { var angle_toptorso = 0; 
        angleTT[count] = angle_toptorso;
        angleTT.toString();
        // $("#angle_toptorso").html("Top Torso angle: " + angleTT);
    }

    var matrixleftshoulder = $("#leftshoulderrot").css('-webkit-transform');
    if(matrixleftshoulder !== 'none') {
        var values_leftshoulder = matrixleftshoulder.split('(')[1].split(')')[0].split(',');
        var a_leftshoulder = values_leftshoulder[0];
        var b_leftshoulder = values_leftshoulder[1];
        var angle_leftshoulder = Math.round(Math.atan2(b_leftshoulder, a_leftshoulder) * (180/Math.PI));
        angleLS[count] = angle_leftshoulder;
        angleLS.toString();
        // $("#angle_leftshoulder").html("Left Shoulder angle: " + angleLS);
    } else { var angle_leftshoulder = 0; 
        angleLS[count] = angle_leftshoulder;
        angleLS.toString();
        // $("#angle_leftshoulder").html("Left Shoulder angle: " + angleLS);
    }

    var matrixrightshoulder = $("#rightshoulderrot").css('-webkit-transform');
    if(matrixrightshoulder !== 'none') {
        var values_rightshoulder = matrixrightshoulder.split('(')[1].split(')')[0].split(',');
        var a_rightshoulder = values_rightshoulder[0];
        var b_rightshoulder = values_rightshoulder[1];
        var angle_rightshoulder = Math.round(Math.atan2(b_rightshoulder, a_rightshoulder) * (180/Math.PI));
        angleRS[count] = angle_rightshoulder;
        angleRS.toString();
        // $("#angle_rightshoulder").html("Right Shoulder angle: " + angleRS);
    } else { var angle_rightshoulder = 0; 
        angleRS[count] = angle_rightshoulder;
        angleRS.toString();
        // $("#angle_rightshoulder").html("Right Shoulder angle: " + angleRS);
    }

    var matrixbottomtorso = $("#bottomtorsorot").css('-webkit-transform');
    if(matrixbottomtorso !== 'none') {
        var values_bottomtorso = matrixbottomtorso.split('(')[1].split(')')[0].split(',');
        var a_bottomtorso = values_bottomtorso[0];
        var b_bottomtorso = values_bottomtorso[1];
        var angle_bottomtorso = Math.round(Math.atan2(b_bottomtorso, a_bottomtorso) * (180/Math.PI));
        angleBT[count] = angle_bottomtorso;
        angleBT.toString();
        // $("#angle_bottomtorso").html("Bottom Torso angle: " + angleBT);
    } else { var angle_bottomtorso = 0; 
        angleBT[count] = angle_bottomtorso;
        angleBT.toString();
        // $("#angle_bottomtorso").html("Bottom Torso angle: " + angleBT);
    }

    var matrixleftleg = $("#leftlegrot").css('-webkit-transform');
    if(matrixleftleg !== 'none') {
        var values_leftleg = matrixleftleg.split('(')[1].split(')')[0].split(',');
        var a_leftleg = values_leftleg[0];
        var b_leftleg = values_leftleg[1];
        var angle_leftleg = Math.round(Math.atan2(b_leftleg, a_leftleg) * (180/Math.PI));
        angleLL[count] = angle_leftleg;
        angleLL.toString();
        // $("#angle_leftleg").html("Left Leg angle: " + angleLL);
    } else { var angle_leftleg = 0; 
        angleLL[count] = angle_leftleg;
        angleLL.toString();
        // $("#angle_leftleg").html("Left Leg angle: " + angleLL);
    }

    var matrixrightleg = $("#rightlegrot").css('-webkit-transform');
    if(matrixrightleg !== 'none') {
        var values_rightleg = matrixrightleg.split('(')[1].split(')')[0].split(',');
        var a_rightleg = values_rightleg[0];
        var b_rightleg = values_rightleg[1];
        var angle_rightleg = Math.round(Math.atan2(b_rightleg, a_rightleg) * (180/Math.PI));
        angleRL[count] = angle_rightleg;
        angleRL.toString();
        // $("#angle_rightleg").html("Right Leg angle: " + angleRL);
    } else { var angle_rightleg = 0; 
        angleRL[count] = angle_rightleg;
        angleRL.toString();
        // $("#angle_rightleg").html("Right Leg angle: " + angleRL);
    }

    poses = posX.length;

    if(posX.length > 1){
        $('#playbutton').css('visibility', 'visible');
    };

    count = count + 1;
    // $("#arrayLength").html("Pose number: " + poses);

    var canvas = document.getElementById("keyframes")
    var ctx=canvas.getContext("2d");
    var kcoord = 3+(poses-1)*window.innerWidth/70;
    ctx.beginPath();
    ctx.moveTo(kcoord, 0);
    ctx.lineTo(kcoord, 39);
    ctx.lineWidth=1+window.innerWidth/700;
    ctx.stroke();
});

// -------------------------CURSOR POSITION--------------------------

// $(document).mousemove(function( event ) {
//     $("#position").html("X: "+ event.pageX +", Y: "+ event.pageY ); 
// });

