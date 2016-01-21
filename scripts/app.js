(function(module){

var schoolObj = [];
var jobObj = [];
var footerFun = [1,9,8,4,0,5,0,8];

function Schools (sth){
  this.schoolName = sth.schoolName;
  this.degree = sth.degree;
  this.major = sth.major;
  this.schoolLink = sth.schoolLink;
  this.status = sth.status
}

//Generating School Info
Schools.prototype.toHTML = function (){
  var $newContentBox = $('article.edutemplate').clone();
  $newContentBox.find('h4').html('School Name: '+ schoolObj.a.schoolName).attr('data-name','eduSchoolName');
  $newContentBox.removeClass('edutemplate');
  $newContentBox.find('[data-major] span').text(this.major);
  $newContentBox.find('[data-degree] span').text(this.degree);
  $newContentBox.find('[data-status] span').text(this.status);
  $newContentBox.find('.edutemplate address a').attr('href',this.schoolLink);
  return $newContentBox;
};

function WorkExp (opt){
  this.companyName = opt.companyName;
  this.companyLink = opt.companyLink;
  this.experience = opt.experience;
}

WorkExp.prototype.displayHtml = function(){
  var appTemplate = $('#entry-template').text();
  var compileTemplate = Handlebars.compile(appTemplate);
  return compileTemplate(this);
};


//setting portfolioingo in localStorage

function update (){
  $.getJSON('data/portfolioinfo.json',function(data, message, xhr){
    localStorage.schoolRaw = JSON.stringify(data);
    localStorage.etag = xhr.getResponseHeader('eTag');
    renderLocalSchoolData();
    });
      renderToHtml();
}


function checkUpdate (){
  $.ajax({
          type: 'HEAD',
          url:  'portfolioinfo.json',
          complete: function(xhr){
            var eTag = xhr.getResponseHeader('eTag');
            if(localStorage.etag !== eTag){
              update();
            } else {
              renderLocalSchoolData();
            }
          }
  });
}
// checkUpdate();



function renderToHtml(){
schoolObj.forEach(function(a){
  var $newContentBox = $('article.edutemplate').clone();
  $newContentBox.find('#eduname').text(a.schoolName);
  $newContentBox.find('[data-major] span').text(a.major);
  $newContentBox.find('[data-degree] span').text(a.degree);
  $newContentBox.find('[data-status] span').text(a.status);
  $newContentBox.find('.edutemplate address a').attr('href',a.schoolLink);
  $newContentBox.removeClass('edutemplate');
  $('#edu').append($newContentBox);
});
}

function renderLocalSchoolData () {
  var getBackShoolObj = JSON.parse(localStorage.getItem('schoolRaw'));
  getBackShoolObj.map(function(x){
    schoolObj.push(x);
  })
  renderToHtml();
}


$('.nav-section img').on('click touchStart',function(){
  if($(window).width() < 640){
  $('.nav-section').find('ul').slideToggle();
} else { $('.nav-section').show(); }
})

function stickyHeaders(){

  var $stickyHeader = $('body > header');
  var $stickableWindow = $(window).scrollTop();
  $(window).on('scroll', function(){
    $stickyHeader.attr('id','sticky');
  })
}
stickyHeaders();

window.schoolObj = schoolObj;
window.checkUpdate = checkUpdate;
})(window)
