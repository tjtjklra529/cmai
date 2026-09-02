import { ArrowLeft, Database, EyeOff, LockKeyhole, Terminal, Trash2 } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="legal-shell">
      <header className="legal-header">
        <a className="brand" href="/">
          <span className="brand-mark"><Terminal /></span>
          <span>CHEATMEETS<span>AI</span></span>
        </a>
        <a href="/"><ArrowLeft /> Event home</a>
      </header>

      <article className="legal-content">
        <p className="section-index">PRIVACY / PRE-LAUNCH NOTICE</p>
        <h1>Privacy, without the fog.</h1>
        <p className="legal-lede">Account registration and applications are not active. A complete notice naming the chosen account provider will be published before they open.</p>

        <aside className="legal-warning"><LockKeyhole /><div><strong>No account collection is active.</strong><p>The sign-in controls are disabled and this site has no participant database.</p></div></aside>

        <section>
          <h2><Database /> What this site stores</h2>
          <p>The current pre-launch site does not store event accounts, applications, project files, or form submissions.</p>
        </section>
        <section>
          <h2><EyeOff /> What is not requested</h2>
          <p>This site does not ask for Minecraft credentials, provider passwords, payment information, precise location, or advertising profiles.</p>
        </section>
        <section>
          <h2><LockKeyhole /> Before accounts open</h2>
          <p>The final privacy notice will identify the authentication service, the information it processes, why it is needed, and how long it is retained.</p>
        </section>
        <section>
          <h2><Trash2 /> Access and deletion</h2>
          <p>Account access and deletion instructions will be published before any participant accounts are created.</p>
        </section>

        <p className="legal-updated">Draft updated 2 September 2026. This is a technical pre-launch notice, not a substitute for final event rules.</p>
      </article>
    </main>
  );
}
