import { getMovieDetail } from "@/lib/api";
import Image from "next/image";

export default async function MovieInfo({ id }: { id: string }) {
    const movie = await getMovieDetail(id);

    return (
        movie && (
            <article className="flex flex-col md:flex-row w-[90%] md:w-[80%] mx-auto">
                <figure className="w-full md:w-1/5 md:top-24 md:self-start">
                    <div className="aspect-[2/3] relative max-w-md mx-auto md:mx-0">
                        <Image
                            src={movie.poster_path}
                            alt={movie.title}
                            fill
                            sizes="(max-width: 768px) 90vw, 30vw"
                            className="object-cover rounded-[20px] shadow-lg"
                            priority
                        />
                    </div>
                    
                    {/* //g 모바일에서는 포스터 아래에 평점 표시 */}
                    <div className="md:hidden mt-4 flex justify-center">
                        <div className="bg-blue-900/30 backdrop-blur-sm rounded-full px-4 py-2 flex items-center shadow-md border border-blue-500/20">
                            <span className="text-yellow-400 text-lg mr-1">⭐️</span>
                            <span className="text-xl font-bold text-white">{movie.vote_average.toFixed(1)}</span>
                            <span className="text-gray-300 text-xs ml-1">/ 10</span>
                        </div>
                    </div>
                </figure>
                <section className="flex-1 flex flex-col gap-4 md:gap-5 md:ml-6 mt-6 md:mt-0">
                    <header>
                        <h1 className="text-white text-3xl md:text-4xl font-semibold">{movie.title}</h1>
                    </header>
                    <ul className="flex flex-wrap gap-[10px] list-none p-0">
                        <li className="flex items-center">
                            <span className="flex items-center text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {movie.release_date.replaceAll('-', '.')}
                            </span>
                        </li>
                        <li className="flex items-center">
                            <span className="flex items-center text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {movie.runtime}min
                            </span>
                        </li>

                        {/* //g 데스크탑에서는 여기에 평점 표시 */}
                        <li className="hidden md:flex items-center">
                            <span className="flex items-center">
                                <span className="text-yellow-400 mr-1">⭐️</span>
                                <span>{movie.vote_average.toFixed(1)}</span>
                            </span>
                        </li>
                    </ul>
                    <section className="flex flex-col gap-2">
                        <p className="text-gray-300 leading-relaxed">{movie.overview}</p>
                        <ul className="flex flex-wrap gap-2 list-none p-0 mt-2">
                            {movie.genres.map(el => (
                                <li key={el.id}>
                                    <span className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30 hover:bg-blue-500/30 transition-colors duration-200 cursor-default">
                                        #{el.name}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </section>
                    <section className="flex flex-col gap-2 mt-1">
                        <h2 className="text-lg font-semibold text-white">Production Companies</h2>
                        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 list-none p-0">
                            {movie.production_companies.map(company => (
                                <li key={company.id} className="flex flex-col items-center bg-gray-800/50 rounded-lg p-3 border border-gray-700 hover:border-blue-500/50 transition-colors duration-200 h-auto min-h-[100px] justify-between cursor-default">
                                    {company.logo_path && !company.logo_path.endsWith('null') ? (
                                        <div className="relative w-full h-[50px] flex items-center justify-center mb-2">
                                            <Image
                                                src={company.logo_path}
                                                alt={company.name}
                                                width={100}
                                                height={50}
                                                className="object-contain max-h-[50px]"
                                            />
                                        </div>
                                    ) : (
                                        <div className="w-full h-[50px] flex items-center justify-center bg-gray-700/50 rounded mb-2">
                                            <span className="text-gray-400 text-xs">No logo</span>
                                        </div>
                                    )}
                                    <span className="text-center text-sm text-gray-300 truncate w-full" title={company.name}>{company.name}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                    <footer className="mt-2">
                        <a href={movie.homepage} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-blue-600/30 hover:bg-blue-600/50 text-blue-100 rounded-lg transition-colors duration-200 border border-blue-500/30 shadow-sm">
                            <span>Homepage</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </footer>
                </section>
            </article>
        )
    );
}
