(function(module){
  var repoData = {};
  repoData.all = [];
  repoData.grabRepo = function (callback){
    $.ajax({
      url: 'https://api.github.com/users/ishidas/repos' + '?per_page=5&sort=updated',
      type: 'GET',
      headers: {'Authorization': 'token ' + GITHUB_TOKEN },
      success: function(data,message,xhr){
        repoData.all = data;
        console.log(repoData.all);
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
