function highAndLow(numbers) {
	let splited = numbers.split(" ");
	let sortNum = splited.sort((a, b) => a - b);
	let numHigh = splited.length - 1;
	{
		return `"${sortNum[numHigh]} ${sortNum[0]}"`;
	}
}

highAndLow("1 2 3 4 5");
highAndLow("1 2 -3 4 5");
highAndLow("1 9 3 4 -5");
