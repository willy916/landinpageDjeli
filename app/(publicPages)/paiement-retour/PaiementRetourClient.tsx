'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { CheckCircle2Icon, XCircleIcon, LoaderCircle } from 'lucide-react';
import { verifyPayment } from '@/lib/paymentService';

type Status = 'loading' | 'success' | 'error';

export default function PaiementRetourClient() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [status, setStatus] = useState<Status>('loading');
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        const reference = searchParams.get('reference') || searchParams.get('trxref');
        if (!reference) {
            setErrorMsg('Aucune référence de paiement trouvée.');
            setStatus('error');
            return;
        }

        verifyPayment(reference)
            .then((ok) => {
                if (ok) setStatus('success');
                else {
                    setErrorMsg('Le paiement n\'a pas pu être confirmé. Si vous pensez que c\'est une erreur, contactez le support.');
                    setStatus('error');
                }
            })
            .catch(() => {
                setErrorMsg('Erreur lors de la vérification. Veuillez contacter le support.');
                setStatus('error');
            });
    }, [searchParams]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-black px-4">
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#7a18ea]/10 rounded-full blur-3xl" />
            </div>

            <motion.div
                className="relative z-10 w-full max-w-md"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 280, damping: 28 }}
            >
                {/* Loading */}
                {status === 'loading' && (
                    <div className="text-center space-y-5">
                        <div className="relative mx-auto size-20">
                            <div className="absolute inset-0 rounded-full bg-[#7a18ea]/10 animate-ping" />
                            <div className="relative flex items-center justify-center size-20 rounded-full border border-[#7a18ea]/30">
                                <LoaderCircle className="size-10 text-[#7a18ea] animate-spin" />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-xl font-semibold text-white">Vérification en cours…</h1>
                            <p className="text-sm text-slate-500 mt-2">Confirmation de votre paiement Paystack</p>
                        </div>
                    </div>
                )}

                {/* Success */}
                {status === 'success' && (
                    <div className="text-center space-y-6">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 20, delay: 0.1 }}
                            className="mx-auto size-24 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center"
                        >
                            <CheckCircle2Icon className="size-12 text-emerald-400" />
                        </motion.div>

                        <div>
                            <h1 className="text-2xl font-semibold text-white">Abonnement activé !</h1>
                            <p className="text-sm text-slate-400 mt-2 max-w-sm mx-auto">
                                Votre abonnement Djeli est maintenant actif. Ouvrez l'application pour en profiter.
                            </p>
                        </div>

                        <div className="bg-[#07001a] border border-[#2a005a]/60 rounded-2xl p-5 text-left space-y-2">
                            <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
                                <CheckCircle2Icon className="size-4" />
                                Paiement confirmé
                            </div>
                            <p className="text-xs text-slate-500">
                                Un récapitulatif vous a été envoyé. Pour toute question, contactez le support Djeli.
                            </p>
                        </div>

                        <button
                            id="djeli-return-home"
                            onClick={() => router.push('/')}
                            className="w-full py-3 rounded-xl font-medium bg-[#7a18ea] hover:bg-[#6810cc] text-white transition-all"
                        >
                            Retour à l'accueil
                        </button>
                    </div>
                )}

                {/* Error */}
                {status === 'error' && (
                    <div className="text-center space-y-6">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 20, delay: 0.1 }}
                            className="mx-auto size-24 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center"
                        >
                            <XCircleIcon className="size-12 text-red-400" />
                        </motion.div>

                        <div>
                            <h1 className="text-2xl font-semibold text-white">Paiement non confirmé</h1>
                            <p className="text-sm text-slate-400 mt-2 max-w-sm mx-auto">{errorMsg}</p>
                        </div>

                        <div className="flex gap-3">
                            <button
                                id="djeli-retry-payment"
                                onClick={() => router.push('/#pricing')}
                                className="flex-1 py-3 rounded-xl font-medium border border-[#2a005a] text-slate-400 hover:text-white hover:border-[#4a0090] transition-all"
                            >
                                Réessayer
                            </button>
                            <button
                                id="djeli-return-home-error"
                                onClick={() => router.push('/')}
                                className="flex-1 py-3 rounded-xl font-medium bg-[#7a18ea] hover:bg-[#6810cc] text-white transition-all"
                            >
                                Accueil
                            </button>
                        </div>
                    </div>
                )}
            </motion.div>
        </div>
    );
}
