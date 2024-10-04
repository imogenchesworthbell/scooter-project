const User = require('./User')

class Scooter {
  static nextSerial = 1;

  constructor(station){
    this.station = station;
    this.user = null;
    this.serial = this.nextSerial +1;
    this.charge = 100;
    this.isBroken = false;
  }

  rent(user){
    if(this.charge > 20 && this.isBroken === false){
      this.station = null;
      this.user = user;
      console.log(`${user.username} has rented scooter ${this.serial}`);
    }
    else if(!(this.charge > 20) && this.isBroken === false){
      throw new Error("scooter needs to charge");
    }
    else if(this.isBroken === true){
      throw new Error("scooter needs repair");
    }
  }

  dock(station){
    this.station = station;
    this.user = null;
    console.log(`scooter ${this.serial} has been returned to ${this.station}`);
  }
  //BONUS (if I have got time) - recharge(){}
  //BONUS (if I have got time) - requestRepair(){}
}

module.exports = Scooter
