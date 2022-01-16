const text = document.querySelector('#username');
const h1 = document.querySelector('h1');
text.addEventListener('input', (e) => {
    h1.innerText = `Welcome, ${e.target.value}`;
    if (text.value.length === 0) {
        h1.innerText = 'Enter Your Username';
}
})