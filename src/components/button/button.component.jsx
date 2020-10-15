import React from 'react';

import './button.styles.scss';

const ButtonComponent = ({ type = 'default', submit = false, onClick, children }) => {
    return (
        <>
        {
            submit ?
            <button onClick={onClick} type="submit" className={`button button-${type}`}>{ children }</button>
            :
            <button onClick={onClick} type="button" className={`button button-${type}`}>{ children }</button>
        }
        </>
    );
}

export default ButtonComponent;