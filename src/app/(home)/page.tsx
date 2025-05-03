import { getMovies } from "@/lib/api";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

//g 페이지 마다의 메타 데이터를 조절한다
export const metadata: Metadata = {
  title: "Home"
};

interface IMovieEl {
  title: string;
  id: string;
  poster_path: string;
}

const MovieEl = ({ title, id, poster_path }: IMovieEl) => {

  return (
    <Link href={`/movie/${id}`} prefetch className="group">
      <div className="flex flex-col h-full bg-gray-800/30 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-xl hover:scale-[1.03] hover:bg-gray-800/50">
        <div className="relative w-full aspect-[2/3]">
          <Image
            src={poster_path}
            alt={title}
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, (max-width: 1280px) 23vw, 18vw"
            className="object-cover transition-all duration-500 ease-in-out group-hover:brightness-110"
            priority={id === "1"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-3 flex-grow flex flex-col justify-between">
          <h3 className="font-medium text-center line-clamp-2 min-h-[2.5rem] text-sm sm:text-base group-hover:text-blue-300 transition-colors duration-300">{title}</h3>
          <div className="mt-2 flex justify-center">
            <span className="inline-flex items-center justify-center px-3 py-1 text-xs font-medium rounded-full bg-blue-900/40 text-blue-200 group-hover:bg-blue-800/60 transition-colors duration-300">
              View Details
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

/**
 * g (home) => 괄호 안에 문자를 포함하게 되면 라우팅에 포함되지 않는다.
 * g 그룹화 하여 사용할 때 좋다. ex) (movies) 폴더를 만들고 영화 관련 기능들은 정리해 놓는 등... 
*/
export default async function Home() {

  const movies = await getMovies();

  return (
    <main className="container mx-auto px-4 py-8">      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
        {movies && movies.map(movie => (
          <MovieEl
            key={movie.id}
            title={movie.title}
            id={movie.id + ""}
            poster_path={movie.poster_path}
          />
        ))}
      </div>
    </main>
  );
}
