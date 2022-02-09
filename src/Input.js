import React, {useState} from 'react';

const Input = ({id, label, placeholder, inputValue, onSubmit}) => {
    const [value, setValue] = useState(inputValue);

    const onInput = (e) => {
        let val = e.target.value;
        setValue(val);
        onSubmit(val);
    };

    return (
        <>
            <label htmlFor={id}>{label}</label>
            <br />
            <input
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onInput}
            />
        </>
    );
};

export default Input;
