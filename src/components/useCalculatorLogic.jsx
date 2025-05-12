import { useState } from "react";

const useCalculatorLogic = () => {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState([]);

    const handleClick = (value) => setInput((prev) => prev + value);

const calculateResult = () => {
    try {
        const res = eval(input).toString();
        setInput(res);
        setHistory((prev) => [...prev, `${input} = ${res}`]);
    } catch {
        setInput("Error");
    }
};

const clearInput = () => {
    setInput("");
};

const toggleSign = () => {
    if (input) {
        if (input.startsWith("-")) {
            setInput(input.slice(1));
        } else {
            setInput("-" + input);
        }
    }
};

const backSpace = () => {
    setInput(input.slice(0,-1));
};

return {input, history, handleClick, calculateResult, clearInput, toggleSign, backSpace};
};

export default useCalculatorLogic;