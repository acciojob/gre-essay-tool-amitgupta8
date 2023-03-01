//your code here
const textElement = document.querySelector("#evaluatedText");
const h3Element = document.querySelector("#wordCount");

function handleInput(e) {
	const match =sentence.match(/\S+/ig);
	const count = math.length ? match.length : 0;
	h3Element.textContent = count;
}
textElement.addEventListener('input', handleInput)


