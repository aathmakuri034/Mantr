import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mantr — AI Sanskrit Tutor",
  description:
    "Practice Sanskrit with an AI companion. Real conversations, educator-led curriculum, and a personalized learning journey. Join the early access waitlist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
