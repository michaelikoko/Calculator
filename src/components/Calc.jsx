import React from "react";
import Toggle from "./Toggle";
import Screen from "./Screen";
import Buttons from "./Buttons";
import Footer from "./Footer";

export default function Calc ()
{
    const [darkMode, setDarkMode] = React.useState(false);
    const [screenState, setScreenState] = React.useState("0");

    function toggle()
    {
        setDarkMode(prevMode => !prevMode)
    }

    function buttonInput(event)
    {
        const buttonText = event.target.innerText
        if (buttonText === "CE")
        {
            setScreenState("0")
        }

        else if (buttonText === "C")
        {
            setScreenState(oldValue => {
                if (oldValue === "0")
                {
                    return oldValue
                }
                else if ((oldValue.length === 1) || (oldValue === "Math Error" || oldValue === "Syntax Error"))
                {
                    return '0'
                }
                return oldValue.slice(0, oldValue.length - 1)
            })
        }

        else if (buttonText === "=")
        {
            setScreenState(oldValue => {
                let error;
                try 
                {
                    class MathError extends Error {name='MathError'}

                    const result = eval(oldValue)
                    if (result === Infinity)
                    {
                        throw new MathError()
                    }
                    return `${result}`
                }
                catch (e)
                {
                    if (e.name === "SyntaxError") error = "Syntax Error"
                    else if (e.name === "MathError") error = "Math Error"
                    return error
                }
            })
        }

        else 
        {
            setScreenState(oldValue => {
                if (oldValue.length < 18)
                {
                    if ((oldValue === '0' && buttonText !== '.') || (oldValue === "Math Error" || oldValue === "Syntax Error"))
                    {
                        return buttonText
                    }
                    return oldValue + buttonText
                }
                else 
                {
                    return oldValue
                }
            })
        }

    }

    return (
        <main className={darkMode? "calc-dark" : "calc-light"}>
            <Toggle toggle={toggle} darkMode={darkMode} />
            <Screen darkMode={darkMode} screenState={screenState}/>
            <Buttons darkMode={darkMode} buttonInput={buttonInput}/>
            <div className="fixed-bottom">
                <Footer />
            </div>
        </main>
    )
}