import Image from 'next/image';
import { getProviders } from '@/lib/api';

export default async function MovieProviders({ id }: { id: string; }) {

    const providers = await getProviders(id); 

    if (!providers || Object.keys(providers).length === 0) {
        return (
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <p className="text-white">No streaming information is currently available for this movie.</p>
            </div>
        );
    }

    return (
        <div className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(providers).map(([countryCode, countryData]) => {
                    if (!countryData.flatrate?.length) return null;

                    return (
                        <div key={countryCode} className="bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden shadow-lg">
                            <div className="bg-gray-700 py-3 px-4 border-b border-gray-600">
                                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                                    {countryCode}
                                </h3>
                            </div>
                            <div className="p-4">
                                <h4 className="text-sm text-gray-400 mb-3">Streaming Services</h4>
                                <div className="flex flex-wrap gap-4">
                                    {countryData.flatrate?.map(provider => (
                                        <div key={provider.provider_id} className="flex flex-col items-center">
                                            <div className="w-12 h-12 rounded-lg overflow-hidden mb-2">
                                                <Image
                                                    src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
                                                    alt={provider.provider_name}
                                                    className="object-cover"
                                                    width={80}
                                                    height={80}
                                                />
                                            </div>
                                            <span className="text-xs text-center text-gray-300">{provider.provider_name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}