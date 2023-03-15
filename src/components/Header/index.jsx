const Header = (props) => {
    return (
        <header>    
            <button onClick={props.pageHandler}>Go to {props.page === "Home" ? "About" : "Home"}</button>
        </header>
    )
}

export default Header
