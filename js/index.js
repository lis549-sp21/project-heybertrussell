function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
  }


  $(document).ready(function(){
    $("button").click(function(){
      $("p").css({"background-color": "black", "color": "black"});
      $("li").css({"background-color": "black", "color": "black"});
      $("h1").css({"background-color": "black", "color": "black"});
      $("h2").css({"background-color": "black", "color": "black"});
      $("h3").css({"background-color": "black", "color": "black"});
      $("h4").css({"background-color": "black", "color": "black"});
      $("h5").css({"background-color": "black", "color": "black"});
      $("button").css({"background-color": "black", "color": "black"});
      $(".grid-item-l").css({"background-color": "black", "color": "black"});
      $(".grid-item-r").css({"background-color": "black", "color": "black"});
      $("img").css({"visibility":"hidden"});
      $("nav").before('<div class="cops">Nothing to see here, officer<br><br><span style="font-size:100px">&#128519;</span></div>');
  });
  });



  //$("img").css({"position": "absolute","bottom": "100%","left": "0","right": "0","background-color": "#008CBA","overflow": "hidden","width": "100%","height": "0","transition": ".5s ease"});