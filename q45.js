function createCar(manufacturer, model, ...extras) {
    const car = {
        manufacturer,
        model
    };
    extras.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}
const myCar = createCar("Toyota", "Camry", ["color", "blue"], ["year", 2023]);
console.log(myCar);
export {};
