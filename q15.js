var guestList = ['Bill gates', 'Usman Saif', 'AQSA malik'];
console.log("First set of invitations:");
for (var i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, I would be honored if you could join me for dinner. Your insights and contributions have always fascinated me, and it would be a privilege to have a conversation with you.`);
}
console.log(`\nUnfortunately, ${guestList[1]} can't make it to the dinner.`);
guestList[1] = 'Umer farooq';
console.log("\nSecond set of invitations:");
for (var i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, the dinner plans have changed slightly, but I would still be thrilled if you could join me. Your presence would greatly enrich our gathering.`);
}
export {};
