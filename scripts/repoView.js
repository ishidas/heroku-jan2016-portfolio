(function(module){
  var repoView = {};

    // $(repoData).map(function(repo){
    //   console.log(repo);

  var render = function(repo){
    var section = document.createElement('section');
    console.log(repo);
    $(section).html('<h4>'+ repo.name + '</h4><br><p>' + repo.description + '</p>');
    console.log(section);
    return section;
  };


  repoView.index = function(){
    $('#edu').append(
      repoData.with('name').map(render)
    );
    console.log(render);
  };

  window.repoView = repoView;
})(window);
