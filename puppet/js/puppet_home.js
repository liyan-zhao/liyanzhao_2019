$(function(){
	$('#abouttext').okshadow({
  color: '#777',
  textShadow: true,
  xMax: 200,
  yMax: 200,
  yOffset: -15,
  fuzzMin: 10,
  fuzzMax: 12,
});
});

// $(function(){
// 	$('#rightarrow').okshadow({
//   color: '#555',
//   textShadow: true,
//   xMax: 0,
//   yMax: 0,
//   yOffset: 0,
//   fuzzMin: 5,
//   fuzzMax: 12,
// });
// });

// $(function(){
// 	$('#leftarrow').okshadow({
//   color: '#555',
//   textShadow: true,
//   xMax: 0,
//   yMax: 0,
//   yOffset: 0,
//   fuzzMin: 5,
//   fuzzMax: 12,
// });
// });

$(document).ready(function(){
   $('#pageBg').mousemove(function(e){
      var mousePosX = (e.pageX/$(window).width())*100;
      $('#pageBg').css('background-position-x', mousePosX +'%');
      var mousePosY = (e.pageY/$(window).height())*100;
      $('#pageBg').css('background-position-y', mousePosY +'%');
      console.log(mousePosX, mousePosY);
   }); 
});

// function myFunction(x) {
//     x.classList.toggle("change");
//     if (window.getComputedStyle(document.getElementById("bar2")).getPropertyValue("opacity") == 0) {
//       // alert("menu");
//       document.getElementById("title").style.visibility = "visible";
//     }
//     else {
//       // alert("title");  
//       document.getElementById("title").style.visibility = "hidden";
//     };
// }

