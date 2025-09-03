let expression = document.querySelector('.expression')
function del() {
    let str = expression.innerHTML
    expression.innerHTML = str.slice(0, str.length -1)
}

function clear() {
    expression.innerHTML = ''
}

function percent() {

}

function about() {
    alert("(c) Tsybenko Vlad\nIvanychi 2025")
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