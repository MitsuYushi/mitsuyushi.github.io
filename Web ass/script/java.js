$(document).ready(function() {
  $("#tokyo").mouseover(function () {
    $("#map").attr("src","../image/Tokyo.jpg")
    $("#map").attr("style","height:50vh;width:100%")
  })
  $("#tokyo").mouseout(function () {
    $("#map").attr("src","")
    $("#map").attr("style","height:0vh;width:0%")
  })
  $("#Fukouka").mouseover(function () {
    $("#map").attr("src","../image/Fukuoka.jpg")
    $("#map").attr("style","height:50vh;width:100%")
  })
  $("#Fukouka").mouseout(function () {
    $("#map").attr("src","")
    $("#map").attr("style","height:0vh;width:0%")
  })
  $("#Niigata").mouseover(function () {
    $("#map").attr("src","../image/Niigata.jpg")
  $("#map").attr("style","height:50vh;width:100%")
  })
  $("#Niigata").mouseout(function () {
    $("#map").attr("src","")
    $("#map").attr("style","height:0vh;width:0%")
  })
});
