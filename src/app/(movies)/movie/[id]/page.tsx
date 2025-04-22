import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Movie"
};

/**
 * g [id]: 동적 라우트...폴더 이름을 대괄호로 묶어 생성하며 여러 값을 가질 수 있다.
*/
export default async function MovieDetail({ params }: { params: { id: string } }) {

    const { id } = await params;

    return (
        <h1>Movie {id}</h1>
    );
}