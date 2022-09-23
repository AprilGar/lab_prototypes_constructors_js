const Car = function (manufacturer, price, engineType){
    this.manufacturer = manufacturer;
    this.price = price;
    this.engineType = engineType;

    this.getManufacturer = ()=> this.manufacturer;
    this.setManufacturer = (manufacturer) => this.manufacturer = manufacturer;
    this.getPrice = () => this.price;
    this.setPrice = (price) => this.price = price;
    this.getEngineType = () => this.engineType;
    this.setEngineType = (engineType) => this.engineType = engineType;
}

const car1 = new Car('Mazda', 15000, 2000);
const car2 = new Car('Vauxhall', 2000, 1200);

// console.log(car2);
// console.log(car1.getManufacturer());

module.exports = {Car};