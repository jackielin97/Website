function Validate_Cgf2() {

    var ele = document.createElement("div");
    ele.innerHTML = `
    <h1>User Input</h1>

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
            "prompt": "What is Your Name : ",
            "fieldName": "Name",
            "dataType": "string",
            "maxLen": 15,
            "isRequired": true

        },
        {
            "prompt": "What is your birthdate : ",
            "fieldName": "Birthdate",
            "dataType": "date",
            "minLen": 0, // this could mean optional but you could use a different property
            "isRequired": true

        },
        {
            "prompt": "What is your Liscence Number : ",
            "fieldName": "Liscence Number:",
            "dataType": "integer",
            "minLen": 0, // could mean optional
            "minVal": 10

        },
        {
            "prompt": "How many years have you driven before",
            "fieldName": "years driven",
            "dataType": "number",
            "isRequired": true
        },

        {
            "prompt": "Would you like to buy or rent",
            "fieldName": "Rent Type",
            "dataType": "radio",
            "choices": ["Buy", "Rent"],
            "isRequired": true,
        },{
            "prompt":"If you are renting, how long?",
            "fieldName":"Rent length",
            "dataType":"select",
            "valueList":["Not Renting","One Month","Two Month","Three Month"]
        }
    ];
    var genSelectTag = MakeSelect({
        valueList: ["Freshman", "Sophomore", "Junior", "Senior", "Graduate"],
        selectedValue: "Sophomore",
    });

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
        "Name": "",
        "Birthdate": "",
        "Liscence Number:": "",
        "years driven": "",
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
