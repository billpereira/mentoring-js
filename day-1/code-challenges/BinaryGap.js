const binaryGap = n => {
	const binary = n.toString(2).split('');
	let sequenceOfZeros = 0;
	let count = 0;
	let counting = false;
	for (let i = 0; i < binary.length; i++) {
		if (binary[i] === '1') {
      counting = true;
			if (counting) {
				sequenceOfZeros = sequenceOfZeros < count ? count : sequenceOfZeros;
        count = 0
			} else {
				// counting = !counting;
			}
		} else {
			if (counting) {
				count += 1;
			}
		}
	}

	return sequenceOfZeros;
};

console.log(binaryGap(20));
console.log(binaryGap(1041));
console.log(binaryGap(32));
