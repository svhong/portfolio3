$(document).on("click", "#MenuItem", function() {
  if (!$(".Submenu").hasClass("display")) {
    var margin = 20;
    var result = { X: 0, Y: 0 };
    var topMargin = $("#MenuItemCover").width() / 2 - 25;
    var leftMargin = $("#MenuItemCover").width() / 2 - 25;
    var angle = 110;
    $(".Submenu").each(function(k, v) {
      $(this).addClass("display");
      angle = angle + 30;
      result.Y = parseInt(topMargin + 130 * Math.sin((angle * Math.PI) / 180));
      result.X = parseInt(leftMargin + 130 * Math.cos((angle * Math.PI) / 180));
      $(this).animate({
        marginTop: result.Y,
        marginLeft: result.X
      });
    });
  } else {
    $(".Submenu").each(function(k, v) {
      $(this).removeClass("display");
      $(this).animate({
        marginTop: 75,
        marginLeft: 75
      });
    });
  }
});
