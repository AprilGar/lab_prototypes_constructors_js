const {Car} = require("./Car");

const Dealership = function(name, maxCapacity){
    this.name = name;
    this.maxCapacity = maxCapacity;
    this.stock = [];

    this.getName = ()=> this.name;
    this.setName = (name)=> this.name = name;
    this.getMaxCapacity = ()=> this.maxCapacity;
    this.setMaxCapacity = (maxCapacity)=> this.maxCapacity = maxCapacity;
    this.getStock = ()=> this.stock;
    this.addStock = (car)=> this.stock.push(car);
    this.removeStock = (car)=> this.stock.splice(this.stock.indexOf(car), 1);
}