import React from 'react';

var InputBox = () => {
    return (
        <div className = "inputComponent">
        <div className="searchBox">
            <input
                className="searchText"
                type="text"
                name=""
                placeholder="Type In An Email"
            />
            <a className="searchBtn" >
                <i className="fas fa-search" />
            </a>
            </div>
        </div>
    )
}

export default InputBox;