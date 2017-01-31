// An **apartment's** price should be dynamically calculated based on the
// number of beds ($1000 per bed) and the number of bathrooms ($500 per
// bathroom).

// Example Usage:

// ```js
// let a2 = new Apartment("A", 2, 1);
// a2.price // "$2500"

class Apartment {
  constructor(unit, num_beds, num_baths, tenants) {
    this.unit = unit;
    this._num_beds = num_beds;
    this._num_baths = num_baths;
    this.tenants = tenants;
  }
  set rent(price) {
    this._beds_price = num_beds * 1000;
    this._baths_price = num_baths * 500;
    this._price = this._beds_price + this._baths_price;
    return this._price;
  }
  get rent() {
    return '$' + this._price;
  }
}

module.exports = Apartment;
