import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Final Rules v1.0 | CheatMeetsAI Season Zero",
  description:
    "The final permitted features, safety limits, scoring, schedule, platform, consent terms, and reward for CheatMeetsAI Season Zero.",
};

export default function RulesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
