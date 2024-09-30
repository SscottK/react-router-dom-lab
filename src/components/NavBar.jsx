import { Link } from "react-router-dom";

const NavBar = () => {



    return (
        <div className="navbar">
            <Link to="/"><h2>Home</h2></Link>
            <Link to="/mailboxes"><h2>Mailboxes</h2></Link>
            <Link to="/new-mailbox"><h2>New Mailbox</h2></Link>
            <Link to="/new-letter"><h2>New Letter</h2></Link>
        </div>
    )
}

export default NavBar