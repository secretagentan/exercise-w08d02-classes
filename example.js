// const list = [];
// list.push(1);
// list.push(2);

// class SuperArray extends Array {
//   constructor() {
//     super();
//   }
// }

class Snob extends Array {
  constructor() {
    super();
  }
  pop() {
    // return 'pop';
    console.log('aw snap, crackle');
    super.pop();
  }
  push(number) {
    if (this.includes(number)) return false;
    super.push(number);
  }
}

const list = new Snob(); // new instance of Array
const anotherList = new Snob();
list.push('one');
list.push('two');
list.pop();
list.push('three');
console.log(list.length);
console.log(list);

console.log(Array); // function Array() {};
console.log(Number); // function Number() {};

function Hamster() {}

console.log(typeof Hamster); // function

h = new Hamster();
console.log(h); // Hamster {}
console.log(h.constructor); // Hamster() {}
console.log(h.constructor.prototype); // Hamster {}
h.name = 'Dewey';
console.log(h.name); // Dewey

Hamster.prototype.sayName = function() {
  console.log(this.name + ' says hi');
}
h.sayName(); // Dewey says hi
