"use strict";
function MakeComputerR({computerList=[],title="No title"})
  
  {function MakeComputer({theGpu="noGpu",theCpu="noCpu",thePrice=0,url="https://previews.123rf.com/images/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/112815904-no-image-available-icon-flat-vector-illustration.jpg"}) {

  /*,theCpu,theMotherboard,ThePrice*/
  function formatCurrency(numStr) {

    numStr += ""; // convert to string, if it's not a string.

    // remove formatting characters, if there are any
    numStr = numStr.replace("$", "");
    numStr = numStr.replace(",", "");

    var num = Number(numStr); // convert to number again.

    var formattedNum = num.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 });
    console.log("formattedNum:" + formattedNum);
    return formattedNum;
  }
        // Declare a new state variable called 'gpu' with initial value = theGpu.
  // Use setGpu whenever you need to change the value of this state variable.
  const [cpu, setCpu] = React.useState(theCpu);

  // Declare a new state variable called 'gpuInput' with initial value = empty string.
  // Use setGpu whenever you need to change the value of this state variable.
  const [cpuInput, setCpuInput] = React.useState("");


  const [gpu, setGpu] = React.useState(theGpu);
  const [gpuInput, setGpuInput] = React.useState("");

  const [Price, setPrice] = React.useState(formatCurrency(thePrice));  
   const [priceInput, setPriceInput] = React.useState("");
 
 
    function changeGpu() {
    setGpu(gpuInput);
    // no need for a "display" function -- react redisplays automatically
    // whenever a state variable changes (using the official state variable setter function). 
  }
 
  function changeCpu(){
    setCpu(cpuInput);
  }


  function makeNum(inpNum) {

    let numStr = inpNum + ""; // convert to string, if it's not a string.

    // remove formatting characters, if there are any
    numStr = numStr.replace("$", "");
    numStr = numStr.replace(",", "");

    var num = Number(numStr); // convert to number again.

    return num;
}

function changeSalary() {
  var n = Number(priceInput);
  var newPrice = n;
  setPrice(formatCurrency(newPrice));
  // no need for a "display" function -- react redisplays automatically
  // whenever a state variable changes (using the official state variable setter function). 
}


/*return (
  <div>
    <p>Using template literals in React:</p>
    <p>{`Hello, ${dynamicText}!`}</p>
    <p>
      This is a multi-line string
      <br />
      using backticks.
    </p>
  </div>
);
}*/



  return (
    <div>
      <h3>New Computer</h3>
     
      {`gpu: ${gpu}` } <br />
      <button onClick={changeGpu}> Change Gpu to: </button>
      <input value={gpuInput} onChange={e => setGpuInput(e.target.value)} /> <br />

      {`cpu:${cpu}`} <br/>
      <button onClick={changeCpu}> Change Cpu to </button>
      <input value={cpuInput} onChange={e => setCpuInput(e.target.value)} /> <br />

      {`price:${Price}`}<br/>
      <button onClick ={changeSalary}>Change Sallary</button>
       <input value= {priceInput} onChange={e=>setPriceInput(e.target.value)}/> <br/>
      
      <div class="image-container">
       <img src={url}/>
       </div>

    </div>
 
  );

    }
      return(  

        <div className= "computerList">
          <h2>{title}</h2>
          {
            computerList.map(computer =>
              <MakeComputer key={computer.id} theGpu={computer.theGpu} theCpu={computer.theCpu} thePrice={computer.thePrice} url={computer.url}/>
              )
          }
        </div>
       );



}
