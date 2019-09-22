"use strict";
function mrFactor(no) {
    const listOfFactors = [];
    for (let divisor = 1; divisor <= no; divisor++) {
        const remainder = no % divisor;
        if (remainder === 0) {
            listOfFactors.push(divisor);
        }
    }
    return listOfFactors;
}
function highestCommonFactor(firstNumber, secondNumber) {
    const factorsOfFirstNumber = mrFactor(firstNumber);
    const factorsOfSecondNumber = mrFactor(secondNumber);
    const commonfactors = factorsOfFirstNumber.filter(function (value) {
        const isCommonFactor = factorsOfSecondNumber.includes(value);
        return isCommonFactor;
    });
    return commonfactors.pop();
}
const commonFactors = highestCommonFactor(-220, -100);
console.log(commonFactors);
//# sourceMappingURL=index.js.map