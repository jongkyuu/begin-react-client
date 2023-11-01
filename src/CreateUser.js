import React, { useCallback, useContext, useRef } from "react";
import useInputs from "./useInputs";
import { UserDispatch } from "./App";

function CreateUser() {
    const [form, onChange, reset] = useInputs({
        name: "",
        birthday: "",
        gender: "",
        job: "",
    });

    const { name, birthday, gender, job } = form;

    const dispatch = useContext(UserDispatch);

    const nextId = useRef(4); // dispatch에서 nextId + 1 해주기

    const onCreate = useCallback(() => {
        dispatch({
            type: "CREATE_USER",
            user: {
                id: nextId.current,
                image: `https://picsum.photos/id/${nextId.current}/64/64`,
                name,
                birthday,
                gender,
                job,
                active: false,
            },
        });
        nextId.current += 1;
        reset();
    }, [name, birthday, gender, job]); // 답안에서는 useCallback 쓰지 않음

    return (
        <div>
            <input
                name="name"
                placeholder="name"
                onChange={onChange}
                value={name}
            />
            <input
                name="birthday"
                placeholder="birthday"
                onChange={onChange}
                value={birthday}
            />
            <input
                name="gender"
                placeholder="gender"
                onChange={onChange}
                value={gender}
            />
            <input
                name="job"
                placeholder="job"
                onChange={onChange}
                value={job}
            />
            <button onClick={onCreate}>등록</button>
        </div>
    );
}

export default React.memo(CreateUser);
