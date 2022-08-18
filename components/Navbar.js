import Link from 'next/Link'
import Image from 'next/Image'

const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="logo">
                <Image src="/logo.png" width={128} height={76} alt="ninja logo"/>
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