import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Minimal Next.js App",
  description: "Ultra-minimal Next.js application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Sidebar is injected per-page, see /page.tsx or app-level structure
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="bg-[#f9fafb] text-[#111827] min-h-screen">
        {children}
      </body>
    </html>
  );
}
