import { useState, useCallback} from 'react';

function reducer(state, action){
    // CHANGE
    // RESET
}

function useInputs(initialForm) {
    // Reducer 사용하도록 변경해보기!
    const [form, setForm] = useState(initialForm);
    const onChange = useCallback(e => {
        const { name, value } = e.target;
        setForm(form => ({ ...form, [name]: value}));
    }, []);
    const reset = useCallback(() => setForm(initialForm), [initialForm]);

    return [form, onChange, reset];
};

export default useInputs;
