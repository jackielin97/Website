"use strict";
function SS_AJAX_CGF() {

  // Create a DOM element (div) like a CGF would do. 
  var ele = document.createElement("div");

  // style ele as a flex box and place two divs in that flex box
  // (each 50% wide). Each of these divs will hold one slide show.

  ele.innerHTML = `
                <style>
                  .ssFlex {
                    display:flex;
                    flex-direction:row;
                  }
                  .ssFlex .ssHolder {
                    width: 32%;
                    box-sizing:border-box;
                    text-align:center;
                    margin-left: 0.5%;
                    margin-right:0.5%;
                  }
                </style>
                <div class="firstDiv ssHolder">
                  <h3>Computer List</h3>
                </div>
                <div class="secondDiv ssHolder">
                  <h3>Another Computer List</h3>
                </div>
                <div class="thirdDiv ssHolder">
                  <h3>Default</h3>
                </div>
              `;

  ele.classList.add("ssFlex"); // if we want ele to pick up the above 'ssFlex' styling. 

  // Get a reference to the two divs into which you want to place 
  // slide show components. 
  var firstDiv = ele.getElementsByClassName("firstDiv")[0];
  var secondDiv = ele.getElementsByClassName("secondDiv")[0];

  // Shows how an ajax error is handled -- you'll see an error 
  // message on the page. waterFunnn.json is mispelled.
  ajax("json/AnotherComputer.json", processFunList, firstDiv);
  function processFunList(funList) {

    // funList is what you get back from the ajax call - the contents of the json file, 
    // converted to a JavaScript object.

    var funImages=[];

    // MakeSlideShow expects an array of image file names. 
    var funObjList = []; 
    for (var i = 0; i < funList.length; i++) {
        funObjList[i] = {
            imageFileName: funList[i].pic, 
            theGpu: funList[i].Gpu,// if item is what you want for your caption... 
            theCpu: funList[i].Cpu,
            price:funList[i].Price
        };
    }          


    
    console.log("funImages on next line");
    console.log(funObjList);
    var ss = MakeSlideShowJ({ picObjList: funObjList });
    firstDiv.appendChild(ss);

    // Example showing why you need to get the ss reference, so the HTML page can invoke 
    // any public methods that may be available from the returned slide show object.
    ss.setPicNum(1);
  }


  ajax("json/Computer.json", processCarList, secondDiv);
  function processCarList(catList) {

    // MakeSlideShow expects an array of image file namesct has a property called "imageFileName", 
    // So let's create a new Object List that has the right property names inside.
    // We can use the map function to do this instead of the technique used above. 
    // For each cat in cat list, we are returning a different object that'll get added to array 'newCatList'.
       // MakeSlideShow expects a list of objects, each object having an imageFileName and a caption 
    // property, so provide that... 
    // MakeSlideShow expects a list of objects, each object having an imageFileName and a caption 
    // property, so provide that... 
    var funObjLists = []; 
    for (var i = 0; i < catList.length; i++) {
        funObjLists[i] = {
            imageFileName: catList[i].pic, 
            theGpu: catList[i].Gpu,// if item is what you want for your caption... 
            theCpu:catList[i].Cpu,
            price:catList[i].Price
        };
    }           
   


    console.log(funObjLists);

    var ss = MakeSlideShowJ({ picObjList: funObjLists });
    secondDiv.appendChild(ss);

    // Example showing why you need to get the ss reference, so the HTML page can invoke 
    // any public methods that may be available from the returned slide show object.
    ss.setPicNum(2);
  }





  
  // To show how MakeSlideShow deals with an empty object parameter, there's no need to make an AJAX call... 
  var thirdDiv = ele.getElementsByClassName("thirdDiv")[0];
  var ss3 = MakeSlideShowJ({});
  thirdDiv.appendChild(ss3);

  return ele;
}