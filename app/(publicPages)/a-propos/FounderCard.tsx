'use client'
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

interface FounderCardProps {
    name: string;
    role: string;
    photo: string;
    initials: string;
    storageKey: string;
}

export default function FounderCard({ name, role, photo, initials, storageKey }: FounderCardProps) {
    const [imgSrc, setImgSrc] = useState<string>(photo);
    const [hasError, setHasError] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Load image saved in localStorage (persists across reloads during dev)
    useEffect(() => {
        try {
            const saved = localStorage.getItem(storageKey);
            if (saved) {
                setImgSrc(saved);
                setHasError(false);
            }
        } catch {}
    }, [storageKey]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
            const result = ev.target?.result as string;
            setImgSrc(result);
            setHasError(false);
            try { localStorage.setItem(storageKey, result); } catch {}
        };
        reader.readAsDataURL(file);
        // Reset input so same file can be re-selected
        e.target.value = "";
    };

    const showFallback = hasError || imgSrc === photo && !imgSrc.startsWith("data:");

    return (
        <div className="text-center group">
            <div
                className="relative mx-auto mb-4 size-36 rounded-full overflow-hidden border-2 border-slate-800 group-hover:border-[#7a18ea]/60 transition-colors duration-300 cursor-pointer"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onClick={() => fileInputRef.current?.click()}
                title="Cliquer pour changer la photo"
            >
                {/* Image or fallback gradient */}
                {!showFallback && imgSrc ? (
                    <Image
                        src={imgSrc}
                        alt={name}
                        fill
                        sizes="144px"
                        className="object-cover object-center"
                        onError={() => setHasError(true)}
                        unoptimized={imgSrc.startsWith("data:")}
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#7a18ea] to-[#000080] text-white text-2xl font-medium select-none">
                        {initials}
                    </div>
                )}

                {/* Hover overlay */}
                <div className={`absolute inset-0 flex flex-col items-center justify-center bg-black/60 transition-opacity duration-200 ${isHovering ? 'opacity-100' : 'opacity-0'}`}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="mb-1">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                        <polyline points="17,8 12,3 7,8"/>
                        <line x1="12" y1="3" x2="12" y2="15"/>
                    </svg>
                    <span className="text-white text-[10px] font-medium">Importer</span>
                </div>
            </div>

            {/* Hidden file input */}
            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
            />

            <p className="font-medium text-slate-200">{name}</p>
            <p className="text-sm text-slate-500 mt-0.5">{role}</p>
        </div>
    );
}
