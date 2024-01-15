"use strict";
function SS_AJAX_CGF_R() {

    var myPicList = [];

    console.log("SS_AJAX_CGF_R is running !!");

    // Tell React that 'items' (an array of objects) is a state variable 
    // that (when changed by the React provided setter function 'setItems')
    // should redisplay this component. Set its initial value to [], an empty array.
    const [items, setItems] = React.useState([]);

    // Tell React that "error" is a state variable that (when changed by the React 
    // provided setter function 'setError') should redisplay this component. 
    // Set its initial value to null.
    const [error, setError] = React.useState(null);

    // Common React pattern. Display some "...Loading..." UI 
    // while the page is loading, then do whatever needs to be done
    // (presumably just once). 
    const [isLoading, setIsLoading] = React.useState(true);

    var newComputer;

    // useEffect takes two params. First is function to be run, 
    // second is list of state variables that (if they change) will 
    // cause that function to be run again. 
    // Common react pattern: with empty list of state variables, then 
    // that function is only run one time at the start of building the 
    // component. 

    // If you put initialization code before this useEffect, that code
    // would be run any time that a state variable changes (not good). 
    React.useEffect(
        () => {

            // ajax_alt takes three parameters: the URL to read, Success Fn, Failure Fn.
            ajax_alt(
                //NOTE: this only has the ../ because the code is in a subfolder... 
                "json/Computer.json", // URL for AJAX call to invoke

                function (catList) {   // ajax_alt calls this function if ajax call successful 
                    console.log("AJAX call successful, catList on next line:");
                    console.log(catList);

                    // map function creates newCats as an array of image file names from catList,
                    // an array of  objects (where the image file name was in property 'pic').
                    newComputer = catList.map(function(Computer) {
                        return {Image: Computer.pic, theGpu: Computer.Gpu, theCpu: Computer.Cpu, Price: Computer.Price};
                    });
                    
                                     // MakeSlideShow expects a list of objects, each object having an imageFileName and a caption 
    // property, so provide that... 
   //            var funObjList = funList.map(function (funObj) {
   //                 return {
   //               imageFileName: funObj.pic,
   //                 caption: funObj.item  // if item is what you want for your caption...
   //     };
  //  });        
                    
                    console.log("newCats on next line");
                    console.log(newComputer);
                    

                    setItems(newComputer);
                    setIsLoading(false);

                },
                function (errorMsg) { // ajax_alt calls this function if ajax call fails
                    setError("AJAX Error: " + errorMsg);
                    setIsLoading(false);

                }
            );

        },
        [] // list of state variables. empty means run just once
    );

    if (isLoading) {
        return <div> Loading... </div>
    }

    if (error != null) {
        return <div>
            <h3> {error} (error)</h3>
        </div>
    }

    return (
        <div>
            <MakeSlideShowR picList={items} ssTitle="Jackies Computers" />
            <MakeSlideShowR />
        </div>
    );
}