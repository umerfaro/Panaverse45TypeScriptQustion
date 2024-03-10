var message = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("will print out error ");
for (var i = -1; i < 12; i++) {
    console.log(message[i]);
}
console.log("without  error ");
for (var i = 0; i < message.length; i++) {
    console.log(message[i]);
}
export {};
