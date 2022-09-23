//import so I have access to methods 
const Car = require("./Car.js");

const car = new Car('Mazda', 15000, 2000);

describe('testing car properties can be accessed', ()=> {
    
    test('can get car manufacturer', () => {
        expected = 'Mazda';
        actual = car.getManufacturer();
        expect(actual).toBe(expected);
    });

    test('can get car price', () => {
        expected = 15000;
        actual = car.getPrice();
        expect(actual).toBe(expected);
    });

    test('can get car engine', () => {
        expected = 2000;
        actual = car.getEngineType();
        expect(actual).toBe(expected);
    });

});