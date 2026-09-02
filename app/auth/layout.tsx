import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account access",
  description: "Create or sign in to your CheatMeetsAI event account.",
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return children;
}
