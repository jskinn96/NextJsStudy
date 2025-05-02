'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItemProps {
    href: string;
    isActive: boolean;
    label: string;
}

// 공통 네비게이션 아이템 컴포넌트
function NavItem({ href, isActive, label }: NavItemProps) {
    return (
        <li>
            <Link 
                href={href}
                className={`inline-block py-3 px-2 relative ${isActive ? 'text-white font-medium' : 'text-gray-400 hover:text-gray-200'}`}
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

    return (
        <nav className="w-full border-b border-gray-700 mb-8">
            <ul className="flex gap-8 px-2">
                {navItems.map((item, index) => (
                    <NavItem key={index} {...item} />
                ))}
            </ul>
        </nav>
    );
}