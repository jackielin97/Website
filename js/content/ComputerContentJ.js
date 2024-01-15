"use strict"; // Enable strict mode

function ComputerContentJ() {

        var ele = document.createElement("div");
        //ele.classList.add("blog");

        // function MakeComputerListJ({ ComputerList = [], title = "default" }) {

        var MayComputerList = [
                {theGpu:"GPU100", theCpu:"CPU1000",thePrice: 2000,url:"https://png.pngtree.com/element_our/20200610/ourmid/pngtree-computer-screen-image_2247840.jpg"},
                {}
        ];

        var JohnComputerList=[
                {theGpu:"GPU50", theCpu:"CPU500",thePrice:"500$"},
                {}

        ];
        var MayCarComp = MakeComputerListJ({
                ComputerList: MayComputerList,
                title: "May Computer Sale"
        });

        var JohnCarComp= MakeComputerListJ({ComputerList:JohnComputerList,
        title:"John Computer sale"})
        ele.appendChild(MayCarComp);

        ele.appendChild(JohnCarComp);
        return ele;
}