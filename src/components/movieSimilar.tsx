import Link from "next/link";
import Image from "next/image";
import { getSimilars } from "@/lib/api";

export default async function MovieSimilar({ id }: { id: string; }) {

    const similar = await getSimilars(id);

    if (!similar || Object.keys(similar).length === 0) {
        return (
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <p className="text-white">Failed to load similar movie information.</p>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto py-8 px-4">
            <h2 className="text-3xl font-bold mb-8 text-gray-100">Similar Movie</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {similar.map((movie) => (
                    <Link
                        href={`/movie/${movie.id}`}
                        key={movie.id}
                        className="flex flex-col bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden h-full shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                    >
                        <div className="relative w-full aspect-[2/3] overflow-hidden">
                            {movie.poster_path ? (
                                <Image
                                    src={`${movie.poster_path}`}
                                    alt={movie.title}
                                    width={500}
                                    height={500}
                                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                                />
                            ) : (
                                <div className="flex items-center text-center justify-center w-full h-full bg-gray-700 text-gray-400 font-medium">
                                    No Image
                                </div>
                            )}
                        </div>
                        <div className="p-4 flex flex-col flex-grow">
                            <h3 className="text-lg font-bold mb-2 text-white">{movie.title}</h3>
                            <p className="text-sm text-gray-300 mb-4 line-clamp-3 flex-grow">
                                {movie.overview || 'No overview'}
                            </p>
                            <div className="flex justify-between items-center text-sm text-gray-400">
                                <span>
                                    {movie.release_date?.split('-')[0] || 'Undefined'}
                                </span>
                                <span className="flex items-center text-yellow-400">
                                    ★ {movie.vote_average?.toFixed(1) || 'N/A'}
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}