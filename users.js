// users.js
// User database system for Taiger Store

export const users = [];

export function addUser(name, email) {
    users.push({ name, email, createdAt: new Date() });
    return users;
}

export function getUsers() {
    return users;
}
