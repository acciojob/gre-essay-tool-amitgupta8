const evaluatedText = document.getElementById('evaluatedText');
const wordCount = document.getElementById('wordCount');

evaluatedText.addEventListener('input', function() {
    const text = evaluatedText.value;
    const words = text.split(' ').filter(function(word) {
        return word.length > 0;
    });
    wordCount.textContent = words.length;
});
