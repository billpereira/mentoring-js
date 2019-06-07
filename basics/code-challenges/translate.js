const fs = require('fs');

const messageToTranslate = 'lets change the letterr';
const index = 3;

function translate(message, index) {
	const arrayMessage = message.split('');
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
	const arrayNewMessage = [];
	for (let i = 0; i < message.length; i++) {
		if (arrayMessage[i] === ' ') {
			arrayNewMessage.push(' ');
			continue;
		}
		if (i + index > alphabet.length) {
			arrayNewMessage.push(alphabet[(i + index) % alphabet.length]);
		} else {
			arrayNewMessage.push(alphabet[i + index]);
		}
	}
	return arrayNewMessage.join('');
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
