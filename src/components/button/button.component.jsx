import React from 'react';

import './button.styles.scss';

const ButtonComponent = ({ type = 'default', submit = false, onClick, children }) => {
    return (
        <>
        {
            submit ?
            <button onClick={onClick} type="submit" className={`btn btn-${type}`}>{ children }</button>
            :
            <button onClick={onClick} className={`btn btn-${type}`}>{ children }</button>
        }
        </>
    );
}

export default ButtonComponent;