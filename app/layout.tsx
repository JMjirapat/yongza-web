import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "Yongza",
  description: "A Next.js web app",
};

// 1. Add 'async' here
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 2. Await and get the headers
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") || "";

  // 3. Detect the OS using regular expressions
  const isIOS = /iPad|iPhone|iPod/.test(userAgent);
  const isAndroid = /Android/.test(userAgent);

  // 4. Create your if/else logic for the padding
  let dynamicPaddingTop = "55px"; // Default for desktop/other

  if (isIOS) {
    // iOS logic: use the max trick we wrote earlier
    dynamicPaddingTop = "55px";
  } else if (isAndroid) {
    // Android logic: force a specific pixel amount, or whatever you prefer
    dynamicPaddingTop = "env(safe-area-inset-top)";
  }

  return (
    <html lang="en">
      <body>
        <header
          style={{
            // 5. Apply the variable here!
            paddingTop: dynamicPaddingTop,
            paddingBottom: "10px",
            paddingLeft: "20px",
            paddingRight: "20px",
            backgroundColor: "#000000",
            color: "#ffffff",
            fontSize: "1.5rem",
            fontWeight: "bold",
            textAlign: "center",
            borderBottom: "1px solid #333",
          }}
        >
          Yongza
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
