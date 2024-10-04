class User {
  #password
  constructor(username, password, age){
    this.username = username;
    this.#password = password;
    this.age = age;
    this.loggedIn = false
  }
  login(password){
    if(this.loggedIn = true){
      console.log(`Hi ${this.username}, you are already logged in.`)
    }
    if((this.#password === password)){
      this.loggedIn = true
      console.log(`Hello ${this.username}, you are now logged in. Happy scooting!`)
    }else{
      throw new Error("wrong password, try again")
    }
  }
  logout(){
    this.loggedIn = false
    console.log("Goodbye, you are now logged out.")
  }
  getPassword(){
    return this.#password
  }

}

module.exports = User
