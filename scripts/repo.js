(function(module){
  var repoData = {};
  repoData.all = [];
  repoData.grabRepo = function (callback){
    $.ajax({
      url: '/github/users/ishidas/repos?per_page=100&sort=updated',
      type: 'GET',
      success: function(data,message,xhr){
        repoData.all = data;
      }
    })
    .done(callback);
  };

  repoData.grabRepo();
  repoData.with = function(attr){
    return repoData.all.filter(function(repo){
      console.log(repo);
      return repo[attr];
    });
  };
  window.repoData = repoData;
})(window);
