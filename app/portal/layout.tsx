import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Participant portal",
  description: "CheatMeetsAI participant portal status.",
};

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return children;
}
