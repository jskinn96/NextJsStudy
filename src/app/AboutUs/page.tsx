'use client';

export default function AboutUs() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-6 text-white">NextJS 영화 정보 프로젝트</h1>
                <p className="text-xl text-gray-300">
                    Next.js와 TMDB API를 활용한 영화 정보 웹 애플리케이션
                </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-8 mb-12">
                <h2 className="text-2xl font-bold mb-6 text-white">프로젝트 개요</h2>
                <p className="text-gray-300 mb-4">
                    이 프로젝트는 Next.js 14를 학습하고 실습하기 위해 개발된 영화 정보 웹 애플리케이션입니다.
                    TMDB(The Movie Database) API를 활용하여 최신 영화 정보, 상세 내용, 관련 동영상, 출연진 등의
                    정보를 제공합니다.
                </p>
                <p className="text-gray-300">
                    App Router, Server Components, React Server Components 등 Next.js 14의 최신 기능을
                    적극적으로 활용하여 개발되었으며, Tailwind CSS를 통해 모던하고 반응형인 UI를 구현했습니다.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-800 rounded-lg p-8">
                    <h2 className="text-2xl font-bold mb-6 text-white">주요 기술 스택</h2>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start gap-3">
                            <span className="text-blue-400 font-bold text-xl">•</span>
                            <div>
                                <p className="font-medium text-white">Next.js 14</p>
                                <p className="text-sm">App Router, Server Components 활용</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-blue-400 font-bold text-xl">•</span>
                            <div>
                                <p className="font-medium text-white">TypeScript</p>
                                <p className="text-sm">타입 안전성과 개발 경험 향상</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-blue-400 font-bold text-xl">•</span>
                            <div>
                                <p className="font-medium text-white">Tailwind CSS</p>
                                <p className="text-sm">유틸리티 기반 스타일링</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-blue-400 font-bold text-xl">•</span>
                            <div>
                                <p className="font-medium text-white">TMDB API</p>
                                <p className="text-sm">영화 데이터 소스</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="bg-gray-800 rounded-lg p-8">
                    <h2 className="text-2xl font-bold mb-6 text-white">주요 기능</h2>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start gap-3">
                            <span className="text-blue-400 font-bold text-xl">•</span>
                            <div>
                                <p className="font-medium text-white">영화 상세 정보</p>
                                <p className="text-sm">줄거리, 장르, 제작진, 평점 등 표시</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-blue-400 font-bold text-xl">•</span>
                            <div>
                                <p className="font-medium text-white">관련 영상 및 예고편</p>
                                <p className="text-sm">영화 관련 공식 트레일러 및 영상</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-blue-400 font-bold text-xl">•</span>
                            <div>
                                <p className="font-medium text-white">캐스팅 및 제작진 정보</p>
                                <p className="text-sm">출연 배우 및 감독, 작가 정보</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-8 mb-12">
                <h2 className="text-2xl font-bold mb-6 text-white">학습 포인트</h2>
                <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3">
                        <span className="text-blue-400 font-bold text-xl">•</span>
                        <div>
                            <p className="font-medium text-white">Next.js 라우팅 시스템</p>
                            <p className="text-sm">App Router와 동적 라우팅 활용</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-blue-400 font-bold text-xl">•</span>
                        <div>
                            <p className="font-medium text-white">서버 컴포넌트와 클라이언트 컴포넌트</p>
                            <p className="text-sm">각 컴포넌트 타입의 적절한 사용 방법</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-blue-400 font-bold text-xl">•</span>
                        <div>
                            <p className="font-medium text-white">데이터 페칭 전략</p>
                            <p className="text-sm">Server Components에서의 fetch API 활용</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-blue-400 font-bold text-xl">•</span>
                        <div>
                            <p className="font-medium text-white">반응형 UI 구현</p>
                            <p className="text-sm">Tailwind CSS를 활용한 모바일 최적화</p>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-lg p-8 text-center">
                <h2 className="text-2xl font-bold mb-4 text-white">Next.js 학습 프로젝트</h2>
                <p className="text-gray-200 mb-6">
                    이 프로젝트는 Next.js 14의 주요 기능을 실습하고 이해하기 위한 학습 목적으로 개발되었습니다.
                    실제 영화 정보는 TMDB API를 통해 제공되며, 이는 비상업적 용도로만 사용됩니다.
                </p>
            </div>
        </div>
    );
}