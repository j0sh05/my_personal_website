import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
    return (
        <nav className="navbar md:justify-around sticky w-full">
            <h1 className="hidden md:flex md:gap-4"><Link href={"/"}>My Website</Link></h1>
            <div className="navbar-start md:hidden">
                <MenuIcon />
            </div>
            <div className="hidden md:flex md:gap-4">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
            </div>
        </nav>
    )
}