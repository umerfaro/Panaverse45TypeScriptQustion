let usernames = ['eric', 'julia', 'admin', 'bob', 'alice'];
for (let username of usernames) {
    if (username === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
export {};
// let usernames: string[] = ['admin', 'eric', 'julia', 'bob', 'alice'];
// for (let i = 0; i < usernames.length; i++) {
//     if (usernames[i] === 'admin') {
//         console.log('Hello admin, would you like to see a status report?');
//     } else {
//         console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
//     }
// }
