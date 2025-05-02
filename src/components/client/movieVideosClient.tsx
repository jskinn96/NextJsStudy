"use client";

import { IVideo } from "@/lib/api";
import { useState } from "react";


export default function MovieVideosClient({ videos }: { videos: IVideo[] }) {

    const [loaded, setLoaded] = useState<string[]>([]);

    return (
        <div className="w-full grid gap-6 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
            {videos.map((video) => (
                <div key={video.id} className="relative w-full aspect-video rounded-[10px] overflow-hidden">
                    {
                        loaded.includes(video.id)
                            ? (
                                <iframe
                                    src={`https://www.youtube.com/embed/${video.key}`}
                                    title={video.name}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full transition-opacity duration-200 ease-in-out opacity-80 hover:opacity-100"
                                />
                            ) : (
                                <div
                                    onClick={() => setLoaded(prev => [...prev, video.id])}
                                    className="relative w-full h-full bg-cover bg-center cursor-pointer"
                                    style={{
                                        backgroundImage: `url(https://img.youtube.com/vi/${video.key}/hqdefault.jpg)`,
                                    }}
                                >
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-[68px] h-[48px] bg-[#FF0000] rounded-[12px] flex items-center justify-center opacity-80">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-10 h-10 text-white ml-[2px]"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                            >
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            )
                    }
                </div>
            ))}
        </div>
    );
}