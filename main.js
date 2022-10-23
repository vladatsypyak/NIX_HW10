//________________Task_1____________________________

function isEmpty(obj) {
    for (const objKey in obj) {
        if (objKey) return false
    }
    return true
}

// console.log(isEmpty({b: 2}

//________________Task_2____________________________
// let obj ={a: 2, c: "b"}
// function multiplyNumeric(obj) {
//     for (const objKey in obj) {
//      if(typeof obj[objKey] === 'number'){
//         obj[objKey]*= 2
//      }
//     }
// }
//
// multiplyNumeric(obj);
// console.log(obj)

//________________Task_3____________________________
// function readNumber() {
//     let userAnswer = prompt('Введіть число')
//     if( userAnswer !== null && isNaN(+userAnswer)) {
//         readNumber()
//     }
// }
// readNumber()

//________________Task_4____________________________
function random(min, max) {
    return min + Math.random() * (max - min);

}

// console.log(random(10, 30));
//________________Task_5____________________________

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand)
}

// console.log(randomInteger(2, 5));

//________________Task_6____________________________

function ucFirst(str) {
    let arr = str.split('')
    arr[0] = arr[0].toUpperCase()
    return arr.join('')
}

// console.log(ucFirst('vlada'));

//________________Task_7____________________________

function checkSpam(str) {
    return str.toUpperCase().includes('VIAGRA')
}

// console.log(checkSpam('vviagrA'));

//________________Task_8____________________________

function truncate(str, maxlength) {
    if (str.length > maxlength) {
        let newStr = str.slice(0, maxlength - 1)
        return newStr + '\u2026'
    }
    return str
}

console.log(truncate('123456', 4));

//________________Task_9____________________________

function extractCurrencyValue(str) {
    return +str.slice(1)
}

// console.log(extractCurrencyValue("$123") === 123);

//________________Task_10____________________________

function sumInput() {
    let userAnswer = prompt('Введіть число')
    let arr = []
    while (userAnswer !== null && !isNaN(+userAnswer) && userAnswer !== '') {
        arr.push(+userAnswer)
        userAnswer = prompt('Введіть число')
    }
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

// console.log(sumInput());

//________________Task_11____________________________
// без else функція буде працювати так само, так як в випадку, якщо age більше 18, ф-я поверне тру  і не буде виконувати решту кода

//________________Task_12____________________________

function checkAge(age) {
    return age > 18 || confirm('Батьки дозволили?')
}

// console.log(checkAge(16));

//________________Task_13____________________________

function min(a, b) {
    return a < b ? a : b
}

// console.log(min(1, 2));

//________________Task_14____________________________

// let x = +prompt('введіть число')
// let n = +prompt('введіть степінь')
//
//
// function pow(x, n) {
//     let res = 1
//     for (let i = 0; i < n; i++) {
//         res *= x
//     }
//     alert(res)
// }

// pow(x, n);

//________________Task_15____________________________

// const ask = (question, yes, no) => {
//     if (confirm(question)) yes( )
//     else no( );
// }
// ask (
//     "Ви згодні?",
//      ( ) => { alert ("Ви погодилися."); },
//      ( ) => { alert ("Ви скасували виконання."); }
// );
//________________Task_16____________________________

let monthIncome = 3333
let plmPrice = 8000
let  monthExpenses = 1750

let result = Math.ceil(plmPrice / (monthIncome - monthExpenses))
// console.log( `Можна назбирати на пальму за ${result} місяців`)


//________________Task_17____________________________
function getSum() {
    let sum = 0
    for (let i = 0; i < 10; i++) {
        let num = +prompt('type number')
        if(num < 0) {
            sum+=num
        }
    }
    return sum
}

// console.log(getSum());