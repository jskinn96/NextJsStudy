import { getVideos } from "@/lib/api";

export default async function MovieVideos({ id }: { id: string }) {

    const videos = await getVideos(id);

    return (
        videos && (
            <div className="max-w-screen-xl mx-auto px-4 grid gap-6 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] mt-24 pb-24">
                {videos.map((video) => (
                    <div key={video.id} className="relative w-full aspect-video rounded-[10px] overflow-hidden">
                        <iframe
                            src={`https://www.youtube.com/embed/${video.key}`}
                            title={video.name}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full transition-opacity duration-200 ease-in-out opacity-80 hover:opacity-100"
                        />
                    </div>
                ))}
            </div>

        )
    );
}