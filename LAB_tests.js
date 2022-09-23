//import so I have access to methods 
const car = require("./Car.js")

describe('testing car properties can be accessed', ()=> {
    
    test('can get car manufacturer', () => {
    expected = 'Mazda';
    actual = car.getManufacturer(car1);
    expect(actual).toBe(expected);
    });
    
});
