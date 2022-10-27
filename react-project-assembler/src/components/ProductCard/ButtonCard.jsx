import { useState } from "react";

const ButtonCard = ({value=0}) => {


    const [counter, setCounter] = useState(value);

    const increaseValue = () => {
      setCounter(counter + 1);
    };
  
    const substractValue = () => {
      setCounter(counter - 1);
    };
  
   
return(
    <div>

    <p>{counter}</p>
    <button onClick={increaseValue}>+</button>
    <button onClick={substractValue}>-</button>


    </div>
)
}
export default ButtonCard
