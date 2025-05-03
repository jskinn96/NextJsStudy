"use client";

import { IVideo } from "@/lib/api";
import { useState } from "react";

export default function MovieVideosClient({ videos }: { videos: IVideo[] }) {
    const [loaded, setLoaded] = useState<string[]>([]);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {videos.map((video) => (
                <div key={video.id} className="relative w-full aspect-video bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
                    {loaded.includes(video.id) ? (
                        <iframe
                            src={`https://www.youtube.com/embed/${video.key}`}
                            title={video.name}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full border-0"
                        />
                    ) : (
                        <div
                            onClick={() => setLoaded(prev => [...prev, video.id])}
                            className="absolute inset-0 bg-cover bg-center cursor-pointer transition-all duration-300 hover:brightness-110"
                            style={{
                                backgroundImage: `url(https://img.youtube.com/vi/${video.key}/maxresdefault.jpg)`,
                                backgroundSize: 'cover',
                            }}
                        >
                            <div className="absolute inset-0 bg-opacity-20 flex items-center justify-center group-hover:bg-opacity-10 transition-opacity duration-300">
                                <div className="w-[68px] h-[48px] bg-[#FF0000] rounded-[12px] flex items-center justify-center opacity-80">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-10 h-10 text-white"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                                    <h3 className="text-white font-medium line-clamp-2 text-sm">{video.name}</h3>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
