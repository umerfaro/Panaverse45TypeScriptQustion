
var guestList = ['Bill gates', 'Usman Saif', 'AQSA malik', 'Haider', 'Gujjer', 'Abdullah'];


console.log("Unfortunately, due to unforeseen circumstances, I can only invite two people to dinner.");


while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Dear ${removedGuest}, I am terribly sorry to inform you that due to limited space, I can't extend the invitation to dinner as previously planned.`);
}


console.log("\n");
for (var i = 0; i < guestList.length; i++) 
{
    console.log(`Dear ${guestList[i]}, you are still invited to dinner. I look forward to enjoying a wonderful evening together.`);
}


guestList.splice(0, guestList.length); 


console.log("\nCurrent guest list:", guestList);
