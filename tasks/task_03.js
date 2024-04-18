/*
* Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.
Гласными являются «a», «e», «i», «o», «u», «y».
* */

function getVowelsCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    let count = 0;

    for (let char of str) {

        if (vowels.includes(char)) {
            count++;
        }
    }
    
    return count;    
}












































module.exports = getVowelsCount