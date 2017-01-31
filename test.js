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
p4.name = "Amy Pond";
p4.nickname = "'Amelia'";
p4.type = "Human";
console.log(p4.fullname);

let a1 = new Apartment(10, 1, 1, [p1, p2]);
// console.log(a1);
// console.log(a1.tenants);
console.log(a1.tenants.length);
console.log(a1.rent);

let a2 = new Apartment(11, 2, 1, [p3, p4]);
// console.log(a2.tenants);
console.log(a2.tenants.length);
