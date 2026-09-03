import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy notice",
  description: "CheatMeetsAI Season Zero pre-launch privacy notice.",
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
