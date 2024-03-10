interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; // Allow arbitrary additional properties
}

function createCar(manufacturer: string, model: string, ...extras: [string, any][]): Car {
    const car: Car = {
        manufacturer,
        model
    };

    extras.forEach(([key, value]) => {
        car[key] = value;
    });

    return car;
}


const myCar: Car = createCar("Toyota", "Camry", ["color", "blue"], ["year", 2023]);

console.log(myCar);

