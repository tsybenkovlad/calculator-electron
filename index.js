let expression = document.querySelector('.expression')
function del() {
    let str = expression.innerHTML
    expression.innerHTML = str.slice(0, str.length -1)
}

function clear() {
    expression.innerHTML = ''
}

function percent() {
    expression.innerHTML += "%"
    let str = expression.innerHTML
    let arrSymbol = ["*", "/", "-", "+"]
    let right;
    let left;
    for (let i = str.length-1; i >= 0; i--) {
        if (arrSymbol.includes(str[i])) {
            right = str.slice(i+1)
            left = str.slice(0, i)
            break;
        }
    }
    right = right.slice(0, -1)
    let symbol = str[left.length];
    let leftDone = eval(left)
    let calc;
    if (symbol === "-" || symbol === "+") {
        calc = leftDone + symbol + getPercent(leftDone, right)
    }else {
        calc = leftDone + symbol + (right / 100)
    }
    expression.innerHTML = eval(calc).toFixed(5)
}

function getPercent(number, percent) {
    return (Number(number) * Number(percent)) / 100
}

function about() {
    alert("© Tsybenko Vlad\nIvanychi 2025")
}

function equals() {
    if (expression.innerHTML !== "") {
        expression.innerHTML = eval(expression.innerHTML)
    }
}

function add(value) {
    let lastSymbol = expression.innerHTML.at(-1);
    let arrSymbol = ["*", "/", "-", "+"]
    if (arrSymbol.includes(value) && arrSymbol.includes(lastSymbol)) {
        return;
    }
    expression.innerHTML += value;
}

function eventListener(event) {
    let dataKey = event.target.getAttribute('data-key')
    if (dataKey === "del") {
        del()
    } else if (dataKey === "clear") {
        clear()
    } else if (dataKey === "%") {
        percent()
    } else if (dataKey === "about") {
        about()
    } else if (dataKey === "=") {
        equals()
    } else {
        add(dataKey)
    }
    expression.scrollTo(1920, 0);
}

let buttons = document.querySelectorAll('.buttons td');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', eventListener)
    console.log(buttons[i]);
}