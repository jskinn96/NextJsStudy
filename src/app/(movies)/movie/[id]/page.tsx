import { redirect } from "next/navigation";

// export const metadata: Metadata = {
//     title: "Movie"
// };

export interface PagePropsWithPromise {
  params: Promise<{ id: string; }>;
}

export default async function MovieDetailPage(props: PagePropsWithPromise) {
  
  const { params } = props;
  const resolvedParams = await params;
  
  // 기본 경로에서 videos 경로로 리디렉션
  redirect(`/movie/${resolvedParams.id}/videos`);
}