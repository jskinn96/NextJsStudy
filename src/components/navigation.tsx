"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface IItemEl {
    text: string;
    addr: string;
    path: string;
}

const ItemEl = ({text, addr, path}: IItemEl) => {

    return (
        <li className='list-none transition-transform ease-in-out duration-100 hover:scale-105'>
            <Link href={addr}>
                {text}
                {path === addr && "🔥"}
            </Link>
        </li>
    );
}

export default function Navigation() {

    //g react hook 쓸려면 위에 use client를 적어줘야 한다.
    const path = usePathname();

    return (
        <nav className='bg-[#2d2d2d] fixed w-[30%] mx-auto top-[20px] rounded-[50px] py-[20px] left-1/2 z-10 -translate-x-1/2'>
            <ul className='flex justify-center gap-[50px]'>
                <ItemEl 
                    text='Home'
                    addr='/'
                    path={path}
                />
                <ItemEl 
                    text='About us'
                    addr='/AboutUs'
                    path={path}
                />
            </ul>
        </nav>
    );
}