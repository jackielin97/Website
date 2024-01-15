"use strict";

/*
 MakeRadio: create and return a <form> tag that is a radio group with overall prompt, 
 then prompts for all the choices. A <form> tag does not have a value property, but 
 I have added a custom property called "value" so that it is easier to use this component 
 alongside other input elements (which all have a "value" attribute). 
 Whenever the user clicks on any radio input, the form tag's value property is set to 
 the value of the clicked user choice.
 */

/* Here's an example of the "well formed HTML" that is the target of what we are trying 
to build. The "name" of all the radio button elements (within a form) must be the same 
so the browser bundles the radio buttons into one radio group. 
 
 Which pizza topping is your FAVORITE?<br/>
 <input type="radio" name="favTopping" value="Chz" /> Cheeze  <br/>
 <input type="radio" name="favTopping" value="Mush" checked /> Mushrooms <br/>
 <input type="radio" name="favTopping" value="Pep" /> Pepperoni <br/>

 NOTE: we typically avoid <form> tags with single page applications (because we do
    not want buttons inside of <form>'s to try to submit/reload the html page). 
    However, since we are creating the <form> tag and we are NOT putting any buttons 
    inside, it should be OK.
 */

// Destructured input parameter (with default values specified in function header). 
function MakeRadio({ 
    prompt = "Enter a value", 
    choices = ["Radio Button Selection"], 
    selected = "" }) {

    // MakeTag function input properties:
    //    Required: htmlTag 
    //    Optional: innerHTML, cssClass, src, type, name, value, parent.
    var frm = MakeTag({
        htmlTag: "form",
        cssClass: "radio"
    });


    // "for .. of" is easier way to iterate over an array -- you don't have to use index i.
    // choice represents choices[i] if you had used an index value. 
    for (var choice of choices) {

        // each option of the radio button will be in a new paragraph (new line)
        var para = MakeTag({
            htmlTag: "p",
            parent: frm
        });

        // This adds the little circle in the paragraph (input type="radio")
        var option = MakeTag({
            htmlTag: "input",
            type: "radio",
            name: "radName", // doesnt matter what this is (but must match the code that's 
            // in the option onclick function below)
            value: choice,
            parent: para
        });

        // after the radio button option (the little circle), put a label for the choice
        MakeTag({
            htmlTag: "span", // span is like div (a container) but doesnt start/end on new line.
            innerHTML: choice,
            parent: para
        });

        // if this choice matches selected, then make that radio button pre-selected. 
        if (selected === choice) {
            option.checked = true;
            frm.value = choice;
        }

        // whenever the user clicks on one of the radio button option, set the a public "value" 
        // property of radio button component (the form which is the DOM element returned by this Make function)
        option.onclick = function () {
            frm.value = frm.radName.value;
        };

    }

    // to get the selected value of the radio buttton, just access the public data member named "value" 
    // (makes it easier to use along with input elements which already have a public property "value". 

    return frm;
}