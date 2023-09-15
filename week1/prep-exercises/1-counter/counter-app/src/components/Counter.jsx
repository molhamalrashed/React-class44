import React, {useState} from "react";
import Count from './Count';
import Button from './Button';

function Counter(){
   const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const feedBack = count > 10 ? "It's higher than 10" : "Keep counting ...!";

    return (
        <div>
        <h1>My Counter</h1>
        <Count count = {count} feedBack = {feedBack} />
        <Button increment={handleIncrement} />
        </div>
    );
}

export default Counter;

