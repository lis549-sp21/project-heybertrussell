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
      $("button").css({"background-color": "black", "color": "black"});
      $("nav").before('<div class="cops">Nothing to see here, officer<br><br><span style="font-size:100px">&#128519;</span></div>');
  });
  });