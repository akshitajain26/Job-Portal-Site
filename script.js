var coll= document.getElementsByClassName('toggleBtn');
var i;
$(".cards").click(function() {
  $(".cardBody").hide();
  var cardId = $(this).attr("data-cardId"); 
  $(".cardBody[data-cardId="+cardId+"]").show();
});
$('.close-btn').click(function () {
  $(".collapse").hide();
})
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var collapse = this.nextElementSibling;
    if (collapse.style.display === "block") {
      collapse.style.display = "none";
    } else {
      collapse.style.display = "block";
    }
  });
}
  $(function(){
    if ($(window).width() <= 1024) {
      $('div.nav1').hide();
    $('button.navbar-toggler').on('click', function(){
       $('.hide123, .nav1').toggle();
    });}
  });