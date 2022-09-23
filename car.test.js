//import so I have access to methods 
const car = require("./Car.js");

const car1 = new Car('Mazda', 15000, 2000);

describe('testing car properties can be accessed', ()=> {
    
    test('can get car manufacturer', () => {
        expected = 'Mazda';
        actual = car.getManufacturer(car1.getManufacturer);
        expect(actual).toBe(expected);
    });

    test('can get car price', () => {
        expected = '15000';
        actual = car.getPrice(car1);
        expect(actual).toBe(expected);
    });

    test('can get car engine', () => {
        expected = '2000';
        actual = car.getEngineType(car1);
        expect(actual).toBe(expected);
    });

});