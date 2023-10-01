import React from "react";

function CreateUser({ name, birthday, gender, job, onChange, onCreate }) {
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
