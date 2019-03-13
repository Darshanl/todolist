import React from 'react';
import './AddToList.css';

const AddToList = ({addChange, textChange, keyPressed, searchField}) => {
    return(
        <div className="pa2">
            <input type='text' onChange={textChange} onKeyPress={keyPressed}
            name='searchField'
            className="pa1 b--none bg-light-gray"
            value={searchField}
            placeholder="Add.."
            />
            <button onClick = {addChange}
            className="btn pa1 bw1 b--none bg-light-red">
                Add To List
            </button>
        </div>
    );
}

export default AddToList; 