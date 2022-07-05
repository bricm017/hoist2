//----1---- original 
console.log(hello);
var hello = 'world';
//Prediction: This will return as undefined

//----2----
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//Prediction:output should be magnet
//----3----
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
//Prediction:output should be super cool, because it was the top thing hoisted
//----4----
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//Prediction:should have two outputs, chicken and half-chicken
//----5----
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
//Prediction:output should be an error, mean isn't an actual function, and the other functions dont seem to be in scope
//----6----
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
//Prediction:should have three outputs, rock, r&b, and disco
//----7----
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//Prediction:should have four outputs, san jose, seattle, burbank, and san jose again