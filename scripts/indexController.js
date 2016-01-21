(function(module){
  var indexController = {};
  indexController.index = function (){
    $('body section').hide();
    $('#home').show();
  }

window.indexController = indexController;
})(window);
