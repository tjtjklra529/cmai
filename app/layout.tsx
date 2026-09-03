import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "CheatMeetsAI — Season Zero",
    template: "%s — CheatMeetsAI",
  },
  description: "An authorized Minecraft 26.2 AI-mod tournament on a private, organizer-controlled arena.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
