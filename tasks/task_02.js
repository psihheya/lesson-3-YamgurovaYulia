/*
*  Если мы получили палиндром, функция должна вернуть значение true. Если же нет — false.
* */

function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    
    return str === reversed;

}

















































module.exports = isPalindrome