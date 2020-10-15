import React from 'react';
import SelectComponent from '../select/select.component';

import './input.styles.scss';

const InputComponent = ({ label, name, placeholder = "", value = "", searchVal = "", onChange, required = false, type = "text", error = false, selectData, labelPos = "default", onSelectSearch, onSelect }) => {
    return (
        <div className={`${labelPos === 'default' ? 'input-container' : 'input-container-side-label'}`}>
            <div className={`label ${error ? 'error-label' : ''}`}><label>{label + ` ${required ? '* ' : ' '}`}:</label></div>
            {
                type === 'textbox' ?
                <>
                    {
                        required ?
                        <textarea
                            placeholder={`${placeholder}`}
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
                :
                type === 'select' ?
                <>
                    <SelectComponent
                        name={name}
                        placeholder={placeholder}
                        required={required}
                        value={value}
                        searchVal={searchVal}
                        data={selectData}
                        onSearch={onSelectSearch}
                        onSelect={onSelect}
                    />
                </>
                :
                <>
                    {
                        required ?
                        <input
                            placeholder={`${placeholder}`}
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