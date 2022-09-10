export default function Toggle(props)
{
    return (
        <section className="toggle" onClick = {props.toggle}>
            <p className={props.darkMode ? "toggle-light_text-dark": "toggle-light_text-light"}>Light</p>
            <div className={props.darkMode ? "toggle-slider-dark" : "toggle-slider-light"}>
                <div className="toggle-button"></div>
            </div>
            <p className={props.darkMode ? "toggle-dark_text-dark": "toggle-dark_text-light"}>Dark</p>
        </section>
    )
}