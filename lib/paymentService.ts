const BASE = 'https://admin.djeli.pro/waretrack/api/v1';

export async function checkPhone(phone: string): Promise<boolean> {
    const res = await fetch(`${BASE}/prospects/check-contact/${encodeURIComponent(phone)}`);
    if (!res.ok) throw new Error('Erreur réseau lors de la vérification du numéro.');
    const data = await res.json();
    return data.exist === 'true';
}

export interface InitPaymentParams {
    phone: string;
    packId: number;
    nbOfMonths: number;
}

export async function initPayment({ phone, packId, nbOfMonths }: InitPaymentParams): Promise<string> {
    const res = await fetch(`${BASE}/subscription/init-by-phone`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userPhone: phone, packId, nbOfMonths }),
    });
    const data = await res.json();
    if (!res.ok) {
        throw new Error(
            data.message ||
            'Une erreur est survenue lors de l\'initialisation du paiement.'
        );
    }
    return data.data.authorization_url as string;
}

export async function verifyPayment(reference: string): Promise<boolean> {
    const res = await fetch(`${BASE}/subscription/paystack/callback?reference=${encodeURIComponent(reference)}`);
    const data = await res.json();
    return data.status === 'success';
}
