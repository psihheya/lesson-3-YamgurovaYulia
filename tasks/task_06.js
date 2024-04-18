/* Вам предоставляется словарь/хэш/объект, содержащий несколько языков, и результаты вашего теста на этих языках.
  Верните список языков, на которых ваш результат теста не ниже 60, в порядке убывания баллов.
 {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
Note: оценки всегда будут уникальными (поэтому никаких повторяющихся значений) */

function myLanguages(results) {
  const passed = [];

    for (const [language, score] of Object.entries(results)) {
        if (score >= 60) {
            passed.push(language);
        }
    }

    passed.sort((a, b) => results[b] - results[a]);

    return passed;
}













































































module.exports = myLanguages

