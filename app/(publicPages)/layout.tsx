import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export const metadata = {
    title: "Djeli",
    description: "Djeli, votre app de gestion tout en un.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}