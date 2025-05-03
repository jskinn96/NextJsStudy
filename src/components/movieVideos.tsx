import { getVideos } from "@/lib/api";
import MovieVideosClient from "./client/movieVideosClient";

/**
 * g async를 쓰게 되면 서버 컴포넌트가 되며 use client를 적용할 수 없다. 
*/
export default async function MovieVideos({ id }: { id: string; }) {

    const videos = await getVideos(id);

    if (!videos || Object.keys(videos).length === 0) {
        return (
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <p className="text-white">Failed to load videos information.</p>
            </div>
        );
    }

    //g embed를 통해 youtube 영상을 iframe으로 가져올 수 있다.
    return (
        <MovieVideosClient videos={videos.slice(0, 20)} />
    );
}