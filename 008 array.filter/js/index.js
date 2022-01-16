const validUserNames = (usernames) => {
    return usernames.filter(m => m.length < 10);
}

console.log(validUserNames(['aa','sadsadsadsadsadsaddsads']));