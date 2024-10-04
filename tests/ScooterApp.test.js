const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

const scooterApp = new ScooterApp()
// ScooterApp tests here

// register user
describe('registerUser method tests', () => {
  test('Should return instance of User', () => {
    const response = scooterApp.registerUser('Joe Bloggs', 'test123', 21)
    expect(response).toBeInstanceOf(User)
  })
})

// log in

// log out

// rent scooter

// dock scooter
describe('dock scooter method test', () => {
  test('log scooter is docked ', ()=>{
  })
  test('throws error if no station exists', ()=>{
  })
  test('throws error if scooter is already at the station', ()=>{
  })
})