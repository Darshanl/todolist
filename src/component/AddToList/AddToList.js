import React from 'react';
import './AddToList.css';

const AddToList = ({addChange, textChange, keyPressed, searchField}) => {
    return(
        <div className="pa2" style={{minWidth:'250px', maxWidth:'20%', margin:'auto'}}>
            <input type='text' onChange={textChange} onKeyPress={keyPressed}
            name='searchField'
            className="inp pa1 b--none bg-light-gray inputBG"
            value={searchField}
            placeholder="Add.."
            autoComplete="off"
            style={{width:'70%', margin:'auto'}}
            />
            <button onClick = {addChange}
            className="btn pa1 bw1 bg-light-red bg-transparent inputbg" style={{width:'15%', margin:'auto'}}>
                <i className="fa fa-plus-square fas" aria-hidden="true"></i>
            </button>
        </div>
    );
}

export default AddToList; 