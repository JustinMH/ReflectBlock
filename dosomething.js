
function properUrl( url ) {
	var ret;
	if ( url.substring(0, 7).toLowerCase() == "http://"
		|| url.substring(0, 8).toLowerCase() == "https://" ) {
		ret = url;
	} else {
		ret = "https://" + url;
	}
	return ret;
}

function calculateBigrams( text ) {
	text = text.toLowerCase();
	newtext = "";
	for ( var i = 0; i < text.length; i++ ) {
		var c1 = text[i].charCodeAt(0);
		if ( c1 >= 97 && c1 <= 122 ) {
			newtext += text[i];
		}
	}
	var dist = {}
	for ( var i = 0; i < 26; i++ ) {
		for ( var j = 0; j < 26; j++ ) {
			var bigram = String.fromCharCode( i+97, j+97 );
			dist[bigram] = 0.0;
		}
	}
	var len = newtext.length-1;
	for ( var i = 0; i < len; i++ ) {
		dist[newtext[i]+newtext[i+1]] += 1;
	}
	for ( var i = 0; i < 26; i++ ) {
		for ( var j = 0; j < 26; j++ ) {
			var bigram = String.fromCharCode( i+97, j+97 );
			dist[bigram] /= len;
		}
	}
	return dist;
}

function compareDists( dist1, dist2 ) {
	var total = 0.0;
	for ( var i = 0; i < 26; i++ ) {
		for ( var j = 0; j < 26; j++ ) {
			var bigram = String.fromCharCode( i+97, j+97 );
			total += Math.abs(dist1[bigram] - dist2[bigram]);
		}
	}
	return total;
}

var englishText = "The evening altogether passed off pleasantly to the whole family. Mrs.Bennet had seen her eldest daughter much admired by the Netherfieldparty. Mr. Bingley had danced with her twice, and she had beendistinguished by his sisters. Jane was as much gratified by this asher mother could be, though in a quieter way. Elizabeth felt Jane'spleasure. Mary had heard herself mentioned to Miss Bingley as the mostaccomplished girl in the neighbourhood; and Catherine and Lydia had beenfortunate enough never to be without partners, which was all that theyhad yet learnt to care for at a ball. They returned, therefore, in goodspirits to Longbourn, the village where they lived, and of which theywere the principal inhabitants. They found Mr. Bennet still up. Witha book he was regardless of time; and on the present occasion he had agood deal of curiosity as to the event of an evening which had raisedsuch splendid expectations. He had rather hoped that his wife's views onthe stranger would be disappointed; but he soon found out that he had adifferent story to hear.Oh! my dear Mr. Bennet, as she entered the room, we have had a mostdelightful evening, a most excellent ball. I wish you had been there.Jane was so admired, nothing could be like it. Everybody said how wellshe looked; and Mr. Bingley thought her quite beautiful, and danced withher twice! Only think of _that_, my dear; he actually danced with hertwice! and she was the only creature in the room that he asked a secondtime. First of all, he asked Miss Lucas. I was so vexed to see him standup with her! But, however, he did not admire her at all; indeed, nobodycan, you know; and he seemed quite struck with Jane as she was goingdown the dance. So he inquired who she was, and got introduced, andasked her for the two next. Then the two third he danced with Miss King,and the two fourth with Maria Lucas, and the two fifth with Jane again,and the two sixth with Lizzy, and the _Boulanger_--If he had had any compassion for _me_, cried her husband impatiently,he would not have danced half so much! For God's sake, say no more ofhis partners. Oh that he had sprained his ankle in the first dance!Oh! my dear, I am quite delighted with him. He is so excessivelyhandsome! And his sisters are charming women. I never in my life sawanything more elegant than their dresses. I dare say the lace upon Mrs.Hurst's gown--Here she was interrupted again. Mr. Bennet protested against anydescription of finery. She was therefore obliged to seek another branchof the subject, and related, with much bitterness of spirit and someexaggeration, the shocking rudeness of Mr. Darcy.But I can assure you, she added, that Lizzy does not lose much by notsuiting _his_ fancy; for he is a most disagreeable, horrid man, not atall worth pleasing. So high and so conceited that there was no enduringhim! He walked here, and he walked there, fancying himself so verygreat! Not handsome enough to dance with! I wish you had been there, mydear, to have given him one of your set-downs. I quite detest the man.Chapter 4When Jane and Elizabeth were alone, the former, who had been cautious inher praise of Mr. Bingley before, expressed to her sister just how verymuch she admired him.He is just what a young man ought to be, said she, sensible,good-humoured, lively; and I never saw such happy manners!--so muchease, with such perfect good breeding!He is also handsome, replied Elizabeth, which a young man oughtlikewise to be, if he possibly can. His character is thereby complete.I was very much flattered by his asking me to dance a second time. Idid not expect such a compliment.Did not you? I did for you. But that is one great difference betweenus. Compliments always take _you_ by surprise, and _me_ never. Whatcould be more natural than his asking you again? He could not helpseeing that you were about five times as pretty as every other womanin the room. No thanks to his gallantry for that. Well, he certainly isvery agreeable, and I give you leave to like him. You have liked many astupider person.Dear Lizzy!Oh! you are a great deal too apt, you know, to like people in general.You never see a fault in anybody. All the world are good and agreeablein your eyes. I never heard you speak ill of a human being in yourlife.I would not wish to be hasty in censuring anyone; but I always speakwhat I think.I know you do; and it is _that_ which makes the wonder. With _your_good sense, to be so honestly blind to the follies and nonsense ofothers! Affectation of candour is common enough--one meets with iteverywhere. But to be candid without ostentation or design--to take thegood of everybody's character and make it still better, and say nothingof the bad--belongs to you alone. And so you like this man's sisters,too, do you? Their manners are not equal to his.Certainly not--at first. But they are very pleasing women when youconverse with them. Miss Bingley is to live with her brother, and keephis house; and I am much mistaken if we shall not find a very charmingneighbour in her.Elizabeth listened in silence, but was not convinced; their behaviour atthe assembly had not been calculated to please in general; and with morequickness of observation and less pliancy of temper than her sister,and with a judgement too unassailed by any attention to herself, shewas very little disposed to approve them. They were in fact very fineladies; not deficient in good humour when they were pleased, nor in thepower of making themselves agreeable when they chose it, but proud andconceited. They were rather handsome, had been educated in one of thefirst private seminaries in town, had a fortune of twenty thousandpounds, were in the habit of spending more than they ought, and ofassociating with people of rank, and were therefore in every respectentitled to think well of themselves, and meanly of others. They were ofa respectable family in the north of England; a circumstance more deeplyimpressed on their memories than that their brother's fortune and theirown had been acquired by trade.Mr. Bingley inherited property to the amount of nearly a hundredthousand pounds from his father, who had intended to purchase anestate, but did not live to do it. Mr. Bingley intended it likewise, andsometimes made choice of his county; but as he was now provided with agood house and the liberty of a manor, it was doubtful to many of thosewho best knew the easiness of his temper, whether he might not spend theremainder of his days at Netherfield, and leave the next generation topurchase.His sisters were anxious for his having an estate of his own; but,though he was now only established as a tenant, Miss Bingley was by nomeans unwilling to preside at his table--nor was Mrs. Hurst, who hadmarried a man of more fashion than fortune, less disposed to considerhis house as her home when it suited her. Mr. Bingley had not been ofage two years, when he was tempted by an accidental recommendationto look at Netherfield House. He did look at it, and into it forhalf-an-hour--was pleased with the situation and the principalrooms, satisfied with what the owner said in its praise, and took itimmediately.Between him and Darcy there was a very steady friendship, in spite ofgreat opposition of character. Bingley was endeared to Darcy by theeasiness, openness, and ductility of his temper, though no dispositioncould offer a greater contrast to his own, and though with his own henever appeared dissatisfied. On the strength of Darcy's regard, Bingleyhad the firmest reliance, and of his judgement the highest opinion.In understanding, Darcy was the superior. Bingley was by no meansdeficient, but Darcy was clever. He was at the same time haughty,reserved, and fastidious, and his manners, though well-bred, were notinviting. In that respect his friend had greatly the advantage. Bingleywas sure of being liked wherever he appeared, Darcy was continuallygiving offense.The manner in which they spoke of the Meryton assembly was sufficientlycharacteristic. Bingley had never met with more pleasant people orprettier girls in his life; everybody had been most kind and attentiveto him; there had been no formality, no stiffness; he had soon feltacquainted with all the room; and, as to Miss Bennet, he could notconceive an angel more beautiful. Darcy, on the contrary, had seen acollection of people in whom there was little beauty and no fashion, fornone of whom he had felt the smallest interest, and from none receivedeither attention or pleasure. Miss Bennet he acknowledged to be pretty,but she smiled too much.Mrs. Hurst and her sister allowed it to be so--but still they admiredher and liked her, and pronounced her to be a sweet girl, and onewhom they would not object to know more of. Miss Bennet was thereforeestablished as a sweet girl, and their brother felt authorized by suchcommendation to think of her as he chose.";

function block() {

	window.stop();

	chrome.runtime.sendMessage({ subject: "blockingHtml" }, function(html){

		document.all[0].innerHTML = html;

		chrome.storage.sync.get(defaultOptions, function(items) {

			var english = calculateBigrams( englishText );

			var explainContainer = document.getElementById( "explain-container" );
			var charCount = document.getElementById( "char-count" );
			var explain = document.getElementById( "explain" );
			var submit = document.getElementById( "submit" );
			var no1 = document.getElementById( "no1" );
			var yes1 = document.getElementById( "yes1" );
			var timer = document.getElementById( "timer" );

			var question2 = document.getElementById( "question2" );
			var question3 = document.getElementById( "question3" );

			var no3 = document.getElementById( "no3" );
			var yes3 = document.getElementById( "yes3" );
			var question5 = document.getElementById( "question5" );

			var timeSection = document.getElementById( "timeSection" );
			var unblockTime = document.getElementById( "unblockTime" );
			var unblockTimeOutput = document.getElementById( "unblockTimeOutput" );

			var charCountNumber = items.charCount
			charCount.innerHTML = "0/" + charCountNumber;
			var waitTime = items.waitTime;
			var canSubmit = false;
			var lastText = explain.value;
			var STATE_LEFT = 1;
			var STATE_RIGHT = 2;
			var state = 1;

			explain.addEventListener("input", function() {
				if ( this.value.length - lastText.length > 1 ) {
					this.value = lastText;
				} else {
					lastText = this.value;
					var dist = calculateBigrams( this.value );
					var comparison = compareDists( english, dist );
					canSubmit = this.value.length >= charCountNumber && comparison < 1.6;
					if ( comparison >= 1.5 ) {
						charCount.innerHTML = this.value.length + "/" + charCountNumber + " Explain in English!";
					} else if ( this.value.length < charCountNumber ) {
						charCount.innerHTML = this.value.length + "/" + charCountNumber + " Explain using at least " + charCountNumber + " characters!";
					} else {
						charCount.innerHTML = this.value.length + "/" + charCountNumber;
						if ( state == STATE_RIGHT ) {
							question5.style.display = "block";
						}
					}					
				}
			});
			submit.addEventListener("click", function() {
				if ( canSubmit ) {
					chrome.runtime.sendMessage({ 
						subject: "unblock", 
						url: window.location.hostname,
						time: unblockTime.value }, function(response) {

			            window.location.reload();
			        });
			    }
			});

			yes1.addEventListener("click", function() {
				state = STATE_LEFT;
				yes1.style.display = "none";
				no1.style.display = "none";
				question3.style.display = "block";
				explainContainer.style.display = "block";
				submit.style.display = "block";
				timeSection.style.display = "block";
			});
			no1.addEventListener("click", function() {
				state = STATE_RIGHT;
				yes1.style.display = "none";
				no1.style.display = "none";
				question2.style.display = "block";
				explainContainer.style.display = "block";
			});


			yes3.addEventListener("click", function() {
				yes3.style.display = "none";
				no3.style.display = "none";
				submit.style.display = "block";
				timeSection.style.display = "block";
			});

			no3.addEventListener("click", function() {
				window.open( properUrl(items.redirecturl), "_self" );
			});

			unblockTimeOutput.value = humanizeTime(unblockTime.value * 60.0);
			unblockTime.addEventListener('input', function() {
				unblockTimeOutput.value = humanizeTime(unblockTime.value * 60.0);
			});
		});
	});

}

chrome.runtime.sendMessage({ subject: "shouldblock", url: window.location.hostname }, function(response) {
	console.log( "Time remaining: " + response.remaining );
	if ( response.should ) {
		block();
	} else if ( response.remaining >= 0.0 ) {

		chrome.storage.sync.get(defaultOptions, function(items) {
			var remaining = response.remaining;
			var timerFunction = setInterval( function() {
				if ( remaining <= 0.0 ) {
					clearInterval( timerFunction );
					window.open( properUrl(items.redirecturl), "_self" );
				} else {
					//timer.innerHTML = waitTime;
					remaining -= 1000.0;
				}
			}, 1000);
		});
	}
});


