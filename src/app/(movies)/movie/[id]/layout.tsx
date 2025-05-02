import MovieInfo from "@/components/movieInfo";
import MovieNavigation from "@/components/MovieNavigation";
import { Suspense } from "react";

export default function MovieDetailLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
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
