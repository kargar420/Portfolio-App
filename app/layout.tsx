import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Kartik Agrawal — Software Engineer",
  description:
    "Software Engineer building scalable full-stack architectures and high-performance frontend systems. Based in Ranchi, Jharkhand.",
  keywords: [
    "Kartik Agrawal",
    "Software Engineer",
    "Full-Stack",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
  ],
  authors: [{ name: "Kartik Agrawal" }],
  openGraph: {
    title: "Kartik Agrawal — Software Engineer",
    description:
      "Software Engineer building scalable full-stack architectures and high-performance frontend systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
