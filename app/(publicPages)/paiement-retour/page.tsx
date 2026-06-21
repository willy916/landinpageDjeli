import { Suspense } from 'react';
import PaiementRetourClient from './PaiementRetourClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Confirmation de paiement | Djeli',
    description: 'Confirmation de votre abonnement Djeli.',
};

export default function PaiementRetourRoute() {
    return (
        <Suspense
            fallback={
                <div className="min-h-screen flex items-center justify-center bg-black">
                    <div className="size-10 rounded-full border-2 border-[#7a18ea]/30 border-t-[#7a18ea] animate-spin" />
                </div>
            }
        >
            <PaiementRetourClient />
        </Suspense>
    );
}
