export default function Buttons(props)
{
    return (
        <section className={props.darkMode ? "buttons-dark" : "buttons-light"}>
            <div className="button" onClick={props.buttonInput}>(</div>
            <div className="button" onClick={props.buttonInput}>)</div>
            <div className="button" onClick={props.buttonInput}>C</div>
            <div className="button" onClick={props.buttonInput}>CE</div>
            <div className="button" onClick={props.buttonInput}>7</div>
            <div className="button" onClick={props.buttonInput}>8</div>
            <div className="button" onClick={props.buttonInput}>9</div>
            <div className="button" onClick={props.buttonInput}>/</div>
            <div className="button" onClick={props.buttonInput}>4</div>
            <div className="button" onClick={props.buttonInput}>5</div>
            <div className="button" onClick={props.buttonInput}>6</div>
            <div className="button" onClick={props.buttonInput}>*</div>
            <div className="button" onClick={props.buttonInput}>1</div>
            <div className="button" onClick={props.buttonInput}>2</div>
            <div className="button" onClick={props.buttonInput}>3</div>
            <div className="button" onClick={props.buttonInput}>-</div>
            <div className="button" onClick={props.buttonInput}>0</div>
            <div className="button" onClick={props.buttonInput}>.</div>
            <div className="button" onClick={props.buttonInput}>=</div>
            <div className="button" onClick={props.buttonInput}>+</div>
        </section>
    )
}