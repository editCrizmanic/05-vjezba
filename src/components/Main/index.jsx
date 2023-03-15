import Home from "../Home"
import About from "../About"

const Main = (props) => {
    return (
        <main>
            {
                props.page === "Home" ?
                <Home /> :
                <About />
            }
        </main>
    )
}

export default Main