$(document).ready(function() {

  function getRandomPosition(element) {
    var sizes = [40,50,60,70,90,110,125,140,160,180]
    var randomX = Math.floor(Math.random()*$(document).height());
    var randomY = Math.floor(Math.random()*$(document).width());
    var randomTilt = (Math.floor(Math.random()*280)+1);
    var randomSz = sizes[Math.floor(Math.random()*sizes.length)];
    return [randomX,randomY,randomTilt,randomSz];
  }

  function ricky() {
    var img = document.createElement('img');
    img.setAttribute("style", "position:absolute;");
    img.setAttribute("src", "/media/ricky.png");
    img.setAttribute("class", "rik");
    document.body.appendChild(img);
    var xy = getRandomPosition(img);
    img.style.top = xy[0] + 'px';
    img.style.left = xy[1] + 'px';
    img.style.height = xy[3]+'px';
    img.style.width = (xy[3]*0.84)+'px';
    img.style.transform = "rotate("+xy[2]+"deg)";
    return img;
  }

  $(document).mousemove(function(event){
    $("#ricka").css({left:event.pageX-60, top:event.pageY-60});
    $("#video").get(0).currentTime = 0;
    ricky();
  });

  var callback = function () {
    $('.rik').remove();
    $('#title').remove();
    $('#video').remove();
    $('button').show();
    $('#end').show();
    $('#ricky').show();
  }

  $("#video").on("ended", callback);
  });

  document.addEventListener("keypress", function(event) {
    if (event.keyCode === 48) {
    $("#video").get(0).currentTime += 20;
    $('.rik').remove();
  }
});
