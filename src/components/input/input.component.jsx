import React from 'react';

import './input.styles.scss';

const InputComponent = ({ label, name, placeholder, value, onChange, required, type, error = false }) => {
    return (
        <div className="input-container">
            <div className={`label ${error ? 'error-label' : ''}`}><label>{label}</label></div>
            {
                type !== 'textbox' ?
                <>
                    {
                        required ?
                        <input
                            placeholder={`${placeholder}*`}
                            value={value}
                            onChange={onChange}
                            name={name}
                            required
                            type={type}
                        />
                        :
                        <input
                            placeholder={placeholder}
                            value={value}
                            onChange={onChange}
                            name={name}
                            type={type}
                        />
                    }
                </>
                :
                <>
                    {
                        required ?
                        <textarea
                            placeholder={`${placeholder}*`}
                            value={value}
                            onChange={onChange}
                            name={name}
                            required
                            type={type}
                        />
                        :
                        <textarea
                            placeholder={placeholder}
                            value={value}
                            onChange={onChange}
                            name={name}
                            type={type}
                        />
                    }
                </>
            }
            {
                required && error &&
                <div className="error-msg">
                    This field is required!
                </div>
            }
        </div>
    )
}

export default InputComponent;