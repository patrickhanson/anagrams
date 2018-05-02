function alphabetize(a) {
    return String(a).toLowerCase().split("").sort().join("").trim();
}

document.getElementById("findButton").onclick = function () {
    var typedText = document.getElementById("input").value;
    let anagrams = []
    for(let i = 0; i <= words.length; i++) {
        let currentWord = alphabetize(words[i])
        if(currentWord == alphabetize(typedText)) {
            anagrams.push(words[i])
        }
    }

    for(let currentWord of anagrams) {
        let span = document.createElement("span")
        let textContent = document.createTextNode(currentWord + " ")
        span.appendChild(textContent)
        document.getElementById("result").appendChild(span)
    }
}