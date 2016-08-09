var options = defaultOptions;

var unblocked = [];
var blocked = [];
var unblockTimes = {};
var unblockAfter = {};

function getBlockList( text ) {
	var ret = [];
	var a = text.split(/,|\n/);
	for ( var i in a ) {
		ret.push(a[i].trim());
	}
	return ret;
}

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {

	if ( message.subject == "unblock" ) {
		unblocked.push( message.url );
		unblockTimes[message.url] = Date.now();
		unblockAfter[message.url] = message.time;
	} else if ( message.subject == "shouldblock" ) {
		var ind1 = false;
		for ( var i = 0; !ind1 && i < unblocked.length; i++ ) {
			var domain = unblocked[i];
			ind1 = message.url.endsWith( domain );
		}
		var ind2 = false;
		for ( var i = 0; !ind2 && i < blocked.length; i++ ) {
			var domain = blocked[i];
			ind2 = message.url.endsWith( domain );
		}
		var withinTime = false;
		var remaining = -1.0;
		if ( message.url in unblockTimes ) {
			var diff = Date.now() - unblockTimes[message.url]
			remaining = unblockAfter[message.url] * 60 * 1000 - diff;
			withinTime = (diff <= unblockAfter[message.url] * 60 * 1000);
		}
		sendResponse({ 
			should : ind2 && (!ind1 || !withinTime),
			remaining : remaining });
	} else if ( message.subject == "blockingHtml" ) {
		var request = new XMLHttpRequest();
		request.open( "GET", chrome.extension.getURL("index.html"), false );
		request.send();

		if ( request.status === 200 ) {
			sendResponse( request.responseText );
		} else {
			sendResponse( "It ain't working!" );
		}
	}
});

chrome.storage.sync.get(options, function(items) {
	for ( var key in items ) {
		var value = items[key];
		options[key] = value;

		//chrome.extension.getBackgroundPage().console.log( key + " : " + options[key] );
	};

	blocked = getBlockList(options["blocklist"]);
});

chrome.storage.onChanged.addListener( function(changes) {
	for ( var key in changes ) {
		var value = changes[key].newValue;
		options[key] = value;

	};

	blocked = getBlockList(options["blocklist"]);
});



