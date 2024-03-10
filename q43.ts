function showMagicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

function makeGreat(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}


const originalMagicianNames: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

const copiedMagicianNames: string[] = [...originalMagicianNames];

const greatMagicianNames: string[] = makeGreat(copiedMagicianNames);


console.log("Original Magicians:");
showMagicians(originalMagicianNames);

console.log("\nGreat Magicians:");
showMagicians(greatMagicianNames);
