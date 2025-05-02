import { redirect } from "next/navigation";
import { getMovieDetail } from "@/lib/api";
import { Metadata } from "next";

// export const metadata: Metadata = {
//     title: "Movie"
// };

export interface PagePropsWithPromise {
  params: Promise<{ id: string; }>;
}

//g metadata를 함수형으로 출력 가능
export async function generateMetadata(props: PagePropsWithPromise): Promise<Metadata> {

  const { params } = props;
  const resolvedParams = await params;
  const movie = await getMovieDetail(resolvedParams.id);

  return {
    title: movie?.title || "Movie",
  };
}

export default async function MovieDetailPage(props: PagePropsWithPromise) {
  const { params } = props;
  const resolvedParams = await params;
  
  // 기본 경로에서 videos 경로로 리디렉션
  redirect(`/movie/${resolvedParams.id}/videos`);
}