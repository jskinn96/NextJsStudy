'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface NavItemProps {
    href: string;
    isActive: boolean;
    label: string;
    onClick?: () => void;
}

// 공통 네비게이션 아이템 컴포넌트
function NavItem({ href, isActive, label, onClick }: NavItemProps) {
    return (
        <li className="w-full">
            <Link 
                href={href}
                onClick={onClick}
                className={`inline-block py-3 px-2 relative w-full ${isActive ? 'text-white font-medium' : 'text-gray-400 hover:text-gray-200'}`}
            >
                {label}
                {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"></span>
                )}
            </Link>
        </li>
    );
}

interface MovieNavigationProps {
    movieId: string;
}

export default function MovieNavigation({ movieId }: MovieNavigationProps) {

    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    // 네비게이션 항목 정의
    const navItems = [
        {
            href: `/movie/${movieId}/videos`,
            isActive: pathname === `/movie/${movieId}/videos`,
            label: 'Videos'
        },
        {
            href: `/movie/${movieId}/credits`,
            isActive: pathname === `/movie/${movieId}/credits`,
            label: 'Credits'
        },
        {
            href: `/movie/${movieId}/providers`,
            isActive: pathname === `/movie/${movieId}/providers`,
            label: 'Providers'
        },
        {
            href: `/movie/${movieId}/similar`,
            isActive: pathname === `/movie/${movieId}/similar`,
            label: 'Similar'
        }
    ];

    // 햄버거 메뉴 토글
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // 메뉴 항목 클릭 시 메뉴 닫기
    const handleItemClick = () => {
        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
    };

    // 현재 활성화된 항목 찾기
    const activeItem = navItems.find(item => item.isActive);
    const activeLabel = activeItem ? activeItem.label : 'Navigation';

    return (
        <nav className="w-full border-b border-gray-700 mb-8 relative">
            {/* 데스크탑 메뉴 */}
            <div className="hidden md:block">
                <ul className="flex gap-8 px-2">
                    {navItems.map((item, index) => (
                        <NavItem key={index} {...item} />
                    ))}
                </ul>
            </div>
            
            {/* 모바일 메뉴 */}
            <div className="md:hidden">
                <div 
                    className="flex items-center justify-between py-3 px-2 cursor-pointer"
                    onClick={toggleMenu}
                >
                    <span className={`font-medium ${activeItem ? 'text-white' : 'text-gray-400'}`}>
                        {activeLabel}
                    </span>
                    <div className="text-gray-400">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className={`h-5 w-5 transition-transform ${isMenuOpen ? 'transform rotate-180' : ''}`} 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
                
                {/* 드롭다운 메뉴 */}
                {isMenuOpen && (
                    <ul className="absolute z-10 w-full bg-gray-900 border border-gray-700 rounded-b-md shadow-lg py-1">
                        {navItems.map((item, index) => (
                            <NavItem 
                                key={index} 
                                {...item} 
                                onClick={handleItemClick}
                            />
                        ))}
                    </ul>
                )}
            </div>
        </nav>
    );
}