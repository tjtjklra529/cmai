import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Participant portal",
  description: "Your CheatMeetsAI participant account and event status.",
};

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return children;
}
