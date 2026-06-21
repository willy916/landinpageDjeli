'use client';

import { AnimatePresence, motion } from 'motion/react';
import { CheckIcon, ChevronDownIcon, LoaderCircle, SparklesIcon, XIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { checkPhone, initPayment } from '@/lib/paymentService';

/* ─────────────── Pays / indicatifs ─────────────── */
interface Country {
    code: string;   // ISO 3166-1 alpha-2
    name: string;
    dialCode: string;
    flag: string;   // emoji drapeau
    placeholder: string;
}

const COUNTRIES: Country[] = [
    {
        code: 'CI',
        name: "Côte d'Ivoire",
        dialCode: '+225',
        flag: '🇨🇮',
        placeholder: '07 00 00 00 00',
    },
    // ← ajouter d'autres pays ici facilement
];

/* ─────────────── Types ─────────────── */
interface PaymentModalProps {
    isOpen: boolean;
    onClose: () => void;
    packId: number;          // 2 = Premium, 1 = Pro
    packName: string;        // "Premium" | "Pro"
    monthlyPrice: number;    // 5000 | 10000
}

type Step = 'phone' | 'billing' | 'loading';

const formatFCFA = (n: number) => n.toLocaleString('fr-FR');
const ANNUAL_DISCOUNT = 0.1;

/* ─────────────── Component ─────────────── */
export default function PaymentModal({
    isOpen,
    onClose,
    packId,
    packName,
    monthlyPrice,
}: PaymentModalProps) {
    const [step, setStep] = useState<Step>('phone');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState<Country>(COUNTRIES[0]);
    const [countryOpen, setCountryOpen] = useState(false);
    const [billing, setBilling] = useState<1 | 12>(1);
    const [error, setError] = useState('');
    const [isChecking, setIsChecking] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const annualPrice = Math.round(monthlyPrice * 12 * (1 - ANNUAL_DISCOUNT));

    /** Numéro complet envoyé à l'API : indicatif + chiffres seulement */
    const fullPhone = `${country.dialCode}${phone.trim().replace(/\D/g, '')}`;

    /* Reset when modal opens */
    useEffect(() => {
        if (isOpen) {
            setStep('phone');
            setPhone('');
            setCountry(COUNTRIES[0]);
            setCountryOpen(false);
            setBilling(1);
            setError('');
            setTimeout(() => inputRef.current?.focus(), 200);
        }
    }, [isOpen]);

    /* Close on Escape / outside click for dropdown */
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') { if (countryOpen) setCountryOpen(false); else onClose(); }
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [onClose, countryOpen]);

    useEffect(() => {
        const handleOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setCountryOpen(false);
            }
        };
        if (countryOpen) document.addEventListener('mousedown', handleOutside);
        return () => document.removeEventListener('mousedown', handleOutside);
    }, [countryOpen]);

    /* ── Step 1: Verify phone ── */
    async function handlePhoneSubmit(e: React.FormEvent) {
        e.preventDefault();
        const digits = phone.trim().replace(/\D/g, '');
        if (!digits) { setError('Veuillez entrer votre numéro de téléphone.'); return; }

        setIsChecking(true);
        setError('');
        try {
            const exists = await checkPhone(fullPhone);
            if (!exists) {
                setError("Aucun compte Djeli trouvé pour ce numéro. Créez votre compte sur l'app Djeli.");
            } else {
                setStep('billing');
            }
        } catch {
            setError('Erreur réseau. Vérifiez votre connexion et réessayez.');
        } finally {
            setIsChecking(false);
        }
    }

    /* ── Step 2: Confirm billing → init payment ── */
    async function handlePaymentInit() {
        setStep('loading');
        setError('');
        try {
            const url = await initPayment({ phone: fullPhone, packId, nbOfMonths: billing });
            window.location.href = url;
        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : 'Une erreur est survenue.';
            setError(message);
            setStep('billing');
        }
    }

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Modal wrapper */}
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="relative w-full max-w-md rounded-2xl border border-[#2a005a]/60 bg-[#07001a] shadow-2xl shadow-purple-950/50 overflow-hidden"
                            initial={{ y: 40, scale: 0.96, opacity: 0 }}
                            animate={{ y: 0, scale: 1, opacity: 1 }}
                            exit={{ y: 40, scale: 0.96, opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 320, damping: 30 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Purple top bar */}
                            <div className="h-1 w-full bg-gradient-to-r from-[#7a18ea] via-[#a855f7] to-[#7a18ea]" />

                            {/* Close */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
                                aria-label="Fermer"
                            >
                                <XIcon className="size-4" />
                            </button>

                            <div className="p-7">
                                {/* Header */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="flex items-center justify-center size-10 rounded-xl bg-[#7a18ea]/20 border border-[#7a18ea]/30">
                                        <SparklesIcon className="size-5 text-[#a855f7]" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase tracking-widest">Abonnement</p>
                                        <h2 className="text-lg font-semibold text-white leading-tight">Plan {packName}</h2>
                                    </div>
                                </div>

                                {/* Step indicator */}
                                <div className="flex items-center gap-2 mb-7">
                                    {(['phone', 'billing'] as Step[]).map((s, i) => (
                                        <div key={s} className="flex items-center gap-2">
                                            <div className={`size-6 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-300 ${
                                                step === 'loading' || (step === 'billing' && s === 'phone')
                                                    ? 'bg-[#7a18ea]/30 border border-[#7a18ea] text-[#a855f7]'
                                                    : step === s
                                                    ? 'bg-[#7a18ea] text-white'
                                                    : 'bg-[#0a0020] border border-[#2a005a] text-slate-600'
                                            }`}>
                                                {(step === 'billing' && s === 'phone') || (step === 'loading' && s === 'phone')
                                                    ? <CheckIcon className="size-3" />
                                                    : i + 1
                                                }
                                            </div>
                                            <span className={`text-xs ${step === s ? 'text-white' : 'text-slate-600'}`}>
                                                {s === 'phone' ? 'Votre compte' : 'Facturation'}
                                            </span>
                                            {i < 1 && <div className="w-8 h-px bg-[#2a005a] mx-1" />}
                                        </div>
                                    ))}
                                </div>

                                {/* ══════════════════════════════════════
                                    STEP 1 — Saisie du numéro de téléphone
                                    ══════════════════════════════════════ */}
                                {step === 'phone' && (
                                    <form onSubmit={handlePhoneSubmit} className="space-y-4">
                                        <div>
                                            <label className="block text-xs text-slate-400 mb-2">
                                                Numéro de téléphone associé à votre compte Djeli
                                            </label>

                                            {/* Phone input row */}
                                            <div className="flex gap-2">

                                                {/* ── Country selector ── */}
                                                <div className="relative" ref={dropdownRef}>
                                                    <button
                                                        id="djeli-country-selector"
                                                        type="button"
                                                        onClick={() => setCountryOpen((o) => !o)}
                                                        className="flex items-center gap-1.5 h-full px-3 bg-[#0d0025] border border-[#2a005a] rounded-xl text-white hover:border-[#7a18ea] focus:outline-none focus:border-[#7a18ea] transition-all whitespace-nowrap"
                                                        aria-label="Sélectionner l'indicatif pays"
                                                    >
                                                        <span className="text-lg leading-none">{country.flag}</span>
                                                        <span className="text-sm font-medium text-slate-300">{country.dialCode}</span>
                                                        <ChevronDownIcon className={`size-3.5 text-slate-500 transition-transform duration-200 ${countryOpen ? 'rotate-180' : ''}`} />
                                                    </button>

                                                    {/* Dropdown */}
                                                    <AnimatePresence>
                                                        {countryOpen && (
                                                            <motion.div
                                                                initial={{ opacity: 0, y: -6, scale: 0.97 }}
                                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                                exit={{ opacity: 0, y: -6, scale: 0.97 }}
                                                                transition={{ duration: 0.15 }}
                                                                className="absolute top-full left-0 mt-1.5 z-50 min-w-[220px] bg-[#0d0025] border border-[#2a005a] rounded-xl overflow-hidden shadow-xl shadow-black/50"
                                                            >
                                                                {COUNTRIES.map((c) => (
                                                                    <button
                                                                        key={c.code}
                                                                        type="button"
                                                                        onClick={() => { setCountry(c); setCountryOpen(false); inputRef.current?.focus(); }}
                                                                        className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-[#7a18ea]/10 transition-colors ${
                                                                            country.code === c.code ? 'bg-[#7a18ea]/15' : ''
                                                                        }`}
                                                                    >
                                                                        <span className="text-xl">{c.flag}</span>
                                                                        <div className="flex-1 min-w-0">
                                                                            <p className="text-sm text-white truncate">{c.name}</p>
                                                                        </div>
                                                                        <span className="text-sm font-medium text-[#a855f7] shrink-0">{c.dialCode}</span>
                                                                        {country.code === c.code && (
                                                                            <CheckIcon className="size-3.5 text-[#7a18ea] shrink-0" />
                                                                        )}
                                                                    </button>
                                                                ))}
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>

                                                {/* ── Phone number input ── */}
                                                <input
                                                    ref={inputRef}
                                                    id="djeli-phone-input"
                                                    type="tel"
                                                    value={phone}
                                                    onChange={(e) => { setPhone(e.target.value); setError(''); }}
                                                    placeholder={country.placeholder}
                                                    className="flex-1 bg-[#0d0025] border border-[#2a005a] rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#7a18ea] focus:ring-1 focus:ring-[#7a18ea]/40 transition-all"
                                                    autoComplete="tel-national"
                                                    inputMode="numeric"
                                                />
                                            </div>

                                            {/* Preview full number */}
                                            {phone.trim().replace(/\D/g, '').length > 0 && (
                                                <p className="text-[11px] text-slate-600 mt-1.5 pl-1">
                                                    Numéro complet :&nbsp;
                                                    <span className="text-slate-400 font-mono">{fullPhone}</span>
                                                </p>
                                            )}
                                        </div>

                                        {error && (
                                            <motion.p
                                                initial={{ opacity: 0, y: -6 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="text-red-400 text-xs bg-red-900/20 border border-red-800/40 rounded-lg px-3 py-2"
                                            >
                                                {error}
                                            </motion.p>
                                        )}

                                        <button
                                            id="djeli-phone-submit"
                                            type="submit"
                                            disabled={isChecking}
                                            className="w-full py-3 rounded-xl font-medium bg-[#7a18ea] hover:bg-[#6810cc] disabled:opacity-60 text-white transition-all flex items-center justify-center gap-2"
                                        >
                                            {isChecking
                                                ? <><LoaderCircle className="size-4 animate-spin" /> Vérification…</>
                                                : 'Vérifier mon compte'
                                            }
                                        </button>

                                        <p className="text-center text-xs text-slate-600">
                                            Pas encore de compte ?{' '}
                                            <span className="text-[#a855f7]">Téléchargez l'app Djeli</span>
                                        </p>
                                    </form>
                                )}

                                {/* ══════════════════════════════════════
                                    STEP 2 — Choix de la facturation
                                    ══════════════════════════════════════ */}
                                {step === 'billing' && (
                                    <div className="space-y-4">
                                        {/* Verified phone recap */}
                                        <div className="flex items-center gap-2 px-3 py-2 bg-emerald-900/15 border border-emerald-800/30 rounded-xl">
                                            <CheckIcon className="size-3.5 text-emerald-400 shrink-0" />
                                            <p className="text-xs text-slate-400">
                                                Compte vérifié ·{' '}
                                                <span className="text-white font-mono font-medium">{fullPhone}</span>
                                            </p>
                                        </div>

                                        <p className="text-xs text-slate-500">Choisissez votre durée d'abonnement :</p>

                                        {/* Monthly */}
                                        <button
                                            id="djeli-billing-monthly"
                                            type="button"
                                            onClick={() => setBilling(1)}
                                            className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all ${
                                                billing === 1 ? 'border-[#7a18ea] bg-[#7a18ea]/10' : 'border-[#2a005a] bg-[#0d0025] hover:border-[#4a0090]'
                                            }`}
                                        >
                                            <div className="text-left">
                                                <p className="font-medium text-white">Mensuel</p>
                                                <p className="text-xs text-slate-500">Renouvelé chaque mois</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-semibold text-white">{formatFCFA(monthlyPrice)} FCFA</p>
                                                <p className="text-xs text-slate-500">/mois</p>
                                            </div>
                                        </button>

                                        {/* Annual */}
                                        <button
                                            id="djeli-billing-annual"
                                            type="button"
                                            onClick={() => setBilling(12)}
                                            className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all relative ${
                                                billing === 12 ? 'border-[#7a18ea] bg-[#7a18ea]/10' : 'border-[#2a005a] bg-[#0d0025] hover:border-[#4a0090]'
                                            }`}
                                        >
                                            <span className="absolute -top-2.5 right-3 bg-[#7a18ea] text-white text-[10px] font-medium px-2 py-0.5 rounded-full">
                                                −10%
                                            </span>
                                            <div className="text-left">
                                                <p className="font-medium text-white">Annuel</p>
                                                <p className="text-xs text-slate-500">12 mois, facturé en une fois</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-semibold text-white">{formatFCFA(annualPrice)} FCFA</p>
                                                <p className="text-xs text-slate-500">≈ {formatFCFA(Math.round(annualPrice / 12))} FCFA/mois</p>
                                            </div>
                                        </button>

                                        {/* Total */}
                                        <div className="bg-[#0a001e] border border-[#2a005a]/60 rounded-xl p-3 flex items-center justify-between">
                                            <span className="text-xs text-slate-400">Total à payer</span>
                                            <span className="font-semibold text-white">
                                                {billing === 1 ? formatFCFA(monthlyPrice) : formatFCFA(annualPrice)} FCFA
                                            </span>
                                        </div>

                                        {error && (
                                            <motion.p
                                                initial={{ opacity: 0, y: -6 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="text-red-400 text-xs bg-red-900/20 border border-red-800/40 rounded-lg px-3 py-2"
                                            >
                                                {error}
                                            </motion.p>
                                        )}

                                        <div className="flex gap-3 pt-1">
                                            <button
                                                id="djeli-billing-back"
                                                type="button"
                                                onClick={() => { setStep('phone'); setError(''); }}
                                                className="flex-1 py-3 rounded-xl font-medium border border-[#2a005a] text-slate-400 hover:text-white hover:border-[#4a0090] transition-all"
                                            >
                                                Retour
                                            </button>
                                            <button
                                                id="djeli-pay-now"
                                                type="button"
                                                onClick={handlePaymentInit}
                                                className="flex-1 py-3 rounded-xl font-medium bg-[#7a18ea] hover:bg-[#6810cc] text-white transition-all"
                                            >
                                                Payer maintenant
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {/* ══════════════════════════════════════
                                    STEP 3 — Chargement / redirection
                                    ══════════════════════════════════════ */}
                                {step === 'loading' && (
                                    <div className="flex flex-col items-center justify-center py-10 gap-5">
                                        <div className="relative">
                                            <div className="size-16 rounded-full border-2 border-[#7a18ea]/20 flex items-center justify-center">
                                                <LoaderCircle className="size-8 text-[#7a18ea] animate-spin" />
                                            </div>
                                            <div className="absolute inset-0 rounded-full bg-[#7a18ea]/10 animate-ping" />
                                        </div>
                                        <div className="text-center">
                                            <p className="text-white font-medium">Préparation du paiement…</p>
                                            <p className="text-xs text-slate-500 mt-1">Vous allez être redirigé vers Paystack</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
