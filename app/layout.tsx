import "./globals.css";
import LenisScroll from "@/components/LenisScroll";

export default function RootLayout({ children, }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <head>
                <link rel="preload" href="/assets/background-splash.svg" as="image" />
            </head>
            <body>
                <LenisScroll />
                {children}
            </body>
        </html>
    );
}
