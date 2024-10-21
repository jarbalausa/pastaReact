import {useState} from "react";

function Counter() {

    const[counter ,setCounter ] = useState(0);

    function increment() {
        setCounter(counter +1);

    }

    function decrement(){
        if(counter > 1){
            setCounter(counter -1);
        }
        
    }

    return(
        <div className="counter">
            <button className={counter > 1 ? "button-counter" : "button-counter disabled"} onClick={decrement}> - </button>
            <button className="number"> {counter} </button>
            <button className="button-counter" onClick={increment}> + </button>
            

        </div>
    );
}

export default Counter;