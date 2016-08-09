var defaultOptions = {
	waitTime: 3,
	blockTime: 10,
	charCount: 100,
	blocklist: 'facebook.com',
	redirecturl: 'trello.com'
};

function humanizeTime(seconds) {
	var str = "";
	if (seconds > 59) {
		str += Math.floor(seconds / 60) + " minutes ";
		seconds = seconds % 60;
	}

	if (str == "" || seconds > 0) {
		str += seconds + " seconds";
	}
	return str;
}