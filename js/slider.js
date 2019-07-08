$(document).ready(function(){

  function cacheImages(array)
{
    if (!cacheImages.list) {
        cacheImages.list = [];
    }
    var list = cacheImages.list;
    for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function() {
            var index = list.indexOf(this);
            if (index !== -1) {
                // remove image from the array once it's loaded
                // for memory consumption reasons
                list.splice(index, 1);
            }
        }
        list.push(img);
        img.src = array[i];
    }
}

cacheImages(["images/01/1.jpg", "images/01/2.jpg", "images/01/3.jpg", "images/02/1.jpg", "images/02/2.jpg", "images/02/4.jpg","images/03/1.jpg", "images/03/4.jpg", "images/03/6.jpg","images/04/1.jpg", "images/04/2.jpg", "images/04/3.jpg","images/05/2.jpg", "images/05/3.jpg", "images/05/4.jpg","images/06/2.jpg", "images/06/3.jpg", "images/06/4.jpg",]);

  var $imgWidth = $('#slider_images1 img').first().outerWidth();//read the image width
  var $imgCount = $('#slider_images1 img').length;//count the images
  $('#slider_images1').width($imgWidth*($imgCount+2));//set the width of the container to the number of images - plus 2 to account for the cloned images
  $('#slider_images1 img').first().addClass('endless_slider_first1');//identify the first and last images
  $('#slider_images1 img').last().addClass('endless_slider_last1');
  $('.endless_slider_first1').clone().appendTo('#slider_images1');//clone the first image and put it at the end
  $('.endless_slider_last1').clone().prependTo('#slider_images1');//clone the last image and put it at the front
  $('#slider_images1').css({'left':-1*$imgWidth+'px'});//reset the slider so the first image is still visible
   
  $('#right1').click(function(){
    $('#slider_images1').stop(true,true);
    var $newLeft = $('#slider_images1').position().left-(1*$imgWidth);//calculate the new position which is the current position minus the width of one image
      var currentPos = Math.abs($newLeft)/$imgWidth;
      var currentCount = Math.round(currentPos);
      if (currentCount > $imgCount) {currentCount = currentCount - $imgCount}
      $('#count1').text(currentCount+'/'+$imgCount);
    $('#slider_images1').animate({'left':$newLeft+'px'},function(){//slide to the new position...
      var currentimg = Math.floor(Math.abs($newLeft));
      var lastimg = Math.floor(($imgCount+1)*$imgWidth);
       if (currentimg == lastimg) //...and if the slider is displaying the last image, which is the clone of the first image...
          {
          $('#slider_images1').css({'left':-1*$imgWidth+'px'});//...reset the slider back to the first image without animating 
          }
       });
    return false;
  });
   
  $('#left1').click(function(){
    $('#slider_images1').stop(true,true); //complete any animation still running  
    var $newLeft = $('#slider_images1').position().left+(1*$imgWidth);//calculate the new position which is the current position plus the width of one image
      var currentPos = Math.abs($newLeft)/$imgWidth;
      var currentCount = Math.round(currentPos);
      if (currentCount < 1) {currentCount = currentCount + $imgCount}
      $('#count1').text(currentCount+'/'+$imgCount);
    $('#slider_images1').animate({'left':$newLeft+'px'},function(){//slide to the new position
      var currentimg = Math.floor(Math.abs($newLeft));
       if (currentimg == (0)) //if the slider is displaying the first image, which is the clone of the last image
          {
          $('#slider_images1').css({'left':-($imgCount)*$imgWidth+'px'});//reset the slider back to the last image without animating 
          }
  });
   return false;
   });
});

$(document).ready(function(){
  var $imgWidth = $('#slider_images2 img').first().outerWidth();
  var $imgCount = $('#slider_images2 img').length;
  $('#slider_images2').width($imgWidth*($imgCount+2));
  $('#slider_images2 img').first().addClass('endless_slider_first2');
  $('#slider_images2 img').last().addClass('endless_slider_last2');
  $('.endless_slider_first2').clone().appendTo('#slider_images2');
  $('.endless_slider_last2').clone().prependTo('#slider_images2');
  $('#slider_images2').css({'left':-1*$imgWidth+'px'});
   
  $('#right2').click(function(){
    $('#slider_images2').stop(true,true);
    var $newLeft = $('#slider_images2').position().left-(1*$imgWidth);
      var currentPos = Math.abs($newLeft)/$imgWidth;
      var currentCount = Math.round(currentPos);
      if (currentCount > $imgCount) {currentCount = currentCount - $imgCount}
      $('#count2').text(currentCount+'/'+$imgCount);
    $('#slider_images2').animate({'left':$newLeft+'px'},function(){
      var currentimg = Math.floor(Math.abs($newLeft));
      var lastimg = Math.floor(($imgCount+1)*$imgWidth);
       if (currentimg == lastimg) 
          {
          $('#slider_images2').css({'left':-1*$imgWidth+'px'});
          }
       });
    return false;
  });
   
  $('#left2').click(function(){
    $('#slider_images2').stop(true,true);  
    var $newLeft = $('#slider_images2').position().left+(1*$imgWidth);
      var currentPos = Math.abs($newLeft)/$imgWidth;
      var currentCount = Math.round(currentPos);
      if (currentCount < 1) {currentCount = currentCount + $imgCount}
      $('#count2').text(currentCount+'/'+$imgCount);
    $('#slider_images2').animate({'left':$newLeft+'px'},function(){
      var currentimg = Math.floor(Math.abs($newLeft));
       if (currentimg == (0))
          {
          $('#slider_images2').css({'left':-($imgCount)*$imgWidth+'px'});
          }
  });
   return false;
   });
});

$(document).ready(function(){
  var $imgWidth = $('#slider_images3 img').first().outerWidth();
  var $imgCount = $('#slider_images3 img').length;
  $('#slider_images3').width($imgWidth*($imgCount+2));
  $('#slider_images3 img').first().addClass('endless_slider_first3');
  $('#slider_images3 img').last().addClass('endless_slider_last3');
  $('.endless_slider_first3').clone().appendTo('#slider_images3');
  $('.endless_slider_last3').clone().prependTo('#slider_images3');
  $('#slider_images3').css({'left':-1*$imgWidth+'px'});
   
  $('#right3').click(function(){
    $('#slider_images3').stop(true,true);
    var $newLeft = $('#slider_images3').position().left-(1*$imgWidth);
      var currentPos = Math.abs($newLeft)/$imgWidth;
      var currentCount = Math.round(currentPos);
      if (currentCount > $imgCount) {currentCount = currentCount - $imgCount}
      $('#count3').text(currentCount+'/'+$imgCount);
    $('#slider_images3').animate({'left':$newLeft+'px'},function(){
      var currentimg = Math.floor(Math.abs($newLeft));
      var lastimg = Math.floor(($imgCount+1)*$imgWidth);
       if (currentimg == lastimg) 
          {
          $('#slider_images3').css({'left':-1*$imgWidth+'px'});
          }
       });
    return false;
  });
   
  $('#left3').click(function(){
    $('#slider_images3').stop(true,true); 
    var $newLeft = $('#slider_images3').position().left+(1*$imgWidth);
      var currentPos = Math.abs($newLeft)/$imgWidth;
      var currentCount = Math.round(currentPos);
      if (currentCount < 1) {currentCount = currentCount + $imgCount}
      $('#count3').text(currentCount+'/'+$imgCount);
    $('#slider_images3').animate({'left':$newLeft+'px'},function(){
      var currentimg = Math.floor(Math.abs($newLeft));
       if (currentimg == (0)) 
          {
          $('#slider_images3').css({'left':-($imgCount)*$imgWidth+'px'});
          }
  });
   return false;
   });
});

$(document).ready(function(){
  var $imgWidth = $('#slider_images4 img').first().outerWidth();
  var $imgCount = $('#slider_images4 img').length;
  $('#slider_images4').width($imgWidth*($imgCount+2));
  $('#slider_images4 img').first().addClass('endless_slider_first4');
  $('#slider_images4 img').last().addClass('endless_slider_last4');
  $('.endless_slider_first4').clone().appendTo('#slider_images4');
  $('.endless_slider_last4').clone().prependTo('#slider_images4');
  $('#slider_images4').css({'left':-1*$imgWidth+'px'});
   
  $('#right4').click(function(){
    $('#slider_images4').stop(true,true);
    var $newLeft = $('#slider_images4').position().left-(1*$imgWidth);
      var currentPos = Math.abs($newLeft)/$imgWidth;
      var currentCount = Math.round(currentPos);
      if (currentCount > $imgCount) {currentCount = currentCount - $imgCount}
      $('#count4').text(currentCount+'/'+$imgCount);
    $('#slider_images4').animate({'left':$newLeft+'px'},function(){
      var currentimg = Math.floor(Math.abs($newLeft));
      var lastimg = Math.floor(($imgCount+1)*$imgWidth);
       if (currentimg == lastimg) 
          {
          $('#slider_images4').css({'left':-1*$imgWidth+'px'});
          }
       });
    return false;
  });
   
  $('#left4').click(function(){
    $('#slider_images4').stop(true,true); 
    var $newLeft = $('#slider_images4').position().left+(1*$imgWidth);
      var currentPos = Math.abs($newLeft)/$imgWidth;
      var currentCount = Math.round(currentPos);
      if (currentCount < 1) {currentCount = currentCount + $imgCount}
      $('#count4').text(currentCount+'/'+$imgCount);
    $('#slider_images4').animate({'left':$newLeft+'px'},function(){
      var currentimg = Math.floor(Math.abs($newLeft));
       if (currentimg == (0)) 
          {
          $('#slider_images4').css({'left':-($imgCount)*$imgWidth+'px'});
          }
  });
   return false;
   });
});

$(document).ready(function(){
  var $imgWidth = $('#slider_images5 img').first().outerWidth();
  var $imgCount = $('#slider_images5 img').length;
  $('#slider_images5').width($imgWidth*($imgCount+2));
  $('#slider_images5 img').first().addClass('endless_slider_first5');
  $('#slider_images5 img').last().addClass('endless_slider_last5');
  $('.endless_slider_first5').clone().appendTo('#slider_images5');
  $('.endless_slider_last5').clone().prependTo('#slider_images5');
  $('#slider_images5').css({'left':-1*$imgWidth+'px'});
   
  $('#right5').click(function(){
    $('#slider_images5').stop(true,true);
    var $newLeft = $('#slider_images5').position().left-(1*$imgWidth);
      var currentPos = Math.abs($newLeft)/$imgWidth;
      var currentCount = Math.round(currentPos);
      if (currentCount > $imgCount) {currentCount = currentCount - $imgCount}
      $('#count5').text(currentCount+'/'+$imgCount);
    $('#slider_images5').animate({'left':$newLeft+'px'},function(){
      var currentimg = Math.floor(Math.abs($newLeft));
      var lastimg = Math.floor(($imgCount+1)*$imgWidth);
       if (currentimg == lastimg) 
          {
          $('#slider_images5').css({'left':-1*$imgWidth+'px'});
          }
       });
    return false;
  });
   
  $('#left5').click(function(){
    $('#slider_images5').stop(true,true); 
    var $newLeft = $('#slider_images5').position().left+(1*$imgWidth);
      var currentPos = Math.abs($newLeft)/$imgWidth;
      var currentCount = Math.round(currentPos);
      if (currentCount < 1) {currentCount = currentCount + $imgCount}
      $('#count5').text(currentCount+'/'+$imgCount);
    $('#slider_images5').animate({'left':$newLeft+'px'},function(){
      var currentimg = Math.floor(Math.abs($newLeft));
       if (currentimg == (0)) 
          {
          $('#slider_images5').css({'left':-($imgCount)*$imgWidth+'px'});
          }
  });
   return false;
   });
});

$(document).ready(function(){
  var $imgWidth = $('#slider_images6 img').first().outerWidth();
  var $imgCount = $('#slider_images6 img').length;
  $('#slider_images6').width($imgWidth*($imgCount+2));
  $('#slider_images6 img').first().addClass('endless_slider_first6');
  $('#slider_images6 img').last().addClass('endless_slider_last6');
  $('.endless_slider_first6').clone().appendTo('#slider_images6');
  $('.endless_slider_last6').clone().prependTo('#slider_images6');
  $('#slider_images6').css({'left':-1*$imgWidth+'px'});
   
  $('#right6').click(function(){
    $('#slider_images6').stop(true,true);
    var $newLeft = $('#slider_images6').position().left-(1*$imgWidth);
      var currentPos = Math.abs($newLeft)/$imgWidth;
      var currentCount = Math.round(currentPos);
      if (currentCount > $imgCount) {currentCount = currentCount - $imgCount}
      $('#count6').text(currentCount+'/'+$imgCount);
    $('#slider_images6').animate({'left':$newLeft+'px'},function(){
      var currentimg = Math.floor(Math.abs($newLeft));
      var lastimg = Math.floor(($imgCount+1)*$imgWidth);
       if (currentimg == lastimg) 
          {
          $('#slider_images6').css({'left':-1*$imgWidth+'px'});
          }
       });
    return false;
  });
   
  $('#left6').click(function(){
    $('#slider_images6').stop(true,true); 
    var $newLeft = $('#slider_images6').position().left+(1*$imgWidth);
      var currentPos = Math.abs($newLeft)/$imgWidth;
      var currentCount = Math.round(currentPos);
      if (currentCount < 1) {currentCount = currentCount + $imgCount}
      $('#count6').text(currentCount+'/'+$imgCount);
    $('#slider_images6').animate({'left':$newLeft+'px'},function(){
      var currentimg = Math.floor(Math.abs($newLeft));
       if (currentimg == (0)) 
          {
          $('#slider_images6').css({'left':-($imgCount)*$imgWidth+'px'});
          }
  });
   return false;
   });
});

$(document).ready(function(){
  var $imgWidth = $('#slider_images7 img').first().outerWidth();
  var $imgCount = $('#slider_images7 img').length;
  $('#slider_images7').width($imgWidth*($imgCount+2));
  $('#slider_images7 img').first().addClass('endless_slider_first7');
  $('#slider_images7 img').last().addClass('endless_slider_last7');
  $('.endless_slider_first7').clone().appendTo('#slider_images7');
  $('.endless_slider_last7').clone().prependTo('#slider_images7');
  $('#slider_images7').css({'left':-1*$imgWidth+'px'});
   
  $('#right7').click(function(){
    $('#slider_images7').stop(true,true);
    var $newLeft = $('#slider_images7').position().left-(1*$imgWidth);
      var currentPos = Math.abs($newLeft)/$imgWidth;
      var currentCount = Math.round(currentPos);
      if (currentCount > $imgCount) {currentCount = currentCount - $imgCount}
      $('#count7').text(currentCount+'/'+$imgCount);
    $('#slider_images7').animate({'left':$newLeft+'px'},function(){
      var currentimg = Math.floor(Math.abs($newLeft));
      var lastimg = Math.floor(($imgCount+1)*$imgWidth);
       if (currentimg == lastimg) 
          {
          $('#slider_images7').css({'left':-1*$imgWidth+'px'});
          }
       });
    return false;
  });
   
  $('#left7').click(function(){
    $('#slider_images7').stop(true,true); 
    var $newLeft = $('#slider_images7').position().left+(1*$imgWidth);
      var currentPos = Math.abs($newLeft)/$imgWidth;
      var currentCount = Math.round(currentPos);
      if (currentCount < 1) {currentCount = currentCount + $imgCount}
      $('#count7').text(currentCount+'/'+$imgCount);
    $('#slider_images7').animate({'left':$newLeft+'px'},function(){
      var currentimg = Math.floor(Math.abs($newLeft));
       if (currentimg == (0)) 
          {
          $('#slider_images7').css({'left':-($imgCount)*$imgWidth+'px'});
          }
  });
   return false;
   });
});

$(document).ready(function(){
  var $imgWidth = $('#slider_images8 img').first().outerWidth();
  var $imgCount = $('#slider_images8 img').length;
  $('#slider_images8').width($imgWidth*($imgCount+2));
  $('#slider_images8 img').first().addClass('endless_slider_first8');
  $('#slider_images8 img').last().addClass('endless_slider_last8');
  $('.endless_slider_first8').clone().appendTo('#slider_images8');
  $('.endless_slider_last8').clone().prependTo('#slider_images8');
  $('#slider_images8').css({'left':-1*$imgWidth+'px'});
   
  $('#right8').click(function(){
    $('#slider_images8').stop(true,true);
    var $newLeft = $('#slider_images8').position().left-(1*$imgWidth);
      var currentPos = Math.abs($newLeft)/$imgWidth;
      var currentCount = Math.round(currentPos);
      if (currentCount > $imgCount) {currentCount = currentCount - $imgCount}
      $('#count8').text(currentCount+'/'+$imgCount);
    $('#slider_images8').animate({'left':$newLeft+'px'},function(){
      var currentimg = Math.floor(Math.abs($newLeft));
      var lastimg = Math.floor(($imgCount+1)*$imgWidth);
       if (currentimg == lastimg) 
          {
          $('#slider_images8').css({'left':-1*$imgWidth+'px'});
          }
       });
    return false;
  });
   
  $('#left8').click(function(){
    $('#slider_images8').stop(true,true); 
    var $newLeft = $('#slider_images8').position().left+(1*$imgWidth);
      var currentPos = Math.abs($newLeft)/$imgWidth;
      var currentCount = Math.round(currentPos);
      if (currentCount < 1) {currentCount = currentCount + $imgCount}
      $('#count8').text(currentCount+'/'+$imgCount);
    $('#slider_images8').animate({'left':$newLeft+'px'},function(){
      var currentimg = Math.floor(Math.abs($newLeft));
       if (currentimg == (0)) 
          {
          $('#slider_images8').css({'left':-($imgCount)*$imgWidth+'px'});
          }
  });
   return false;
   });
});

$(document).ready(function(){
  var $imgWidth = $('#slider_images9 img').first().outerWidth();
  var $imgCount = $('#slider_images9 img').length;
  $('#slider_images9').width($imgWidth*($imgCount+2));
  $('#slider_images9 img').first().addClass('endless_slider_first9');
  $('#slider_images9 img').last().addClass('endless_slider_last9');
  $('.endless_slider_first9').clone().appendTo('#slider_images9');
  $('.endless_slider_last9').clone().prependTo('#slider_images9');
  $('#slider_images9').css({'left':-1*$imgWidth+'px'});
   
  $('#right9').click(function(){
    $('#slider_images9').stop(true,true);
    var $newLeft = $('#slider_images9').position().left-(1*$imgWidth);
      var currentPos = Math.abs($newLeft)/$imgWidth;
      var currentCount = Math.round(currentPos);
      if (currentCount > $imgCount) {currentCount = currentCount - $imgCount}
      $('#count9').text(currentCount+'/'+$imgCount);
    $('#slider_images9').animate({'left':$newLeft+'px'},function(){
      var currentimg = Math.floor(Math.abs($newLeft));
      var lastimg = Math.floor(($imgCount+1)*$imgWidth);
       if (currentimg == lastimg) 
          {
          $('#slider_images9').css({'left':-1*$imgWidth+'px'});
          }
       });
    return false;
  });
   
  $('#left9').click(function(){
    $('#slider_images9').stop(true,true); 
    var $newLeft = $('#slider_images9').position().left+(1*$imgWidth);
      var currentPos = Math.abs($newLeft)/$imgWidth;
      var currentCount = Math.round(currentPos);
      if (currentCount < 1) {currentCount = currentCount + $imgCount}
      $('#count9').text(currentCount+'/'+$imgCount);
    $('#slider_images9').animate({'left':$newLeft+'px'},function(){
      var currentimg = Math.floor(Math.abs($newLeft));
       if (currentimg == (0)) 
          {
          $('#slider_images9').css({'left':-($imgCount)*$imgWidth+'px'});
          }
  });
   return false;
   });
});

$(document).ready(function(){
  var $imgWidth = $('#slider_images10 img').first().outerWidth();
  var $imgCount = $('#slider_images10 img').length;
  $('#slider_images10').width($imgWidth*($imgCount+2));
  $('#slider_images10 img').first().addClass('endless_slider_first10');
  $('#slider_images10 img').last().addClass('endless_slider_last10');
  $('.endless_slider_first10').clone().appendTo('#slider_images10');
  $('.endless_slider_last10').clone().prependTo('#slider_images10');
  $('#slider_images10').css({'left':-1*$imgWidth+'px'});
   
  $('#right10').click(function(){
    $('#slider_images10').stop(true,true);
    var $newLeft = $('#slider_images10').position().left-(1*$imgWidth);
      var currentPos = Math.abs($newLeft)/$imgWidth;
      var currentCount = Math.round(currentPos);
      if (currentCount > $imgCount) {currentCount = currentCount - $imgCount}
      $('#count10').text(currentCount+'/'+$imgCount);
    $('#slider_images10').animate({'left':$newLeft+'px'},function(){
      var currentimg = Math.floor(Math.abs($newLeft));
      var lastimg = Math.floor(($imgCount+1)*$imgWidth);
       if (currentimg == lastimg) 
          {
          $('#slider_images10').css({'left':-1*$imgWidth+'px'});
          }
       });
    return false;
  });
   
  $('#left10').click(function(){
    $('#slider_images10').stop(true,true); 
    var $newLeft = $('#slider_images10').position().left+(1*$imgWidth);
      var currentPos = Math.abs($newLeft)/$imgWidth;
      var currentCount = Math.round(currentPos);
      if (currentCount < 1) {currentCount = currentCount + $imgCount}
      $('#count10').text(currentCount+'/'+$imgCount);
    $('#slider_images10').animate({'left':$newLeft+'px'},function(){
      var currentimg = Math.floor(Math.abs($newLeft));
       if (currentimg == (0)) 
          {
          $('#slider_images10').css({'left':-($imgCount)*$imgWidth+'px'});
          }
  });
   return false;
   });
});

$(document).ready(function(){
  var $imgWidth = $('#slider_images11 img').first().outerWidth();
  var $imgCount = $('#slider_images11 img').length;
  $('#slider_images11').width($imgWidth*($imgCount+2));
  $('#slider_images11 img').first().addClass('endless_slider_first11');
  $('#slider_images11 img').last().addClass('endless_slider_last11');
  $('.endless_slider_first11').clone().appendTo('#slider_images11');
  $('.endless_slider_last11').clone().prependTo('#slider_images11');
  $('#slider_images11').css({'left':-1*$imgWidth+'px'});
   
  $('#right11').click(function(){
    $('#slider_images11').stop(true,true);
    var $newLeft = $('#slider_images11').position().left-(1*$imgWidth);
      var currentPos = Math.abs($newLeft)/$imgWidth;
      var currentCount = Math.round(currentPos);
      if (currentCount > $imgCount) {currentCount = currentCount - $imgCount}
      $('#count11').text(currentCount+'/'+$imgCount);
    $('#slider_images11').animate({'left':$newLeft+'px'},function(){
      var currentimg = Math.floor(Math.abs($newLeft));
      var lastimg = Math.floor(($imgCount+1)*$imgWidth);
       if (currentimg == lastimg) 
          {
          $('#slider_images11').css({'left':-1*$imgWidth+'px'});
          }
       });
    return false;
  });
   
  $('#left11').click(function(){
    $('#slider_images11').stop(true,true); 
    var $newLeft = $('#slider_images11').position().left+(1*$imgWidth);
      var currentPos = Math.abs($newLeft)/$imgWidth;
      var currentCount = Math.round(currentPos);
      if (currentCount < 1) {currentCount = currentCount + $imgCount}
      $('#count11').text(currentCount+'/'+$imgCount);
    $('#slider_images11').animate({'left':$newLeft+'px'},function(){
      var currentimg = Math.floor(Math.abs($newLeft));
       if (currentimg == (0)) 
          {
          $('#slider_images11').css({'left':-($imgCount)*$imgWidth+'px'});
          }
  });
   return false;
   });
});

$(document).ready(function(){
  var $imgWidth = $('#slider_images12 img').first().outerWidth();
  var $imgCount = $('#slider_images12 img').length;
  $('#slider_images12').width($imgWidth*($imgCount+2));
  $('#slider_images12 img').first().addClass('endless_slider_first12');
  $('#slider_images12 img').last().addClass('endless_slider_last12');
  $('.endless_slider_first12').clone().appendTo('#slider_images12');
  $('.endless_slider_last12').clone().prependTo('#slider_images12');
  $('#slider_images12').css({'left':-1*$imgWidth+'px'});
   
  $('#right12').click(function(){
    $('#slider_images12').stop(true,true);
    var $newLeft = $('#slider_images12').position().left-(1*$imgWidth);
      var currentPos = Math.abs($newLeft)/$imgWidth;
      var currentCount = Math.round(currentPos);
      if (currentCount > $imgCount) {currentCount = currentCount - $imgCount}
      $('#count12').text(currentCount+'/'+$imgCount);
    $('#slider_images12').animate({'left':$newLeft+'px'},function(){
      var currentimg = Math.floor(Math.abs($newLeft));
      var lastimg = Math.floor(($imgCount+1)*$imgWidth);
       if (currentimg == lastimg) 
          {
          $('#slider_images12').css({'left':-1*$imgWidth+'px'});
          }
       });
    return false;
  });
   
  $('#left12').click(function(){
    $('#slider_images12').stop(true,true); 
    var $newLeft = $('#slider_images12').position().left+(1*$imgWidth);
      var currentPos = Math.abs($newLeft)/$imgWidth;
      var currentCount = Math.round(currentPos);
      if (currentCount < 1) {currentCount = currentCount + $imgCount}
      $('#count12').text(currentCount+'/'+$imgCount);
    $('#slider_images12').animate({'left':$newLeft+'px'},function(){
      var currentimg = Math.floor(Math.abs($newLeft));
       if (currentimg == (0)) 
          {
          $('#slider_images12').css({'left':-($imgCount)*$imgWidth+'px'});
          }
  });
   return false;
   });
});

$(document).ready(function(){
  var $imgWidth = $('#slider_images13 img').first().outerWidth();
  var $imgCount = $('#slider_images13 img').length;
  $('#slider_images13').width($imgWidth*($imgCount+2));
  $('#slider_images13 img').first().addClass('endless_slider_first13');
  $('#slider_images13 img').last().addClass('endless_slider_last13');
  $('.endless_slider_first13').clone().appendTo('#slider_images13');
  $('.endless_slider_last13').clone().prependTo('#slider_images13');
  $('#slider_images13').css({'left':-1*$imgWidth+'px'});
   
  $('#right13').click(function(){
    $('#slider_images13').stop(true,true);
    var $newLeft = $('#slider_images13').position().left-(1*$imgWidth);
      var currentPos = Math.abs($newLeft)/$imgWidth;
      var currentCount = Math.round(currentPos);
      if (currentCount > $imgCount) {currentCount = currentCount - $imgCount}
      $('#count13').text(currentCount+'/'+$imgCount);
    $('#slider_images13').animate({'left':$newLeft+'px'},function(){
      var currentimg = Math.floor(Math.abs($newLeft));
      var lastimg = Math.floor(($imgCount+1)*$imgWidth);
       if (currentimg == lastimg) 
          {
          $('#slider_images13').css({'left':-1*$imgWidth+'px'});
          }
       });
    return false;
  });
   
  $('#left13').click(function(){
    $('#slider_images13').stop(true,true); 
    var $newLeft = $('#slider_images13').position().left+(1*$imgWidth);
      var currentPos = Math.abs($newLeft)/$imgWidth;
      var currentCount = Math.round(currentPos);
      if (currentCount < 1) {currentCount = currentCount + $imgCount}
      $('#count13').text(currentCount+'/'+$imgCount);
    $('#slider_images13').animate({'left':$newLeft+'px'},function(){
      var currentimg = Math.floor(Math.abs($newLeft));
       if (currentimg == (0)) 
          {
          $('#slider_images13').css({'left':-($imgCount)*$imgWidth+'px'});
          }
  });
   return false;
   });
});

$(document).ready(function(){
  var $imgWidth = $('#slider_images14 img').first().outerWidth();
  var $imgCount = $('#slider_images14 img').length;
  $('#slider_images14').width($imgWidth*($imgCount+2));
  $('#slider_images14 img').first().addClass('endless_slider_first14');
  $('#slider_images14 img').last().addClass('endless_slider_last14');
  $('.endless_slider_first14').clone().appendTo('#slider_images14');
  $('.endless_slider_last14').clone().prependTo('#slider_images14');
  $('#slider_images14').css({'left':-1*$imgWidth+'px'});
   
  $('#right14').click(function(){
    $('#slider_images14').stop(true,true);
    var $newLeft = $('#slider_images14').position().left-(1*$imgWidth);
      var currentPos = Math.abs($newLeft)/$imgWidth;
      var currentCount = Math.round(currentPos);
      if (currentCount > $imgCount) {currentCount = currentCount - $imgCount}
      $('#count14').text(currentCount+'/'+$imgCount);
    $('#slider_images14').animate({'left':$newLeft+'px'},function(){
      var currentimg = Math.floor(Math.abs($newLeft));
      var lastimg = Math.floor(($imgCount+1)*$imgWidth);
       if (currentimg == lastimg) 
          {
          $('#slider_images14').css({'left':-1*$imgWidth+'px'});
          }
       });
    return false;
  });
   
  $('#left14').click(function(){
    $('#slider_images14').stop(true,true); 
    var $newLeft = $('#slider_images14').position().left+(1*$imgWidth);
      var currentPos = Math.abs($newLeft)/$imgWidth;
      var currentCount = Math.round(currentPos);
      if (currentCount < 1) {currentCount = currentCount + $imgCount}
      $('#count14').text(currentCount+'/'+$imgCount);
    $('#slider_images14').animate({'left':$newLeft+'px'},function(){
      var currentimg = Math.floor(Math.abs($newLeft));
       if (currentimg == (0)) 
          {
          $('#slider_images14').css({'left':-($imgCount)*$imgWidth+'px'});
          }
  });
   return false;
   });
});

$(document).ready(function(){
  var $imgWidth = $('#slider_images15 img').first().outerWidth();
  var $imgCount = $('#slider_images15 img').length;
  $('#slider_images15').width($imgWidth*($imgCount+2));
  $('#slider_images15 img').first().addClass('endless_slider_first15');
  $('#slider_images15 img').last().addClass('endless_slider_last15');
  $('.endless_slider_first15').clone().appendTo('#slider_images15');
  $('.endless_slider_last15').clone().prependTo('#slider_images15');
  $('#slider_images15').css({'left':-1*$imgWidth+'px'});
   
  $('#right15').click(function(){
    $('#slider_images15').stop(true,true);
    var $newLeft = $('#slider_images15').position().left-(1*$imgWidth);
      var currentPos = Math.abs($newLeft)/$imgWidth;
      var currentCount = Math.round(currentPos);
      if (currentCount > $imgCount) {currentCount = currentCount - $imgCount}
      $('#count15').text(currentCount+'/'+$imgCount);
    $('#slider_images15').animate({'left':$newLeft+'px'},function(){
      var currentimg = Math.floor(Math.abs($newLeft));
      var lastimg = Math.floor(($imgCount+1)*$imgWidth);
       if (currentimg == lastimg) 
          {
          $('#slider_images15').css({'left':-1*$imgWidth+'px'});
          }
       });
    return false;
  });
   
  $('#left15').click(function(){
    $('#slider_images15').stop(true,true); 
    var $newLeft = $('#slider_images15').position().left+(1*$imgWidth);
      var currentPos = Math.abs($newLeft)/$imgWidth;
      var currentCount = Math.round(currentPos);
      if (currentCount < 1) {currentCount = currentCount + $imgCount}
      $('#count15').text(currentCount+'/'+$imgCount);
    $('#slider_images15').animate({'left':$newLeft+'px'},function(){
      var currentimg = Math.floor(Math.abs($newLeft));
       if (currentimg == (0)) 
          {
          $('#slider_images15').css({'left':-($imgCount)*$imgWidth+'px'});
          }
  });
   return false;
   });
});

$(document).ready(function(){
  var $imgWidth = $('#slider_images16 img').first().outerWidth();
  var $imgCount = $('#slider_images16 img').length;
  $('#slider_images16').width($imgWidth*($imgCount+2));
  $('#slider_images16 img').first().addClass('endless_slider_first16');
  $('#slider_images16 img').last().addClass('endless_slider_last16');
  $('.endless_slider_first16').clone().appendTo('#slider_images16');
  $('.endless_slider_last16').clone().prependTo('#slider_images16');
  $('#slider_images16').css({'left':-1*$imgWidth+'px'});
   
  $('#right16').click(function(){
    $('#slider_images16').stop(true,true);
    var $newLeft = $('#slider_images16').position().left-(1*$imgWidth);
      var currentPos = Math.abs($newLeft)/$imgWidth;
      var currentCount = Math.round(currentPos);
      if (currentCount > $imgCount) {currentCount = currentCount - $imgCount}
      $('#count16').text(currentCount+'/'+$imgCount);
    $('#slider_images16').animate({'left':$newLeft+'px'},function(){
      var currentimg = Math.floor(Math.abs($newLeft));
      var lastimg = Math.floor(($imgCount+1)*$imgWidth);
       if (currentimg == lastimg) 
          {
          $('#slider_images16').css({'left':-1*$imgWidth+'px'});
          }
       });
    return false;
  });
   
  $('#left16').click(function(){
    $('#slider_images16').stop(true,true); 
    var $newLeft = $('#slider_images16').position().left+(1*$imgWidth);
      var currentPos = Math.abs($newLeft)/$imgWidth;
      var currentCount = Math.round(currentPos);
      if (currentCount < 1) {currentCount = currentCount + $imgCount}
      $('#count16').text(currentCount+'/'+$imgCount);
    $('#slider_images16').animate({'left':$newLeft+'px'},function(){
      var currentimg = Math.floor(Math.abs($newLeft));
       if (currentimg == (0)) 
          {
          $('#slider_images16').css({'left':-($imgCount)*$imgWidth+'px'});
          }
  });
   return false;
   });
});

$(document).ready(function(){
  var $imgWidth = $('#slider_images17 img').first().outerWidth();
  var $imgCount = $('#slider_images17 img').length;
  $('#slider_images17').width($imgWidth*($imgCount+2));
  $('#slider_images17 img').first().addClass('endless_slider_first17');
  $('#slider_images17 img').last().addClass('endless_slider_last17');
  $('.endless_slider_first17').clone().appendTo('#slider_images17');
  $('.endless_slider_last17').clone().prependTo('#slider_images17');
  $('#slider_images17').css({'left':-1*$imgWidth+'px'});
   
  $('#right17').click(function(){
    $('#slider_images17').stop(true,true);
    var $newLeft = $('#slider_images17').position().left-(1*$imgWidth);
      var currentPos = Math.abs($newLeft)/$imgWidth;
      var currentCount = Math.round(currentPos);
      if (currentCount > $imgCount) {currentCount = currentCount - $imgCount}
      $('#count17').text(currentCount+'/'+$imgCount);
    $('#slider_images17').animate({'left':$newLeft+'px'},function(){
      var currentimg = Math.floor(Math.abs($newLeft));
      var lastimg = Math.floor(($imgCount+1)*$imgWidth);
       if (currentimg == lastimg) 
          {
          $('#slider_images17').css({'left':-1*$imgWidth+'px'});
          }
       });
    return false;
  });
   
  $('#left17').click(function(){
    $('#slider_images17').stop(true,true); 
    var $newLeft = $('#slider_images17').position().left+(1*$imgWidth);
      var currentPos = Math.abs($newLeft)/$imgWidth;
      var currentCount = Math.round(currentPos);
      if (currentCount < 1) {currentCount = currentCount + $imgCount}
      $('#count17').text(currentCount+'/'+$imgCount);
    $('#slider_images17').animate({'left':$newLeft+'px'},function(){
      var currentimg = Math.floor(Math.abs($newLeft));
       if (currentimg == (0)) 
          {
          $('#slider_images17').css({'left':-($imgCount)*$imgWidth+'px'});
          }
  });
   return false;
   });
});

$(document).ready(function(){
  var $imgWidth = $('#slider_images18 img').first().outerWidth();
  var $imgCount = $('#slider_images18 img').length;
  $('#slider_images18').width($imgWidth*($imgCount+2));
  $('#slider_images18 img').first().addClass('endless_slider_first18');
  $('#slider_images18 img').last().addClass('endless_slider_last18');
  $('.endless_slider_first18').clone().appendTo('#slider_images18');
  $('.endless_slider_last18').clone().prependTo('#slider_images18');
  $('#slider_images18').css({'left':-1*$imgWidth+'px'});
   
  $('#right18').click(function(){
    $('#slider_images18').stop(true,true);
    var $newLeft = $('#slider_images18').position().left-(1*$imgWidth);
      var currentPos = Math.abs($newLeft)/$imgWidth;
      var currentCount = Math.round(currentPos);
      if (currentCount > $imgCount) {currentCount = currentCount - $imgCount}
      $('#count18').text(currentCount+'/'+$imgCount);
    $('#slider_images18').animate({'left':$newLeft+'px'},function(){
      var currentimg = Math.floor(Math.abs($newLeft));
      var lastimg = Math.floor(($imgCount+1)*$imgWidth);
       if (currentimg == lastimg) 
          {
          $('#slider_images18').css({'left':-1*$imgWidth+'px'});
          }
       });
    return false;
  });
   
  $('#left18').click(function(){
    $('#slider_images18').stop(true,true); 
    var $newLeft = $('#slider_images18').position().left+(1*$imgWidth);
      var currentPos = Math.abs($newLeft)/$imgWidth;
      var currentCount = Math.round(currentPos);
      if (currentCount < 1) {currentCount = currentCount + $imgCount}
      $('#count18').text(currentCount+'/'+$imgCount);
    $('#slider_images18').animate({'left':$newLeft+'px'},function(){
      var currentimg = Math.floor(Math.abs($newLeft));
       if (currentimg == (0)) 
          {
          $('#slider_images18').css({'left':-($imgCount)*$imgWidth+'px'});
          }
  });
   return false;
   });
});

