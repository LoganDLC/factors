function mrFactor(no: number) {
	const listOfFactors = [];
	for (let divisor = 1; divisor <= no; divisor++) {
		const remainder = no % divisor;
		if (remainder === 0) {
			listOfFactors.push(divisor);
		}
	}

	return listOfFactors;
}

export function highestCommonFactor(firstNumber: number, secondNumber: number) {
	const factorsOfFirstNumber = mrFactor(firstNumber);
	const factorsOfSecondNumber = mrFactor(secondNumber);

	const commonfactors = factorsOfFirstNumber.filter(function (value) {
		const isCommonFactor = factorsOfSecondNumber.includes(value);
		return isCommonFactor;
	});

	return commonfactors.pop();
}

