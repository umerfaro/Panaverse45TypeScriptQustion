function makeSandwich(...items: string[]): void {
    console.log("Making a sandwich with the following items:");
    items.forEach(item => {
        console.log(`- ${item}`);
    });
    console.log("Sandwich is ready!\n");
}


makeSandwich("Ham", "Cheese", "Lettuce");
makeSandwich("Turkey", "Swiss cheese", "Tomato", "Mayonnaise");
makeSandwich("Peanut butter", "Jelly");


