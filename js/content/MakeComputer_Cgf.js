function MakeComputer_Cgf( ){

    var ele = document.createElement("div");
   
    ajax("json/Computer.json", processUserList, ele);
    function processUserList(userList) {

        // Defining the edit area and how values will be validated.
        var userInputSpecs = [
            {
                "prompt": "Gpu: ",
                "fieldName": "Gpu",
                "dataType": "string",
                "minLen": 1, // required field
                "maxLen": 50
            },
            {
                "prompt": "User Image (URL): ",
                "fieldName": "pic",
                "dataType": "string",
                "minLen": 0, // empty string is OK
                "maxLen": 500
            },
            {
                "prompt": "DelieverDate: ",
                "fieldName": "DelieverDate",
                "dataType": "date",
                "minLen": 0 // means optional
            },
            {
                "prompt": "Price: ",
                "fieldName": "Price",
                "dataType": "number",
                "minVal": 10, 

                "minLen": 0, // means optional
                "maxLen": 10 // 10 characters including decimal point
            }
        ];
        var dTemplate = "<img src='${obj.pic}'/> " +
            "<div>"+
            "<h4>${obj.Gpu}</h4>"+
            "<p>DelieverDate: ${obj.DelieverDate} </p>"+
            "<p>Price :${obj.Price}</p>" +
            "</div>";
    
        // function MakeEditList({objList, inputSpecs, displayTemplate}) {
        ele.appendChild(MakeCrudList({
            objList:userList,
            inputSpecs: userInputSpecs, 
            displayTemplate: dTemplate
        }));
        
        // To show that the consumer's userList is updated with objects edited by the user
        var myButton = MakeTag({
           htmlTag:"button",
           innerHTML: "Print User Object List To Console",
           parent: ele
        });
        myButton.onclick = function() {
            console.log(userList);
        };
    }
   
   
    return ele;

}


