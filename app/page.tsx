import {
  ArrowDownRight,
  Bot,
  Box,
  Braces,
  Check,
  ChevronRight,
  Crosshair,
  Eye,
  Fingerprint,
  LockKeyhole,
  Radar,
  ShieldCheck,
  Sparkles,
  Terminal,
  UserRound,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const tracks = [
  {
    number: "01",
    icon: Bot,
    title: "Adaptive Agent",
    copy: "Build an agent that reads the arena, changes strategy, and completes dynamic objectives without scripted routes.",
    tags: ["Navigation", "Planning", "Recovery"],
  },
  {
    number: "02",
    icon: Crosshair,
    title: "Arena Systems",
    copy: "Prototype client-side assistance for movement, combat, or resource challenges inside the supplied tournament build.",
    tags: ["Client mod", "Telemetry", "Control"],
  },
  {
    number: "03",
    icon: Radar,
    title: "Detector Lab",
    copy: "Switch sides and identify automated behavior. Strong defensive entries can earn a separate recognition award.",
    tags: ["Detection", "Analysis", "Defense"],
  },
];

const judging = [
  { label: "Arena performance", value: 35 },
  { label: "Adaptation & originality", value: 30 },
  { label: "Safety & containment", value: 20 },
  { label: "Technical presentation", value: 15 },
];

const phases = [
  {
    step: "01",
    title: "Applications",
    status: "Opening soon",
    copy: "Account registration and concept submissions will open after the official rules go live.",
  },
  {
    step: "02",
    title: "Qualifier pack",
    status: "Date pending",
    copy: "Selected entrants receive the exact client, isolated server environment, API limits, and scoring specification.",
  },
  {
    step: "03",
    title: "Closed arena",
    status: "Date pending",
    copy: "Entries run against the same challenge seed and detector suite. Every run is replayed and reviewed.",
  },
  {
    step: "04",
    title: "Final showcase",
    status: "Date pending",
    copy: "Finalists explain their systems, publish a safe technical summary, and discover the winner reward.",
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <div className="ambient-grid" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="CheatMeetsAI home">
          <span className="brand-mark"><Terminal aria-hidden="true" /></span>
          <span>CHEATMEETS<span>AI</span></span>
        </a>

        <nav className="header-nav" aria-label="Main navigation">
          <a href="#challenge">Challenge</a>
          <a href="#protocol">Protocol</a>
          <a href="#timeline">Timeline</a>
          <a href="#faq">FAQ</a>
        </nav>

        <Button asChild variant="outline" size="sm" className="account-button">
          <a href="/auth/"><UserRound /> Account status</a>
        </Button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span>CMAI / SEASON ZERO</span><span>2026</span></div>
          <h1>Can your AI<br />outplay the <em>detector?</em></h1>
          <p className="hero-lede">
            CheatMeetsAI is a closed Minecraft AI-mod challenge where builders
            and defenders compete inside a purpose-built, organizer-controlled
            sandbox.
          </p>
          <div className="hero-actions">
            <Button asChild size="lg" className="primary-cta">
              <a href="/auth/">Check account status <ArrowDownRight /></a>
            </Button>
            <span className="opening-note"><LockKeyhole /> Applications opening soon</span>
          </div>
          <p className="containment-note">
            <ShieldCheck /> No public servers. No unsuspecting players. Every run stays inside the event environment.
          </p>
        </div>

        <div className="hero-console" aria-label="Event status summary">
          <div className="console-bar">
            <span><i className="dot-red" /><i className="dot-amber" /><i className="dot-green" /></span>
            <span>EVENT_UPLINK // READ ONLY</span>
          </div>
          <div className="console-core">
            <div className="console-orbit" aria-hidden="true">
              <Fingerprint />
              <span className="orbit-one" />
              <span className="orbit-two" />
            </div>
            <div className="console-lines">
              <p><span>EVENT_ID</span><b>CMAI/SEASON-0</b></p>
              <p><span>FORMAT</span><b>REMOTE / CLOSED</b></p>
              <p><span>PLATFORM</span><b>MINECRAFT JAVA</b></p>
              <p><span>ENVIRONMENT</span><b>ISOLATED</b></p>
              <p><span>WINNER REWARD</span><b className="classified">CLASSIFIED</b></p>
            </div>
          </div>
          <div className="console-footer">
            <span>SPECIFICATION DRAFT 0.7</span>
            <span><i /> UPLINK STABLE</span>
          </div>
        </div>
      </section>

      <section className="fact-strip" aria-label="Event facts">
        <div><span>FORMAT</span><strong>Solo or team</strong></div>
        <div><span>LOCATION</span><strong>Remote</strong></div>
        <div><span>ACCESS</span><strong>Invite qualifier</strong></div>
        <div><span>REWARD</span><strong><Sparkles /> Secret reveal</strong></div>
      </section>

      <section className="section" id="challenge">
        <div className="section-heading">
          <p className="section-index">01 / THE CHALLENGE</p>
          <h2>Three ways into<br />the arena.</h2>
          <p>Choose one primary track. Cross-track systems are welcome when every capability can be audited and reproduced.</p>
        </div>

        <div className="track-grid">
          {tracks.map((track) => {
            const Icon = track.icon;
            return (
              <article className="track-card" key={track.number}>
                <div className="track-top"><span>{track.number}</span><Icon /></div>
                <h3>{track.title}</h3>
                <p>{track.copy}</p>
                <div className="tag-row">{track.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="protocol-section" id="protocol">
        <div className="protocol-copy">
          <p className="section-index">02 / EVENT PROTOCOL</p>
          <h2>Real competition.<br />Contained arena.</h2>
          <p>
            The challenge is designed as authorized red-team research. Entrants
            receive a locked tournament environment and an exact ruleset before
            building begins.
          </p>
          <ul>
            <li><Check /> Source code and reproducible builds are required.</li>
            <li><Check /> Network access is disabled during scored runs.</li>
            <li><Check /> Public or third-party server testing is prohibited.</li>
            <li><Check /> Malicious payloads, data access, and persistence are disqualifying.</li>
          </ul>
        </div>

        <div className="score-card">
          <div className="score-card-heading">
            <div><span>SCORING MODEL</span><strong>100 POINTS</strong></div>
            <Eye />
          </div>
          <div className="score-list">
            {judging.map((item) => (
              <div className="score-row" key={item.label}>
                <div><span>{item.label}</span><b>{item.value}%</b></div>
                <div className="score-track"><span style={{ width: `${item.value}%` }} /></div>
              </div>
            ))}
          </div>
          <p><Braces /> Final weights may change before applications open. Published rules will be authoritative.</p>
        </div>
      </section>

      <section className="section timeline-section" id="timeline">
        <div className="section-heading compact">
          <p className="section-index">03 / RELEASE SEQUENCE</p>
          <h2>From concept<br />to final run.</h2>
        </div>
        <div className="timeline-list">
          {phases.map((phase) => (
            <article className="timeline-item" key={phase.step}>
              <span className="timeline-number">{phase.step}</span>
              <div><span className="timeline-status">{phase.status}</span><h3>{phase.title}</h3></div>
              <p>{phase.copy}</p>
              <ChevronRight aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="reward-section">
        <div className="reward-art" aria-hidden="true"><Box /><span /><span /></div>
        <div className="reward-copy">
          <p className="section-index">WINNER REWARD / ENCRYPTED</p>
          <h2>Not cash.<br />Still worth winning.</h2>
          <p>
            The Season Zero winner reward is being finalized. Expect a small,
            event-exclusive surprise rather than a cash prize. The exact reward
            will be published before applications open.
          </p>
          <span className="reward-chip"><Sparkles /> REVEAL PENDING</span>
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div>
          <p className="section-index">04 / COMMON QUESTIONS</p>
          <h2>Before you build.</h2>
        </div>
        <div className="faq-list">
          <details>
            <summary>Is CheatMeetsAI a real event?<ChevronRight /></summary>
            <p>Yes. Season Zero is in pre-launch. Dates, official rules, eligibility, and applications will be published before entries are accepted.</p>
          </details>
          <details>
            <summary>Can entries be tested on normal servers?<ChevronRight /></summary>
            <p>No. All development and scoring must stay inside the supplied offline or organizer-controlled environment. Unauthorized server use results in disqualification.</p>
          </details>
          <details>
            <summary>Do I need to publish my source code?<ChevronRight /></summary>
            <p>Judges must be able to inspect and reproduce the submitted build. Public release is not currently required; the final rules will specify what may be shared after the event.</p>
          </details>
          <details>
            <summary>What does the winner receive?<ChevronRight /></summary>
            <p>A small event-exclusive surprise. A custom cosmetic reward, such as a cape, is being considered, but nothing is promised until the official reveal.</p>
          </details>
        </div>
      </section>

      <section className="closing-panel">
        <div>
          <p>CMAI // SEASON ZERO</p>
          <h2>Build responsibly.<br /><span>Compete relentlessly.</span></h2>
        </div>
        <div className="closing-status">
          <span><i /> PRE-LAUNCH ACTIVE</span>
          <p>Account registration will open after the official rules, reward, and identity provider are confirmed.</p>
          <Button asChild className="secondary-cta"><a href="/auth/">View account status <ChevronRight /></a></Button>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark"><Terminal /></span><span>CHEATMEETS<span>AI</span></span></a>
        <p>Independent community event. Not affiliated with Mojang Studios or Microsoft.</p>
        <div className="footer-links"><a href="/privacy/">Privacy</a><span>© 2026 CheatMeetsAI</span></div>
      </footer>
    </main>
  );
}
