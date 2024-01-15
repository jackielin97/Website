"use strict";

function ComputerContent() {
    var Computerlist=[
        {},
        {theGpu: "Gpu432", theCpu: "Cpu41",thePrice:4,url:"https://png.pngtree.com/element_our/20200610/ourmid/pngtree-computer-screen-image_2247840.jpg"},
        {theGpu:"43",theCpu:"CPU4314",thePrice:53}
    ]
  
    var Computerlist2=[
        {},
        {theGpu: "GPU000", theCpu: "CPU00",thePrice:412}

    ]
    return (
        <div>
            <h1>Make Your Computer</h1>
            <MakeComputerR computerList={Computerlist} title="John List"/> 
            <MakeComputerR computerList={Computerlist2} title="jake List"/>
        
        </div>
    );
}
