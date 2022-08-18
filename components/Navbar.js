import Link from 'next/Link'

const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="logo">
                <h1>Ninja List</h1>
            </div>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a >About</a>
            </Link>
            <Link href="/ninjas">
                <a >Ninja Listing</a>
            </Link>
        </nav>
    );
}
 
export default Navbar;