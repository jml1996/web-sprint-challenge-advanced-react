import { useState } from 'react';
// write your custom hook here to control your checkout form

const useForm = (initialFormState, initialSuccessMessage) => {
    const [values, setValues] = useState(initialFormState);
    const [showSuccessMessage, setShowSuccessMessage] = useState(initialSuccessMessage);

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
    };

    return [values, showSuccessMessage, handleChanges, handleSubmit];
}

export default useForm;
