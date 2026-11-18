import React from 'react'
import Link from "next/link";

const Header = () => {
    return (
        <header>
            <div className="container">
                {/* Logo */}
                <Link href="/">Stiyl Media</Link>
                {/* Mobile Menu */}
                <nav className="">
                    {/* wrapper */}
                    <div className="">
                        <h3></h3>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header; 