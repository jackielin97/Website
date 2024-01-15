function Validate_Cgf() {

    var ele = document.createElement("div");

    ele.innerHTML = `
    <h1>Car Input</h1>

        <div class="editAreaC"></div>
        <h4>Message Area</h4>
        <div class="msgAreaC"></div>
        `;

    var editArea = ele.getElementsByClassName("editAreaC")[0];
    var msgArea = ele.getElementsByClassName("msgAreaC")[0];

    /*  This is what my JSON data looks like (pretend coming from DB). Your   
        JS field names need to exactly match these field names to prevent issues. 
     "webUserId": "1",
     "userEmail": "abha@temple.edu",
     "image": "http://cis-linux2.temple.edu/~sallyk/pics_users/abha.jpg",
     "birthday": "11/22/2001",
     "membershipFee": "",
     "userRoleId": "3",
     "userRoleType": "Member",
     "errorMsg": ""
     */

     var userInputSpecs = [
        {
            "prompt": "What Car Model are you looking for : ",
            "fieldName": "Car Model",
            "dataType": "string",
            "minLen": 5, 
            "maxLen": 15,
            "isRequired":true
    
        },
        {
            "prompt": "What date would you like this delieved : ",
            "fieldName": "Date Delieved",
            "dataType": "date",
            "minLen": 0 // this could mean optional but you could use a different property
        },
        {
            "prompt": "What year make are you looking for : ",
            "fieldName": "YearMake:",
            "dataType": "integer",
            "minLen": 0, // could mean optional
            "minVal": 10, 
            "maxVal": 2030
        },
        {"prompt": "How much down payment would you like to put on",
        "fieldName":"Down Payment",
        "dataType":"number",
        "isRequired":true
        },
        {"prompt":"How would you like to pay",
        "fieldName":"Payment",
        "choices":["Credit Card","Cash"],
        "dataType":"radio",
        "selected":"Cash",

        "isRequired":true
    },{
        "prompt":"Would you like to buy our insurance for this car?",
        "fieldName":"Car insurance?",
        "dataType":"select",
        "valueList":["Yes","No"]
    }
   
];

    function success(inpObj) {
        msgArea.innerHTML += "We will process your request with these values:<br/>";
        for (propName in inpObj) {
            msgArea.innerHTML += "&nbsp; &nbsp; " + propName + ": " +
                inpObj[propName] + "<br/>";
        }
        msgArea.innerHTML += "<br/>";
    }

    function cancel() {
        msgArea.innerHTML += "Sorry that you decided to cancel.<br/><br/>";
    }

    var userToEdit = {
        "Car Model": "Honda",
        "Date Delieved": "11/3/2023",
        "YearMake:": "2002",
        "Down Payment":"100"
    };

    var component = MakeEditArea({
        inputSpecs: userInputSpecs,
        successCallBack: success,
        cancelCallBack: cancel,
        editObj: userToEdit
    });
    editArea.appendChild(component);

    return ele;

} // validate_CGF

// since there's no router, add the DOM ele (that was made by the CGF) onto the page. 
