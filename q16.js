var guestList = ['Bill gates', 'Usman Saif', 'AQSA malik'];
console.log("Great news! I found a bigger dinner table, so more guests can be invited.");
guestList.unshift('Haider');
const middleIndex = Math.ceil(guestList.length / 2);
guestList.splice(middleIndex, 0, 'Gujjer');
guestList.push('Abdullah');
console.log("\nNew set of invitation messages:");
for (var i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, I'm delighted to inform you that our dinner party has been upgraded to a larger table. It would be an honor to have you join us for an evening of great conversation and dining.`);
}
export {};
