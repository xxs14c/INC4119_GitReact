import React from "react";
import useCalculatorLogic from "./useCalculatorLogic";
import Display from "./Display";
import Buttons from "./Buttons";
import "../styles/Calculator.css";


const Calculator = () => {
    const { input, history, handleClick, calculateResult, clearInput, toggleSign, backSpace} =
    useCalculatorLogic();

    return (
        <div className = "calculator">
            <Display input = {input}/>

            <Buttons
            onButtonClick={
                (value) =>
                    value === "="
                ? calculateResult()
                : value === "AC"
                ? clearInput()
                : value === "±"
                ? toggleSign()
                : value === "⌫"
                ? backSpace()
                : handleClick(value)
            }
            />
            <div className="history">
                <h3>로그</h3>
                <ul>
                    {history.slice(-5).reverse().map((entry, idx) => (
                        <li key={idx}>{entry}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Calculator;