import { getMovieDetail } from "@/lib/api";
import Image from "next/image";

export default async function MovieInfo({ id }: { id: string }) {

    const movie = await getMovieDetail(id);

    return (
        movie && (
            <div className="grid [grid-template-columns:1fr_2fr] gap-[50px] w-[80%] mx-auto">
                <div className="relative w-full aspect-[2/3] place-self-center">
                    <Image
                        src={movie.poster_path}
                        alt={movie.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 30vw"
                        className="object-cover rounded-[20px]"
                    />
                </div>
                <div className="flex flex-col mt-[20px] gap-[20px]">
                    <h1 className="text-white text-4xl font-semibold">{movie.title}</h1>
                    <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
                    <p>{movie.overview}</p>
                    <a href={movie.homepage} target={"_blank"}>
                        Homepage &rarr;
                    </a>
                </div>
            </div>
        )

    );
}