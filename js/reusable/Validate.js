"use strict";

// We are still following JS file naming convention: 
// "JS file name matches the single JS function or object defined within."
// Validate object matches Validate.js 
var Validate = {};

// Now we add public methods to Validate object (all validation functions)

Validate.Number = function (inputVal, isRequired,minVal ,maxVal) {
    if (isRequired && inputVal.length === 0) {
        return "Required";
    }
    if (isNaN(inputVal)) {
        return "Error. Not a valid number.";
    }
    if(minVal>inputVal){
        return" Incorrect please enter higher number  than "+minVal;
    }
    if(maxVal<inputVal){
        return" Incorrect please enter  number lower than "+maxVal;
    }
    return "";
}

// Using Fat Arrow notation 
// (just an alternative to "regular" function definition above)
Validate.Integer = (inputVal, isRequired,minVal ,maxVal) => {
    if (isRequired && inputVal.length === 0) {
        return "Required";
    }
    if(minVal>inputVal){
        return" Incorrect please enter higher number  than "+minVal;
    }
    if(maxVal<inputVal){
        return" Incorrect please enter  number lower than "+maxVal;
    }

    if (!isNaN(inputVal)) { // means it is a number... 
        var numVal = Number(inputVal);
        var diff = numVal - Math.floor(numVal);
        if ((diff < 0.0001) && (diff > -0.0001)) {
            return "";
        } else {
            return "Error. You entered a number, but it's not an integer.";
        }
    }
    return "Error. Not a valid integer (not a number either).";
}



Validate.String = (inputVal, isRequired,minLen ,maxLen) => {
    console.log(inputVal)
    console.log(inputVal.length)
    console.log(maxLen)
    if (isRequired && inputVal.length === 0) {
        return "Required";
    }
    if (minLen> inputVal.length){
        return "Error: Min Length is"+minLen;
    }
    if (inputVal.length > maxLen) {
        return "Error: Max len is  " +
            maxLen  
        // inputVal.substring(0, maxLen);
            
        }
    return "";
}

/* Note about date validation... I wanted to write some JS code (like above)
to check if a user entered string was a valid date but it actually seems difficult 
(and looks like you need a framework !!!)  So, we will just use the HTML5 
input type="date" which provides a nice date UI and no way the user can enter 
an invalid date. All we need to do is check that the user clicked a date 
(if the date input is required). For this, we can use the generic "RequiredField"
validation below, for a date or any type of input). 
*/
Validate.RequiredField = (inputVal, isRequired) => {
    if (isRequired && inputVal.length === 0) {
        return "Required";
    }
    return "";
}