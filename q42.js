function showMagicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
function makeGreat(magicians) {
    return magicians.map(magician => `the Great ${magician}`);
}
let magicianNames = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
magicianNames = makeGreat(magicianNames);
showMagicians(magicianNames);
export {};
