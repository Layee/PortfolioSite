$(document).ready(function(){
  $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });
});


var person = {
  name:'Abraham',
  Age: 21,
  Treehouse: true,
  Country:'Liberia',
  FavoriteMovie: 'Ninja Assassin',
  sport:'Soccer',
  college:'College Of Staten',
  City:'New York',
  DatingStatue:'Single',    
};

for(var key in person) {
    console.log(key +':'+person[key]);
}

var person = {
  name : 'Sarah',
  country : 'US',
  age : 35,
  treehouseStudent : true,
  skills : ['JavaScript', 'HTML', 'CSS']
};

for (prop in person) {
  console.log(prop + ': ' + person[prop]); // it should be like this.
}
var isAdmin = false;
var inStudent = false;

if (isAdmin === false && inStudent === false) {
     console.log("Admind and Student are true")
}
  else {
   alert("Welcome Student and Admin")
}