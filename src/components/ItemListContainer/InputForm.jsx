import { useState } from "react";

function InputForm() {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };


    const handleSubmit = (event) => {
        event.preventDefault(); 
        console.log("Input Value:", inputValue);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Escribe algo:
                <input type="text" value={inputValue} onChange={handleChange} />
            </label>
            <button type="submit">Enviar</button>
        </form>
    );
}

export default InputForm;
