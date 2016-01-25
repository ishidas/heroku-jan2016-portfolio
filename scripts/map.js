(function(module){
  var map = {};
  function init(){
    var $mapDiv = $('#map');
    console.log($mapDiv);
    map = new google.maps.Map(($mapDiv), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  }
  module.map = map;
})(window);
