function showMagicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
function makeGreat(magicians) {
    return magicians.map(magician => `the Great ${magician}`);
}
const originalMagicianNames = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
const copiedMagicianNames = [...originalMagicianNames];
const greatMagicianNames = makeGreat(copiedMagicianNames);
console.log("Original Magicians:");
showMagicians(originalMagicianNames);
console.log("\nGreat Magicians:");
showMagicians(greatMagicianNames);
export {};
