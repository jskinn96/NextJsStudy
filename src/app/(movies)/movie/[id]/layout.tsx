import MovieInfo from "@/components/movieInfo";
import MovieNavigation from "@/components/movieNavigation";
import { Suspense } from "react";
import { PagePropsWithPromise } from "./page";
import { Metadata } from "next";
import { getMovieDetail } from "@/lib/api";

//g metadata를 함수형으로 출력 가능
export async function generateMetadata(props: PagePropsWithPromise): Promise<Metadata> {

  const { params } = props;
  const resolvedParams = await params;
  const movie = await getMovieDetail(resolvedParams.id);

  return {
    title: movie?.title || "Movie",
  };
}
interface IMovieDetailLayout {
  children: React.ReactNode; 
  params: { id: string };
}

export default function MovieDetailLayout({ children, params }: IMovieDetailLayout) {
  return (
    <div className="w-full">
      <Suspense fallback={<h1>Loading movie information...</h1>}>
        <MovieInfo id={params.id} />
      </Suspense>
      <div className="w-[80%] mx-auto mt-8">
        <MovieNavigation movieId={params.id} />
        <div className="mt-6">
          {children}
        </div>
      </div>
    </div>
  );
}
