import MovieVideos from "@/components/movieVideos";
import { Suspense } from "react";
import { PagePropsWithPromise } from "../page";

/**
 * g [id]: 동적(다이나믹) 라우팅...폴더 이름을 대괄호로 묶어 생성하며 폴더 이름과 같은 키에 대한 값을 가질 수 있음, 반드시 값이 있어야 함
 * ? ex) /movie/123 => params.id = "123"
 * g [...id]: 캐치올 라우팅...값 여러 개 가능, 반드시 값이 있어야 함
 * ? ex) /movie/a/b/c => params.id = ["a", "b", "c"]
 * g [[...id]]: 선택적 캐치올 라우팅...없을 수도 있고, 여러 개일 수도 있음
 * ? ex) /movie => params.id = undefined
 * ? ex) /movie/a/b => params.id = ["a", "b"]
*/
export default async function MovieVideosPage(props: PagePropsWithPromise) {

    const { params } = props;
    const resolvedParams = await params;
    
    return (
        <Suspense fallback={<h1>Loading videos...</h1>}>
            <MovieVideos id={resolvedParams.id} />
        </Suspense>
    );
}