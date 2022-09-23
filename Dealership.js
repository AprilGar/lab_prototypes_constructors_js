// Create a Dealership class. 
// It should have properties representing:
// its name
// maximum number of cars it can have
// the cars currently in stock

const Dealership = function(name, maxCars){
    this.name = name;
    this.maxCars = maxCars;
    this.carsInStock = [];
}