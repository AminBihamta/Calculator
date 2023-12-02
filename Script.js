function inputNumber(num) {
    document.getElementById('screenNum').innerHTML += num;
}

function backspace() {
    document.getElementById('screenNum').innerHTML = document.getElementById('screenNum').innerHTML.slice(0, -1);
}