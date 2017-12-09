//Objects
function Movie (id, name, newRelease){
  this.id = id;
  this.name = name;
  this.newRelease = newRelease;
}
var movies = [
  new Movie (0, "Sidekicks", false),
  new Movie (1, "Pulp Fiction", false),
  new Movie (2, "Spiderman", true),
  new Movie (3, "Wonder Woman", false)
];

function Ticket (movie, time, age){
  this.movie = movie;
  this.time = time;
  this.age = age;
  this.basePrice = 15;
}

Ticket.prototype.price = function () {
  if (this.movie.newRelease === false) {
     return this.basePrice - 3;
  } else if (this.time < 15) {
    return this.basePrice - 5;
  } else if (this) {

  }
};

//front end
$(document).ready(function(){
  $('#ticket').submit(function(){
    event.preventDefault();
    var movieId = $('#movieName').val();
    var movieTime = $('#movieTime').val();
    var userAge = $('#userAge').val();
    var myMovie = movies[movieId];
    console.log(myMovie);
    myTicket = new Ticket (myMovie, movieTime, userAge)
    console.log(myTicket);
    console.log(myTicket.price());
  });
});
