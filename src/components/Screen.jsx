export default function Screen(props)
{
    return (
        <section className={props.darkMode ? "screen-dark" : "screen-light"}>
            <p className="screen-text">{props.screenState}</p>
        </section>
    )
}