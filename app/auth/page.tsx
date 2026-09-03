import {
  ArrowLeft,
  CheckCircle2,
  Code,
  Globe,
  LockKeyhole,
  PanelsTopLeft,
  Terminal,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function AuthPage() {
  return (
    <main className="account-shell">
      <div className="account-grid" aria-hidden="true" />
      <Link className="account-back" href="/"><ArrowLeft /> Back to event</Link>

      <section className="account-intro">
        <Link className="brand" href="/">
          <span className="brand-mark"><Terminal /></span>
          <span>CHEATMEETS<span>AI</span></span>
        </Link>
        <p className="section-index">EVENT ACCESS / SEASON ZERO</p>
        <h1>Accounts are<br /><span>coming later.</span></h1>
        <p>The event is real, but registration is not open yet. The account provider will be selected and named before anyone is asked to sign in.</p>
        <div className="account-points">
          <span><CheckCircle2 /> Planned options: Google, Microsoft, and GitHub</span>
          <span><CheckCircle2 /> A separate event account is also planned</span>
          <span><CheckCircle2 /> No credentials are collected by this page</span>
        </div>
      </section>

      <section className="auth-card" aria-label="Event account status">
        <div className="auth-card-head">
          <div><span>ACCOUNT UPLINK</span><strong>NOT YET ACTIVE</strong></div>
          <LockKeyhole />
        </div>

        <div className="provider-grid" aria-label="Planned sign-in methods">
          <Button variant="outline" disabled><Globe /> Google</Button>
          <Button variant="outline" disabled><PanelsTopLeft /> Microsoft</Button>
          <Button variant="outline" disabled><Code /> GitHub</Button>
        </div>

        <div className="setup-message">
          <LockKeyhole />
          <h2>Registration has not opened</h2>
          <p>No authentication service has been chosen, so these controls are intentionally disabled. This page will be updated before applications begin.</p>
          <Link href="/">Read the event overview</Link>
        </div>

        <p className="auth-fineprint">CheatMeetsAI will never ask you to type a Google, Microsoft, or GitHub password directly into this site.</p>
      </section>
    </main>
  );
}
