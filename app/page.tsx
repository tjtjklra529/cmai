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
    title: "Evasion Engineering",
    copy: "Build client-side assistance, packet shaping, and event-only spoofing that survives the supplied detector stack inside the tournament build.",
    tags: ["Client mod", "Spoofing", "Resource pack"],
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
  { label: "Detector evasion", value: 30 },
  { label: "Arena performance", value: 25 },
  { label: "Simulated-admin evasion", value: 15 },
  { label: "Containment & reliability", value: 15 },
  { label: "Review & reproducibility", value: 15 },
];

const phases = [
  {
    step: "01",
    title: "Applications",
    status: "28 December 2026 – 10 January 2027",
    copy: "Entrants accept the rules and consent notice, identify every tester, and submit a short technical concept.",
  },
  {
    step: "02",
    title: "Qualifier pack",
    status: "11 January 2027",
    copy: "Accepted entrants receive the signed Fabric client, private server access, exact detector build, test map, and scoring specification.",
  },
  {
    step: "03",
    title: "Source freeze",
    status: "7 February 2027",
    copy: "Source, build instructions, dependency lockfiles, hashes, and final mod/resource-pack artifacts are submitted for review.",
  },
  {
    step: "04",
    title: "Closed arena",
    status: "13–14 February 2027",
    copy: "Every entry runs against the same challenge seed, detector configuration, and simulated-admin scenarios. Runs are logged and replayable.",
  },
  {
    step: "05",
    title: "Final showcase",
    status: "20 February 2027",
    copy: "Finalists explain their systems, publish a safe technical summary, and the Season Zero Champion Cape is awarded.",
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
          <a href="/rules/">Rules</a>
          <a href="#faq">FAQ</a>
        </nav>

        <Button asChild variant="outline" size="sm" className="account-button">
          <a href="/rules/"><UserRound /> Rules v1.0</a>
        </Button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span>RULES v1.0 / FINAL</span><span>03 SEP 2026</span></div>
          <h1>Beat the arena.<br />Outplay the <em>detector.</em></h1>
          <p className="hero-lede">
            CheatMeetsAI Season Zero is an authorized Minecraft AI-mod challenge
            running on a private organizer-controlled server with a supplied,
            handshake-locked tournament client.
          </p>
          <div className="hero-actions">
            <Button asChild size="lg" className="primary-cta">
              <a href="/rules/">Read final rules <ArrowDownRight /></a>
            </Button>
            <span className="opening-note"><LockKeyhole /> Applications open 28 December 2026</span>
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
              <p><span>CLIENT</span><b>MC 26.2 / FABRIC 0.19.3</b></p>
              <p><span>SERVER</span><b>PAPER 26.2 / ALLOWLIST</b></p>
              <p><span>DETECTOR</span><b>GRIMAC 2.3.73</b></p>
              <p><span>SCORING BRIDGE</span><b>JUDGEBRIDGE 1.0.0</b></p>
              <p><span>WINNER REWARD</span><b className="classified">CHAMPION CAPE</b></p>
            </div>
          </div>
          <div className="console-footer">
            <span>RULESET CMAI-S0-R1.0</span>
            <span><i /> UPLINK STABLE</span>
          </div>
        </div>
      </section>

      <section className="fact-strip" aria-label="Event facts">
        <div><span>FORMAT</span><strong>Solo or duo</strong></div>
        <div><span>SERVER</span><strong>Private allowlist</strong></div>
        <div><span>DETECTOR</span><strong>GrimAC + JudgeBridge</strong></div>
        <div><span>REWARD</span><strong><Sparkles /> Champion Cape</strong></div>
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
            Every scored run uses the supplied Fabric 26.2 client and the same
            organizer-controlled Paper 26.2 server. JudgeBridge 1.0.0 records
            GrimAC alerts, arena performance, and simulated-admin detections.
          </p>
          <ul>
            <li><Check /> Features activate only after the signed CMAI-Arena/1 handshake.</li>
            <li><Check /> Event-only spoofing is permitted and scored inside the supplied environment.</li>
            <li><Check /> Source review, reproducible builds, logs, and replayable runs are required.</li>
            <li><Check /> Obfuscation, persistence, credential access, OS interference, and public-server testing are disqualifying.</li>
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
          <p><Braces /> Fixed weights under RULES v1.0. A disqualification overrides the numerical score.</p>
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
          <p className="section-index">THE BIG REWARD SURPRISE / REVEALED</p>
          <h2>The Season Zero<br />Champion Cape.</h2>
          <p>
            The winner receives a unique animated Champion Cape in the supplied
            tournament client, a permanent winner badge on the event site, and
            first entry to the next CMAI arena. It is an event cosmetic—not an
            official Mojang cape—and no cash prize is promised.
          </p>
          <span className="reward-chip"><Sparkles /> GUARANTEED NON-CASH REWARD</span>
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
            <p>Yes. RULES v1.0 fixes the platform, detector stack, dates, safety limits, scoring, evidence requirements, and winner reward.</p>
          </details>
          <details>
            <summary>Can entries be tested on normal servers?<ChevronRight /></summary>
            <p>No. The mod must fail closed without the signed event-server handshake. Public or third-party server use results in disqualification.</p>
          </details>
          <details>
            <summary>Do I need to publish my source code?<ChevronRight /></summary>
            <p>Judges receive the full unobfuscated source, dependency lockfiles, build instructions, and artifact hashes. Public release is not required.</p>
          </details>
          <details>
            <summary>What does the winner receive?<ChevronRight /></summary>
            <p>A unique animated Season Zero Champion Cape for the supplied tournament client, a permanent site badge, and first entry to the next arena. It is not an official Mojang cape or a cash prize.</p>
          </details>
        </div>
      </section>

      <section className="closing-panel">
        <div>
          <p>CMAI // SEASON ZERO</p>
          <h2>Build responsibly.<br /><span>Compete relentlessly.</span></h2>
        </div>
        <div className="closing-status">
          <span><i /> RULES v1.0 PUBLISHED</span>
          <p>Read the complete permitted-feature list, containment contract, scoring model, consent terms, and fixed schedule.</p>
          <Button asChild className="secondary-cta"><a href="/rules/">Open final rules <ChevronRight /></a></Button>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark"><Terminal /></span><span>CHEATMEETS<span>AI</span></span></a>
        <p>Independent community event. Not affiliated with Mojang Studios or Microsoft.</p>
        <div className="footer-links"><a href="/rules/">Rules v1.0</a><a href="/privacy/">Privacy</a><span>© 2026 CheatMeetsAI</span></div>
      </footer>
    </main>
  );
}
