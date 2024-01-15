function MakeSelect( {valueList, selectedValue} ) {

    var selectList = document.createElement("select");

    // check that we have the parameter properties that we need.

    // add options to the select list
    for (listEle of valueList) { // listEle is valueList[0], valueList[1], ...
        var myOption = document.createElement("option");
        myOption.innerHTML = listEle; // what shows in the select tag
        myOption.value = listEle; // the value behind each item shown in the select tag.

        if (selectedValue === listEle) {  
            myOption.selected = "selected";
        }
        selectList.appendChild(myOption);
    }

    return selectList;

} // makeSelect