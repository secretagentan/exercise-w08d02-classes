class Tenant {
  constructor(f_name, l_name, bornOn, type) {
    this._f_name = f_name;
    this._l_name = l_name;
    this.bornOn = bornOn;
    this.type = type;
  }
  // get nickname() {
  //   return 'Bud';
  // }
  // set nickname(name) {
  //   this.f_name = this.f_name + name;
  // }
  // get f_name() {
  //   return this._f_name;
  // }
  set occupation(job) {
    this._occupation = job;
  }
  set name(name) {
    this._f_name = name.split(' ')[0];
    this._l_name = name.split(' ')[1];
  }
  set nickname(name) {
    this._nickname = name;
  }
  get fullname() {
    return this._f_name + ' ' + this._nickname + ' ' + this._l_name;
  }
}

module.exports = Tenant;
