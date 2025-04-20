"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {

    //g react hook 쓸려면 위에 use client를 적어줘야 한다.
    const path = usePathname();

    return (
        <nav>
            <ul>
                <li>
                    <Link href={"/"}>
                        Home
                        {path === "/" && "🔥"}
                    </Link>
                </li>
                <li>
                    <Link href={"/AboutUs"}>
                        About Us
                        {path === "/AboutUs" && "🔥"}
                    </Link>
                </li>
            </ul>
        </nav>
    );
}