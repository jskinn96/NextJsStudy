import { getMovies } from "@/lib/api";
import { Metadata } from "next";
import Link from "next/link";

//g 페이지 마다의 메타 데이터를 조절한다
export const metadata: Metadata = {
  title: "Home"
};

/**
 * g (home) => 괄호 안에 문자를 포함하게 되면 라우팅에 포함되지 않는다.
 * g 그룹화 하여 사용할 때 좋다. ex) (movies) 폴더를 만들고 영화 관련 기능들은 정리해 놓는 등... 
*/
export default async function Home() {

  const movies = await getMovies();

  return (
    <div>
      <ul>
        {
          movies &&
          movies.map(movie => (
            <li key={movie.id}>
              <Link href={`/movie/${movie.id}`}>{movie.title}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
}