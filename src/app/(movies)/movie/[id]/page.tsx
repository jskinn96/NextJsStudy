import MovieInfo from "@/components/movieInfo";
import MovieVideos from "@/components/movieVideos";
import { getMovieDetail } from "@/lib/api";
import { Metadata } from "next";
import { Suspense } from "react";

// export const metadata: Metadata = {
//     title: "Movie"
// };

type PageProps = {
    params: { id: string; };
}

//g metadata를 함수형으로 출력 가능
export async function generateMetadata({ params: { id } }: PageProps): Promise<Metadata> {

    const movie = await getMovieDetail(id);
    
    return {
        title: movie?.title || "Movie",
    };
}

/**
 * g [id]: 동적(다이나믹) 라우팅...폴더 이름을 대괄호로 묶어 생성하며 폴더 이름과 같은 키에 대한 값을 가질 수 있음, 반드시 값이 있어야 함
 * ? ex) /movie/123 => params.id = "123"
 * g [...id]: 캐치올 라우팅...값 여러 개 가능, 반드시 값이 있어야 함
 * ? ex) /movie/a/b/c => params.id = ["a", "b", "c"]
 * g [[...id]]: 선택적 캐치올 라우팅...없을 수도 있고, 여러 개일 수도 있음
 * ? ex) /movie => params.id = undefined
 * ? ex) /movie/a/b => params.id = ["a", "b"]
*/
export default function MovieDetail({ params }: PageProps) {

    // //g await Promise.all을 사용하여 한번에 api data를 받는다.
    // const [movie, videos] = await Promise.all([getMovieDetail(id), getVideos(id)]);

    const { id } = params;

    /**
     * g Suspense: 기능이 로드 되었을 때, 출력 시켜주는 기능 
     * g fallback에서 기능 로드 전 로딩을 보여준다
     * g 서버 컴포넌트와 클라이언트 컴포넌트를 같이 쓸 수 있다
     * g 클라이언트 컴포넌트를 감싸는 부모가 되면 위에 "use client"를 선언해줘야한다
    */
    return (
        <div>
            <Suspense fallback={<h1>wait on info</h1>}>
                <MovieInfo
                    id={id}
                />
            </Suspense>
            <Suspense fallback={<h1>wait on vid</h1>}>
                <MovieVideos
                    id={id}
                />
            </Suspense>
        </div>
    );
}