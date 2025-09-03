const reverseString = function(phrase) {
    let phraseArr = phrase.split();
    phraseArr = phraseArr.reverse();
    return phraseArr.join();
};

// Do not edit below this line
module.exports = reverseString;
