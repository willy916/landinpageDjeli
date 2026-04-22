import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

// ✅ Pas de metadata ici — chaque page définit la sienne,
// le fallback est géré par app/layout.tsx
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
