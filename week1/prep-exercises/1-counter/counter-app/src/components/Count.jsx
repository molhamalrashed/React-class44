import React from 'react';

function Count ({count , feedBack}){
    return (
        <div>
            <p>You are in the count {count}</p>
            <p>{feedBack}</p>
        </div>
    );
}

export default Count;