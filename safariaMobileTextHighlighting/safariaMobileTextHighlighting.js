const searchWord = <iOS 12 SHORTCUTS VARIABLE>

const search = {
	[searchWord]: '<span style="background-color:yellow"; color:black>' + searchWord + '</span>'
};

const replaceWords = text =>
	Object.keys(search).reduce(
		(acc, word) => acc.replace(new RegExp(word, "g"), search[word]),
		text
	);

document.body.innerHTML = replaceWords(document.body.innerHTML);

completion();