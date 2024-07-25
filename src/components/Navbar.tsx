import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="navbar justify-around sticky w-full ">
            <h1><Link href={"/"}>My Website</Link></h1>
            <div className="flex gap-4">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
            </div>
        </nav>
    )
}