// Import your classes here to instantiate them and test them out
const Tenant = require('./lib/tenant');
const Apartment = require('./lib/apartment');

let p1 = new Tenant("David", "Tennant", "December 21st, 1958", "Timelord");
p1.nickname = "'10th Doctor'";
p1.occupation = 'The Doctor';
console.log(p1.fullname);
// p1.name = "Matt Smith";
// p1.nickname = "'11th Doctor'";
// console.log(p1.occupation);
// console.log(p1);
// console.log(p1.fullname);

let p2 = new Tenant();
p2.name = "Rose Tyler";
p2.nickname = "'Bad Wolf'";
p2.type = "Human";
console.log(p2.fullname);

let p3 = new Tenant();
p3.name = "Matt Smith";
p3.nickname = "'11th Doctor'";
p3.occupation = "The Doctor";
p3.type = "Timelord";
console.log(p3.fullname);

let p4 = new Tenant();
p4.name = "Amelia Pond";
p4.nickname = "'Amy'";
p4.type = "Human";
console.log(p4.fullname);

let p5 = new Tenant();
p5.name = "Donna Noble";
p5.nickname = "'DoctorDonna'";
p5.type = "TimeHuman";
console.log(p5.fullname);

let a1 = new Apartment('10a', 1, 1, [p1, p2]);
// console.log(a1);
// console.log(a1.tenants);
console.log(a1.isStudio());
console.log('Apt. 10a has ' + a1.tenants.length + ' tenant(s)');
console.log('10a\'s rent is = ' + a1.rent + '/month');

let a2 = new Apartment('11a', 2, 1, [p3, p4]);
// console.log(a2.tenants);
console.log(a2.isStudio());
console.log('Apt. 11a has ' + a2.tenants.length + ' tenant(s)');
console.log('11a\'s rent is = ' + a2.rent + '/month');

let a3 = new Apartment('10b', 1, 1, [p5]);
// console.log(a3.tenants);
console.log('Apt. 10b has ' + a3.tenants.length + ' tenant(s)');
console.log(a3.isStudio());
console.log('10b\'s rent is = ' + a3.rent + '/month');


// a1.moveIn(p5);
// console.log(a1.tenants);
