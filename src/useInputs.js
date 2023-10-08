import { useState, useCallback, useReducer} from 'react';

function reducer(state, action){
    // CHANGE
    // RESET
    switch (action.type) {
        case "CHANGE":
            return {
                ...state,
                [action.name] : action.value
            };
        case "RESET":
            // return action.initialForm;
            return Object.keys(state).reduce((acc, current) => {
                acc[current] = '';
                return acc;
            }, {});
        default:
            throw new Error("Unhandled action");
    }
}

function useInputs(initialForm) {
    // Reducer 사용하도록 변경해보기!
    // const [form, setForm] = useState(initialForm);
    const [form, dispatch] = useReducer(reducer, initialForm);

    const onChange = useCallback(e => {
        const { name, value } = e.target;
        // setForm(form => ({ ...form, [name]: value}));
        dispatch({
            type: "CHANGE",
            name,
            value
        })
    }, []);
    // const reset = useCallback(() => setForm(initialForm), [initialForm]);
    const reset = useCallback(() => dispatch({
        type:"RESET",
        // initialForm
    }), [])

    return [form, onChange, reset];
};

export default useInputs;
