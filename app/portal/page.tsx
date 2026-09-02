import { ArrowLeft, ChevronRight, FileLock2 } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function PortalPage() {
  return (
    <main className="portal-shell portal-centered">
      <div className="portal-lock"><FileLock2 /></div>
      <p className="section-index">PARTICIPANT PORTAL / PRE-LAUNCH</p>
      <h1>Portal offline.</h1>
      <p>The participant portal will open with account registration. No account service is connected yet.</p>
      <Button asChild className="primary-cta"><a href="/auth/">View account status <ChevronRight /></a></Button>
      <a className="portal-home-link" href="/"><ArrowLeft /> Return to event page</a>
    </main>
  );
}
