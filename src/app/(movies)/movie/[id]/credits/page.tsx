import { Suspense } from "react";
import { PagePropsWithPromise } from "../page";
import MovieCredits from "@/components/movieCredits";

export default async function MovieCreditsPage(props: PagePropsWithPromise) {

  const { params } = props;
  const resolvedParams = await params;

  return (
    <Suspense fallback={<h1>Loading credits...</h1>}>
      <MovieCredits id={resolvedParams.id} />
    </Suspense>
  );
}
