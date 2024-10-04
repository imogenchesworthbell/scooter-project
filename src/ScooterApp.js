const Scooter = require('./Scooter')
const User = require('./User')

class ScooterApp {
  constructor(){
    this.stations = {
      station1:[], 
      station2:[], 
      station3:[]
    };
    this.registeredUsers = {};

  }
  registerUser(username, password, age){
    if(user.username = username){
      console.log("already registered");
    }
    else if(age < 18){
      console.log("too young to register")
    }
    else{
      const newUser = new User(username, password, age)
      this.registeredUsers[username] = newUser
      console.log(`Hi, ${username} you have been registered`)
    }
  }
  
  loginUser(username, password){
    if(!(this.registeredUsers[username])){
      throw new Error('username does not exist.');
    }else{
      user.login(password)
    }
  }
  
  logoutUser(username){
    if(!(this.registeredUsers[username])){
      throw new Error('no such user is logged in'); 
    }else{
      user.logout();
    }
  }
  
  createScooter(station){
    if(!(this.stations[station])){
      throw new Error("no such station");
    }
  
    const scooter1 = new Scooter(station);

    this.stations[station].push(scooter1);
    console.log(`created new scooter at ${station}.`)
  }
  
  dockScooter(scooter, station){
    if(!(this.stations[station])){
      throw new Error(`${station} does not exist`);
    }else if(this.stations[station].includes(scooter)){
      throw new Error(`scooter ${scooter.serial} is already at station`);
    }else{
      this.stations[station].push(scooter);
      console.log(`Scooter ${scooter.serial} is docked at ${station}`);
      scooter.dock(station)
  }
  }
  
  rentScooter(scooter, user){
    if(!(this.stations[scooter.station].includes(scooter))){
      console.log(`scooter is already rented`)
    }else{
      scooter.rent(user)
      this.stations[scooter.station].splice(scooter.station.indexOf(scooter),1)
      console.log(`Scooter ${scooter.serial}, has been rented by ${scooter.user}`)
    }
  }
  
  print(){
    for(const username in this.registeredUsers){
      console.log(username)
    }
    for(const station in this.stations){
      if(this.station[station].length === 1){
        console.log(`${station} has ${this.station[station].length} scooter`)
      }
      else{
      console.log(`${station} has ${this.station[station].length} scooters`)
    }
    }
  }
}

module.exports = ScooterApp
