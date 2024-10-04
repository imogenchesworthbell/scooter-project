const Scooter = require('../src/Scooter')
const User = require('../src/User')

let scooter;
let user;

beforeEach(() => {
  scooter = new Scooter('station1');
  user = new User('Imogen CB', 'test123', 23);
});

// typeof scooter === object
describe('scooter object', () => {
  test('Scooter class should create Scooter instance', () => {
    const scooter = new Scooter()
    expect(scooter).toBeInstanceOf(Scooter)
  })
})
// Scooter properties test
describe('Scooter property tests', () => {
  //test station
  test('station should be a string or null if not docked', () => {
    scooter.station = 'station1';
    expect(typeof scooter.station === 'string').toBe(true);
    scooter.station = null
    expect(typeof scooter.station === 'string').toBe(false);
  })
  // test serial
  test('serial should be a number', () =>{
    expect(typeof scooter.serial).toBe('number')
  })
  // test nextSerial
  test('nextSerial should be a number that increments by 1 when it is called', () =>{
    const scooter10 = new Scooter('station 10')
    const scooter11 = new Scooter('station 10')
    expect(scooter10.serial +1).toEqual(scooter11.serial);
  })
  // test charge
  test('charge should be a number', () =>{
    expect(typeof scooter.charge).toBe('number')
  })
  // test isBroken
  test('isBroken should be a boolean', () =>{
    expect(typeof scooter.isBroken).toBe('boolean')
  })
})

// Method tests
describe('user login and logout method tests', () => {
    beforeEach(() =>{
      const scooter = new Scooter('station1')
    })
  // test rent 

    test('can a user rent a scooter', ()=>{
      scooter.rent('Imogen');
      expect(scooter.station).toBe(null);
      expect(scooter.user).toBe('Imogen')
    })

    test('if charge is less than or equal to 20 should get an error thrown', ()=>{
      scooter.charge = 12
      expect(() => scooter.rent(user)).toThrow(Error);
    })
    
    test('if scooter is charged but broken', ()=>{
      scooter.isBroken = true
      expect(() => scooter.rent(user)).toThrow(Error);
    })

  // test dock

    test('testing this docks the scooter back', ()=>{
      scooter.rent('Imogen')
      scooter.dock('station1')
      expect(scooter.station).toBe('station1');
      expect(scooter.user).toBe(null);
    })
  })