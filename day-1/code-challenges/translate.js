const fs = require('fs');

const messageToTranslate = 'lets change the letterr';
const index = 3;

function translate(message, index) {
	var lowerCaseString = message.toLowerCase();
	var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
	var newString = '';

	index = index % alphabet.length;
	for (var i = 0; i < lowerCaseString.length; i++) {
		var currentLetter = lowerCaseString[i];
		if (currentLetter === ' ') {
			newString += currentLetter;
			continue;
		}
		var currentIndex = alphabet.indexOf(currentLetter);
		var newIndex = currentIndex + index;
		if (newIndex > alphabet.length) newIndex = newIndex - alphabet.length;
		if (newIndex < 0) newIndex = alphabet.length + newIndex;
		if (message[i] === message[i].toUpperCase()) {
			newString += alphabet[newIndex].toUpperCase();
		} else newString += alphabet[newIndex];
	}

	return newString;
}

const recordMessage = index => {
	let objectToRecord = {
		messageToTranslate,
		index,
		translatedMessage
	};

	fs.writeFile('message.json', JSON.stringify(objectToRecord), err => {
		if (err) throw err;
		console.log('The file has been saved!');
	});
};

const translatedMessage = translate(messageToTranslate, index);
recordMessage(index);
