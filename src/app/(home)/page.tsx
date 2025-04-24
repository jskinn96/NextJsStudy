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
    <Link href={`/movie/${id}`}>
      <div className="grid grid-rows-[1fr_auto] gap-5 cursor-pointer place-items-center">
        <div className="relative w-full aspect-[2/3]">
          <Image
            src={poster_path}
            alt={title}
            fill
            sizes="(max-width: 768px) 50vw, 20vw"
            className="object-cover rounded-[10px] opacity-70 transition-opacity duration-300 ease-in-out hover:opacity-100"
          />
        </div>
        <span className="text-center">{title}</span>
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
    <div className="grid grid-cols-5 gap-6 w-full max-w-[90%] mx-auto">
      {
        movies &&
        movies.map(movie => (
          <MovieEl
            key={movie.id}
            title={movie.title}
            id={movie.id + ""}
            poster_path={movie.poster_path}
          />
        ))
      }
    </div>
  );
}