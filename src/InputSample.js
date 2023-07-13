import React, { useState, useRef } from "react";

function InputSample() {
    const [inputs, setInputs] = useState({
        name: "",
        nickName: "",
    });

    const { name, nickName } = inputs;
    const nameInput = useRef();

    const onReset = () => {
        setInputs({
            name: "",
            nickName: "",
        });

        nameInput.current.focus();
    };

    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    return (
        <div>
            <input
                name="name"
                type="text"
                onChange={onChange}
                value={name}
                placeholder="이름"
                ref={nameInput}
            />
            <input
                name="nickName"
                type="text"
                onChange={onChange}
                value={nickName}
                placeholder="닉네임"
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>
                    이름(닉네임): {name}({nickName})
                </b>
            </div>
        </div>
    );
}

export default InputSample;
