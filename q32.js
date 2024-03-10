let current_users = ['john', 'alice', 'bob', 'jane', 'sam'];
let new_users = ['mary', 'peter', 'John', 'ALICE', 'sarah'];
let current_users_lower = current_users.map(user => user.toLowerCase());
for (let i = 0; i < new_users.length; i++) {
    let new_user_lower = new_users[i].toLowerCase();
    if (current_users_lower.includes(new_user_lower)) {
        console.log(`Sorry, the username '${new_users[i]}' is already taken. Please enter a new username.`);
    }
    else {
        console.log(`Congratulations! The username '${new_users[i]}' is available.`);
    }
}
export {};
