"use strict"; // Enable strict mode

function MakeComputerListJ({ ComputerList = [], title = "default" }) {

    function MakeComputerJ({
        theGpu = "noGpu",
        theCpu = "noCpu",
        thePrice = 0,
        url = "https://previews.123rf.com/images/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/112815904-no-image-available-icon-flat-vector-illustration.jpg"
    }) {

        var compObj = document.createElement("div");
        compObj.classList.add("computer"); // Add the "computer" class to the div

        compObj.setAttribute("data-Gpu", theGpu);
        compObj.setAttribute("data-Cpu", theCpu);
        compObj.setAttribute("data-Price", thePrice);

        // Create an img element for displaying the image
        var imgElement = document.createElement("img");
        imgElement.classList.add("image-container"); // Add the "image-container" class to the img element
        imgElement.setAttribute("src", url);
        compObj.appendChild(imgElement);

        function formatCurrency(num) {
            return num.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 });
        }

        var CompObjInfo = document.createElement("div");
        compObj.appendChild(CompObjInfo);

        var display = function () {
            CompObjInfo.innerHTML = "Gpu is: " + compObj.getAttribute("data-Gpu") + "<br/> CPU:" + compObj.getAttribute("data-Cpu") + "<br/> Price" +
                formatCurrency(compObj.getAttribute("data-Price"));
        }

        compObj.setGpu = function (newGpu) {
            compObj.setAttribute("data-Gpu", newGpu)
            display();
        }

        compObj.setCpu = function (newCpu) {
            compObj.setAttribute("data-Cpu", newCpu)
            display();
        }

        compObj.setPrice = function (newPrice) {
            compObj.setAttribute("data-Price", newPrice)
            display();
        }

        var GpuButton = document.createElement("button");
        GpuButton.innerHTML = "Change Gpu to: ";
        GpuButton.classList.add("computer"); // Add the "computer" class to the button
        compObj.appendChild(GpuButton);

        var newGpuInput = document.createElement("input");
        compObj.appendChild(newGpuInput);

        var CpuButton = document.createElement("button");
        CpuButton.innerHTML = "change Cpu to";
        CpuButton.classList.add("computer"); // Add the "computer" class to the button
        compObj.appendChild(CpuButton);

        var newCpuInput = document.createElement("input");
        compObj.appendChild(newCpuInput);

        var PriceButton = document.createElement("button");
        PriceButton.innerHTML = "Change Price to";
        PriceButton.classList.add("computer"); // Add the "computer" class to the button
        compObj.appendChild(PriceButton);

        var newPriceInput = document.createElement("input");
        compObj.appendChild(newPriceInput);

        GpuButton.onclick = function () {
            compObj.setGpu(newGpuInput.value);
        };

        CpuButton.onclick = function () {
            compObj.setCpu(newCpuInput.value);
        }

        PriceButton.onclick = function () {
            compObj.setPrice(newPriceInput.value);
        }

        compObj.appendChild(document.createElement("br"));
        display(); // show initial properties on the page

        return compObj;
    }

    var listComp = document.createElement("div");
    listComp.classList.add("computerList"); // Add the "computerList" class to the container div

    listComp.innerHTML = `<h2>${title}</h2>`;

    for (var compObj of ComputerList) {
        listComp.appendChild(MakeComputerJ(compObj));
    }

    return listComp;
}
