var data = [];
var twil = "portfolio_site/twil.css";

$(document).ready(function() {
  //read data from twil.css
  data = $.csv.toArray(twil);
  $("p").text(data);
  
  //$("ul").hide();
});
