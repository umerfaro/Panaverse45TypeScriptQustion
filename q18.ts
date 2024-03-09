
let places: string[] = ['Kyoto', 'Antarctica', 'Sahara Desert', 'Machu Picchu', 'Great Barrier Reef'];




console.log('Original order:', places);


console.log('Alphabetical order:', [...places].sort());


console.log('Original order (unchanged):', places);


console.log('Reverse alphabetical order:', [...places].sort().reverse());


console.log('Original order (unchanged):', places);


places.reverse();
console.log('Reversed order:', places);


places.reverse();
console.log('Back to original order:', places);


places.sort();
console.log('Sorted in alphabetical order:', places);


places.sort((a, b) => b.localeCompare(a));
console.log('Sorted in reverse alphabetical order:', places);


