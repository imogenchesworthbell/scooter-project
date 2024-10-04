const User = require('../src/User')

const user = new User('Imogen', 'test123', 23)

// typeof user === object
describe('user object', () => {
  test('User class should create user instance', () => {
    const user = new User()
    expect(user).toBeInstanceOf(User)
  })
})

// User tests here
describe('User property tests', () => {
  // test username
  test('username should be a string', () => {
    expect(typeof user.username).toBe('string')
  })
  // test password
  test('password should be a string', () =>{
    expect(typeof user.getPassword()).toBe('string')
  })
  // test age
  test('age should be a number', () =>{
    expect(user.age).toBe(23)
  })
})


describe('user login and logout method tests', () => {
// test login  
  beforeEach(() =>{
    const user = new User('Imogen', 'test123', 23)
  })

  test('if password is correct user should be logged in', ()=>{
    user.login('test123');
    expect(user.loggedIn).toBe(true);
  })

  test('if password is incorrect user should get an error thrown', ()=>{
    
    expect(() => user.login('wrongtest123')).toThrow(Error);
  })
// test logout
  test('testing this method logs the user out', ()=>{
    user.logout()
    expect(user.loggedIn).toBe(false)
  })
})