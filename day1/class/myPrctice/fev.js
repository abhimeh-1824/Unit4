const move = require("./movi");

const song = require("./song");

function both(){
    return`My fevrate song is ${song()} and first Movie is ${move.movie1()}& second movie is ${move.movie2()}`;
}

console.log(both())