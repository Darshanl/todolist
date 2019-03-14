import React from 'react';
import './AddToList.css';

const AddToList = ({addChange, textChange, keyPressed, searchField}) => {
    return(
        <div className="pa2">
            <input type='text' onChange={textChange} onKeyPress={keyPressed}
            name='searchField'
            className="inp bg-light-blue pa1 b--none bg-light-gray inputBG"
            value={searchField}
            placeholder="Add.."
            autoComplete="off"
            />
            <button onClick = {addChange}
            className="btn pa1 bw1 bg-light-red inputbg">
                <i class="fa fa-plus-square fa-1x" aria-hidden="true"></i>
            </button>
        </div>
    );
}

export default AddToList; 