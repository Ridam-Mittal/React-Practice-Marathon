import { useState } from "react";

function App() {

  let [counter, setCounter] = useState(0);


  const addvalue = () =>{
    setCounter(counter+1);
    console.log('value added');

    //  if we need to update values by 4 then 
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);  will not work

    /*
    but 
    setCounter(prevcounter => prevcounter+1)
    setCounter(prevcounter => prevcounter+1)
    setCounter(prevcounter => prevcounter+1)
    setCounter(prevcounter => prevcounter+1) will work because in this callback function it first grabs the previous state of the counter which has to be updated
    */
  }

  const subtractvalue = () =>{
    // count -= 1;
    setCounter(counter-1);
    console.log('value subtracted');
    
  }

  return (
    <>
      <h1 style={{color:'white'}}>Chai and React</h1>
      <h2 style={{color:'white'}}>Counter value:{counter}</h2>

      <button onClick={addvalue}>Add value {counter}</button>
      <br />
      <br />
      <button onClick={subtractvalue}>Decrease value {counter}</button>
    </>
  )
}

export default App
