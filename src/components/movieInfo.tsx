import { getMovieDetail } from "@/lib/api";
import Image from "next/image";

export default async function MovieInfo({ id }: { id: string }) {

    const movie = await getMovieDetail(id);

    return (
        movie && (
            <article className="grid [grid-template-columns:1fr_2fr] gap-[50px] w-[80%] mx-auto">
                <figure className="relative w-full aspect-[2/3] place-self-center">
                    <Image
                        src={movie.poster_path}
                        alt={movie.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 30vw"
                        className="object-cover rounded-[20px]"
                    />
                </figure>
                <section className="flex flex-col pt-[10px] pb-[10px] gap-[20px]">
                    <header>
                        <h1 className="text-white text-4xl font-semibold">{movie.title}</h1>
                    </header>
                    <ul className="flex gap-[10px] list-none p-0">
                        <li>{movie.release_date.replaceAll('-', '.')}</li>
                        <li>{movie.runtime}min</li>
                        <li>⭐️ {movie.vote_average.toFixed(1)}</li>
                    </ul>
                    <section className="flex flex-col gap-2">
                        <p className="movie-overview">{movie.overview}</p>
                        <ul className="flex flex-wrap gap-2 list-none p-0">
                            {movie.genres.map(el => (
                                <li key={el.id}>
                                    <span className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30 hover:bg-blue-500/30 transition-colors duration-200 cursor-default">
                                        #{el.name}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </section>
                    <section className="flex flex-col gap-2">
                        <h2 className="text-lg font-semibold text-white">Production Companies</h2>
                        <ul className="flex flex-wrap gap-4 list-none p-0">
                            {movie.production_companies.map(company => (
                                <li key={company.id} className="flex flex-col items-center bg-gray-800/50 rounded-lg p-3 border border-gray-700 hover:border-blue-500/50 transition-colors duration-200 w-[140px] h-auto min-h-[120px] justify-between cursor-default">
                                    {company.logo_path && !company.logo_path.endsWith('null') ? (
                                        <div className="relative w-full h-[60px] flex items-center justify-center mb-2">
                                            <Image
                                                src={company.logo_path}
                                                alt={company.name}
                                                width={100}
                                                height={50}
                                                className="object-contain max-h-[60px]"
                                            />
                                        </div>
                                    ) : (
                                        <div className="w-full h-[60px] flex items-center justify-center bg-gray-700/50 rounded mb-2">
                                            <span className="text-gray-400 text-xs">No logo</span>
                                        </div>
                                    )}
                                    <span className="text-center text-sm text-gray-300 truncate w-full" title={company.name}>{company.name}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                    <footer>
                        <a href={movie.homepage} target={"_blank"} rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline flex items-center w-fit transition-colors duration-200">
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