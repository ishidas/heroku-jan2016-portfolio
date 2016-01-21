(function(module){
  var aboutController = {};
  checkUpdate();
  aboutController.about = function(){
    $('body section').hide();
    $('#edu').show();
    repoData.grabRepo(repoView.index());
  };
  window.aboutController = aboutController;
})(window);
