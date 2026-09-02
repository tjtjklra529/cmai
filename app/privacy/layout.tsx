import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy notice",
  description: "How CheatMeetsAI handles participant account information.",
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
