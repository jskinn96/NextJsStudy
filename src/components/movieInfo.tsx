import { getMovieDetail } from "@/lib/api";

export default async function MovieInfo({ id }: { id: string }) {

    const movie = await getMovieDetail(id);

    return (
        <div>
            {
                movie &&
                movie.title
            }
        </div>
    );
}