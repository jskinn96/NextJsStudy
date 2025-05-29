import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//g 메타 데이터를 조절한다. %s => 문자열을 가져온다.
export const metadata: Metadata = {
  title: { 
    template: "%s | Next Movies",
    default: "Next Movies" 
  },
  description: "THe best movies on the best framework",
};

/**
 * g RootLayout을 써서 공통적으로 출력되는 레이아웃을 만들 수 있다.
 * g 현재 메인 레이아웃에 네비게이션 컴포넌트를 넣게되면 모든 라우팅 페이지에 적용된다.
 * g 라우팅 페이지에서 layout.tsx파일을 만들고 그 경로부터 밑에 경로들을 위한 레이아웃을 생성할 수도 있다.
*/
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased sm:py-24 py-10`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
