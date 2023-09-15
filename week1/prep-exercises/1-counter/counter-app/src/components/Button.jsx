import React from 'react';

function Button ({increment}){
    return(
        <div>
            <button onClick={increment}> Add 1</button>
        </div>
    );
}


export default Button;