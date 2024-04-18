/*
* Написать функцию, которая принимает массив чисел, например [1,2,3,4,5] и функция возращает среднее арифметическое, (округлить результат до десятых)
* */

function abs(array) {
    const sum = array.reduce((acc, val) => acc + val, 0);

    const avg = sum / array.length;

    return Math.round(avg * 10) / 10;
}









































module.exports = abs