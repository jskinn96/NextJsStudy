"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface IItemEl {
    text: string;
    addr: string;
    path: string;
}

const ItemEl = ({text, addr, path}: IItemEl) => {

    const isActive = path === addr;
    
    return (
        <li className='list-none'>
            <Link 
                href={addr}
                className={`px-4 py-2 rounded-full transition-all duration-300 font-medium relative block whitespace-nowrap text-center ${
                    isActive 
                        ? 'text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md' 
                        : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
            >
                {text}
                {isActive && (
                    <span className="absolute -top-1 -right-1 flex h-3 w-3 sm:h-4 sm:w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 sm:h-4 sm:w-4 bg-blue-500 justify-center items-center text-[8px] sm:text-[9px]">✦</span>
                    </span>
                )}
            </Link>
        </li>
    );
}

export default function Navigation() {

    const path = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className='fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-10 bg-gray-800/90 backdrop-blur-md rounded-full px-3 sm:px-5 py-2 sm:py-3 shadow-lg border border-gray-700/50 transition-all duration-300 w-auto max-w-[90%] sm:max-w-none'>
            {/* //g 모바일 화면에서는 햄버거 메뉴 버튼 표시 */}
            <div className="flex justify-center sm:hidden">
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="flex items-center text-gray-200 focus:outline-none"
                >
                    {isMenuOpen ? (
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* //g 데스크탑에서는 항상 표시, 모바일에서는 토글 */}
            <ul className={`
                flex flex-col sm:flex-row items-center gap-2
                ${isMenuOpen ? 'max-h-screen py-2' : 'max-h-0 sm:max-h-screen overflow-hidden sm:overflow-visible'}
                transition-all duration-300 sm:py-0
            `}>
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
