import { getVideos } from "@/lib/api";

export default async function MovieVideos({ id }: { id: string }) {

    const Videos = await getVideos(id);

    return (
        <div>
            {
                Videos &&
                Videos[0].name
            }
        </div>
    );
}