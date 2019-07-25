/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding: In the global scope, "this" is the window Object. 
* 2. Implicit Binding: The object to the left of the dot is "this". 
* 3. New Binding: "New" is used with constructor functions. In this case, "this" refers to the new object that is created using the constructor function. 
* 4. Explicit Binding: When "apply" or "call" are used, "this" is defined by what goes inside .apply() or .call().
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function goAstros(go) {
    console.log(this);
    return go;
  }
  goAstros("Woooo!");

// Principle 2

// code example for Implicit Binding

const myObj = {
    name: 'Samir',
    speak: function(age) {
      console.log(`My name is ${this.name} and I am ${age} years old.`);
      console.log(this);
    }
  };
  myObj.speak(26);

// Principle 3

// code example for New Binding

  function Standings(standing){
      this.team = 'Astros';
      this.standing = standing;
      this.announce = function(){
          console.log(`The ${this.team} are in ${this.standing} place.`)
      };
  }

  const standingInJuly = new Standings('first');

  standingInJuly.announce();

// Principle 4

// code example for Explicit Binding

function Standings(standing){
    this.team = 'Astros';
    this.standing = standing;
    this.announce = function(){
        console.log(`The ${this.team} are in ${this.standing} place.`)
    };
}

const standingInJuly = new Standings('first');
const standingInApril = new Standings('second');

standingInJuly.announce.call(standingInApril);