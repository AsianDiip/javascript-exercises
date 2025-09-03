const repeatString = function(phrase, repAmount) {
    if(repAmount < 0){
	    return "ERROR";
    }
    let returnString = ""
    for(let i = 0; i < repAmount; i++){
        returnString = returnString + phrase;
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
