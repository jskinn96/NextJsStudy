import { getCredits, TCredit } from "@/lib/api";
import Image from "next/image";

interface CreditItemProps {
    item: TCredit;
}

function CreditItem({ item }: CreditItemProps) {
    
    return (
        <div className="flex items-center gap-3 bg-gray-700/30 p-3 rounded-lg">
            <div className="w-12 h-12 bg-gray-700/50 rounded-full overflow-hidden flex-shrink-0 relative">
                {item.profile_path ? (
                    <Image
                        src={item.profile_path}
                        alt={item.name}
                        fill
                        sizes="48px"
                        className="object-cover"
                    />
                ) : (
                    <div className="w-full h-full flex items-center text-center text-gray-500 text-xs">
                        No Image
                    </div>
                )}
            </div>
            <div>
                <p className="text-white font-medium">{item.name}</p>
                <p className="text-gray-400 text-sm">{item.character}</p>
            </div>
        </div>
    );
}

interface CreditSectionProps {
    title: string;
    items: TCredit[];
}

function CreditSection({ title, items }: CreditSectionProps) {

    if (!items || items.length === 0) return null;
    
    return (
        <section>
            <h3 className="text-lg font-medium text-white mb-3">{title}</h3>
            <div className="space-y-3">
                {items.map((item) => (
                    <CreditItem key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
}

export default async function MovieCredits({ id }: { id: string; }) {

    const credits = await getCredits(id);

    if (!credits) {
        return (
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <p className="text-white">Failed to load credits information.</p>
            </div>
        );
    }

    return (
        <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-4">Movie Credits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <CreditSection title="Cast" items={credits.acting} />
                <CreditSection title="Crew" items={credits.crew} />
            </div>
        </div>
    );
}