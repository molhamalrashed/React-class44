import React, {useState} from 'react';

const DropList = ({options, onSelect}) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleDropList = () => {
        setIsOpen(!isOpen);
    }

    const handleSelectedOption = (option)=> {
        setSelectedOption(option);
        setIsOpen(false);
        onSelect(option);
    }

    return (<div className='dropList'>
        <button className='category-button' onClick={handleDropList}>
          <div className='button-text'> {selectedOption? selectedOption : "Select a Category"}</div> 
        </button>
        {isOpen && (
            <ul>
                {options.map((option) => (
                    <li key ={option} onClick={()=> handleSelectedOption(option)}>{option}</li>
                ))}
            </ul>
        )}
    </div>);
}

export default  DropList;