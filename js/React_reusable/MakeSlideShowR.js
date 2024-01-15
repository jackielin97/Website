"use strict";
/*
 * Note that we expect a parameter object with two properties. 
 * If any param property is not provided, default values have been specified.
 * Note that ssTitle has not been used... 
 */
// Old or "normal" way to declare the function header
// function MakeSlideShowR({
//     picList = ["https://cis-linux2.temple.edu/~sallyk/pics_cat/pic5.png"],
//     ssTitle = "Untitled"
// }) {

// Most React programmers like to use fat arrow to declare function header
// Both ways shown use parameter object destructuring with default values specified.
//need to pass a picture imiage and a caption
        const MakeSlideShowR = ({
    picList = [{Image: "pic/nothing.png", theGpu:"Gpu1",theCpu:"Cpu1",Price:"1000"}],
    
    ssTitle = "Nice Computers"
}) => {

    // Any data member (of the object being represented by our User Inteface) must
    // be declared as a React state variable using React.useState. We must always use 
    // the React provided setter function to change the value of that state variable. 
    // For example, we must use setPicNum to change the value of picNum. Whenever we 
    // use one of these React provided setters, the UI of our component will automatically 
    // be redisplayed by React. 
    const [picNum, setPicNum] = React.useState(0);
    const [showInfo, setShowInfo] = React.useState(false);
    const [showButton, setShowButton] = React.useState(true);
    function nextPic() {
        console.log("ready to increment " + picNum);
        if (picNum < picList.length - 1) {
            setPicNum(picNum + 1);
        } else {
            console.log("Can't go next. picNum is already " + picNum + " (and list length is " + picList.length + ").");
        }
    }

    function prevPic() {
        console.log("ready to decrement " + picNum);
        if (picNum > 0) {
            setPicNum(picNum - 1);
        } else {
            console.log("Can't go back. picNum is already 0.");
        }
    }

    function hideInfoFn(){
        setShowInfo(true);
        setShowButton(false);
    }

    function showInfoFn () {
        setShowInfo(false);
        setShowButton(true);
        }

    return (
        <div className="slideShow">
            <div>
                 <h1>{ssTitle}</h1>

             <div> <img src={picList[picNum].Image} /> </div>
                <div>{picList[picNum].theGpu}</div>
                <div>{picList[picNum].theCpu}</div>
                <div>{picList[picNum].Price}</div>
            </div>
            <button onClick={prevPic}>Back</button>
            <button onClick={nextPic}>Next</button>
           {showButton ? <button onClick={hideInfoFn}>Less...{showButton}</button>:null } 
           { showInfo ? 
            <button onClick={showInfoFn}>More...{showInfo}</button> :null}

        </div>
    );
}

