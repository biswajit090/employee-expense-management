AOS.init();
$(".sign-in").on("click", function(){
  if($(".id")[0].value === "alex" && $(".psd")[0].value === "424"){
    window.location.href = "landing-page.html";
  }
  else{
    $(".id").before("<p class='wrong'>Enter the right credentials!</p>");
  }
});


$(".sign-up").on("click", function(){
  window.location.href = "login.html";
});
