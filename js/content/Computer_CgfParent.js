function Computer_CgfParent() {
    var ele = document.createElement("div");
    ele.classList.add("flex");
    ele.innerHTML = `
        <style>
            .flex {
                display: flex;
                direction: column;
                padding-top: 20px;
                background-color: #f10f1f19; /* Set your desired background color */
            }
            .half {
                width: 45%;
            }
            
            
        </style>
    `;
   
    ele.appendChild(MakeComputer_Cgf());
    ele.appendChild(MakeComputer_Cgf2());
    return ele;
} 

// Since there's no router, add the DOM element (that was made by the CGF) onto the page.
