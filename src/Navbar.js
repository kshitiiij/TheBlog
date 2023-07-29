import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <h1>The Blog</h1>
            <div className="links">
                {/* <a href="/">Home</a>
                <a href="/Create" >New Blog</a> */}
                <Link to="/">Home</Link>
                <Link to="/Create" >New Blog</Link>
            </div>
        </div>
    )
}

export default Navbar;