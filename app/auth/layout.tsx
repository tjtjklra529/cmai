import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account status",
  description: "Check when CheatMeetsAI Season Zero account registration opens.",
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return children;
}
