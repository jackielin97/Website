"use strict";

function MakeSlideShowJ({
    picObjList = [
        { imageFileName: "pic/nothing.png", theGpu: "Nothing", theCpu: "No Cpu", price: "0" }
    ],
    ssTitle = "Untitled"
}) {
    // Create the main slideshow container
    var slideShow = document.createElement("div");
    slideShow.classList.add("slideShow");

    // Create a div to hold the image
    var div = document.createElement("div");
    slideShow.appendChild(div);

    // Create an image element and apply the CSS class for image size
    var myImage = document.createElement("img");
    myImage.classList.add("img-size"); // Apply the CSS class for image size
    div.append(myImage);

    // Create elements for GPU, CPU, and Price information
    var theGpu = document.createElement("h1");
    theGpu.classList.add("ssTitle");
    slideShow.appendChild(theGpu);

    var theCpu = document.createElement("p");
    slideShow.appendChild(theCpu);

    var price = document.createElement("p");
    slideShow.appendChild(price);

    // Create a container for buttons
    var buttonDiv = document.createElement("div");
    slideShow.appendChild(buttonDiv);

    // Create a "Back" button
    var backButton = document.createElement("button");
    backButton.innerHTML = " &lt; ";
    buttonDiv.appendChild(backButton);

    // Create a "Next" button
    var fwdButton = document.createElement("button");
    fwdButton.innerHTML = " &gt; ";
    buttonDiv.appendChild(fwdButton);

    // State to track whether CPU and Price should be hidden
    var hideInfo = false;

    // Function to toggle the visibility of CPU and Price
    function toggleInfo() {
        hideInfo = !hideInfo;
        setPic();
    }

    // Set the initial picture and information visibility
    var picNum = 0;
    setPic();

    // Function to set the picture and update information visibility
    function setPic() {
        myImage.src = picObjList[picNum].imageFileName;
        theGpu.textContent = picObjList[picNum].theGpu;

        // Check if CPU and Price should be hidden
        if (hideInfo) {
            theCpu.style.display = "none";
            price.style.display = "none";
        } else {
            theCpu.style.display = "block";
            price.style.display = "block";
            theCpu.textContent = picObjList[picNum].theCpu;
            price.textContent = picObjList[picNum].price;
        }
    }

    // Function to navigate to the next picture
    function nextPic() {
        if (picNum < picObjList.length - 1) {
            picNum++;
        }
        setPic();
    }

    // Function to navigate to the previous picture
    function prevPic() {
        if (picNum > 0) {
            picNum--;
        }
        setPic();
    }

    // Add event listeners to the "Back" and "Next" buttons
    backButton.onclick = prevPic;
    fwdButton.onclick = nextPic;

    // Add a button to hide/show CPU and Price information
    var hideInfoButton = document.createElement("button");
    hideInfoButton.innerHTML = "Toggle Info";
    hideInfoButton.onclick = toggleInfo;
    buttonDiv.appendChild(hideInfoButton);

    // Function to set the current picture based on an external call
    slideShow.setPicNum = function (newNum) {
        if (newNum >= 0 && newNum < picObjList.length) {
            picNum = newNum;
            setPic();
        }
    };

    return slideShow;
}

// Add a CSS class to define the image size
// You can include this in your external CSS file
// .img-size {
//     width: 200px; /* Set your desired width */
//     height: 150px; /* Set your desired height */
// }
