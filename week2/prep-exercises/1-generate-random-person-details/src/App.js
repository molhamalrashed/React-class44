import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [person, setPerson] = useState(null);
    const [counter, setCounter] = useState(0);

    const handleCounter = ()=> {
      setCounter(counter + 1);
    }

    const getPerson = async()=> {
        try{
           const response = await fetch(`https://www.randomuser.me/api?results=1`);
           const data = await response.json();
           setPerson({
            firstName: data.results[0].name.first,
            lastName: data.results[0].name.last,
            email: data.results[0].email
           })
         } catch(err){
            console.log(`Error is: ${err}`);
         }
        }

        useEffect(()=> {
            getPerson();
        },[counter])


        if(!person){
          return(
            <h1>Loading ....</h1>
          )
        }
        return (
          <div className='person-div'>
              <h1>First name: {person.firstName}</h1>
              <h1>Last name: {person.lastName}</h1>
              <h1>Email: {person.email}</h1>
              <button className='person-button' onClick={handleCounter}>Show a new person</button>
          </div>
  );
}

export default App;
