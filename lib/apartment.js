class Apartment {
  constructor(unit, num_beds, num_baths, tenants) {
    this.unit = unit;
    this._num_beds = num_beds;
    this._num_baths = num_baths;
    this.tenants = tenants;
  }
  calcRent() {
    return (this._num_beds * 1000) + (this._num_baths * 500);
  }
  get rent() {
    return '$' + this.calcRent();
  }
  isStudio() {
    if (this._num_beds === 1) {
      return true + ", " + this.unit + " is a studio";
    } else {
      return false + ", " + this.unit + " is not a studio";
    }
  }
//   moveIn(tenant) {
//     this._tenants = tenants.push(tenant);
//   }
}

module.exports = Apartment;
