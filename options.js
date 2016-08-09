function saveOptions() {
	options = {
		charCount: document.getElementById('charCount').value,
		blocklist: document.getElementById('blocklist').value,
		redirecturl: document.getElementById('redirecturl').value,
	};

	chrome.storage.sync.set(options, function() {
		document.getElementById('flash').textContent = "Options saved.";
		setTimeout(function() {
			document.getElementById('flash').textContent = "";
		}, 2500);
	});
}

function restoreOptions() {
	chrome.storage.sync.get(defaultOptions, function(items) {
		document.getElementById('charCount').value = items.charCount;
		document.getElementById('blocklist').value = items.blocklist;
		document.getElementById('redirecturl').value = items.redirecturl;

		document.getElementById('charCountOutput').value = items.charCount;
	});
}


document.getElementById('charCount').addEventListener('input', function() {
	document.getElementById('charCountOutput').value = document.getElementById('charCount').value;
});

document.getElementById('saveOptions').addEventListener('click', saveOptions);

document.addEventListener('DOMContentLoaded', restoreOptions);

