import type { Metadata, Viewport } from "next";
import "./globals.css";

// This automatically generates: <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Yongza",
  description: "A Next.js web app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Your Header with the safe-area-inset calculation */}
        <header
          style={{
            paddingTop: "env(safe-area-inset-top, 55px)",
            paddingBottom: "10px",
            paddingLeft: "20px",
            paddingRight: "20px",
            backgroundColor: "#000000", // Change to your preferred color
            color: "#ffffff",
            fontSize: "1.5rem",
            fontWeight: "bold",
            textAlign: "center",
            borderBottom: "1px solid #333",
          }}
        >
          Yongza
        </header>

        {/* The rest of your app content goes here */}
        <main>{children}</main>
      </body>
    </html>
  );
}
