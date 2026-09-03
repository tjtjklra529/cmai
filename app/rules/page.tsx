import {
  ArrowLeft,
  Award,
  CalendarDays,
  Check,
  CircleOff,
  Download,
  FileCode2,
  Fingerprint,
  Gauge,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  Users,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const sections = [
  ["01", "Entry & consent"],
  ["02", "Tournament stack"],
  ["03", "Containment"],
  ["04", "Permitted features"],
  ["05", "Forbidden behavior"],
  ["06", "Detection"],
  ["07", "Scoring"],
  ["08", "Evidence"],
  ["09", "Dates"],
  ["10", "Reward"],
];

const scoreRows = [
  {
    category: "Detector evasion",
    points: "30",
    method:
      "Starts at 30. JudgeBridge subtracts 1 point per deduplicated GrimAC alert and 5 per staff-confirmed impossible-state event, to a floor of 0.",
  },
  {
    category: "Arena performance",
    points: "25",
    method:
      "Five deterministic objectives worth 5 points each. Partial completion is awarded only at published checkpoints.",
  },
  {
    category: "Simulated-admin evasion",
    points: "15",
    method:
      "Three disclosed staff-check scenarios worth 5 points each: protocol compliance (2), behavioral consistency (2), and clean recovery (1).",
  },
  {
    category: "Containment & reliability",
    points: "15",
    method:
      "Valid handshake and fail-closed behavior (8), no unauthorized network or filesystem access (3), and a crash-free scored run (4).",
  },
  {
    category: "Review & reproducibility",
    points: "15",
    method:
      "Clean rebuild from submitted source (6), source-to-log traceability (5), and replay reproduction of the scored result (4).",
  },
];

const dates = [
  ["03 SEP 2026", "Rules v1.0 published"],
  ["28 DEC 2026 – 10 JAN 2027", "Applications and consent"],
  ["11 JAN 2027", "Qualifier pack and private arena access"],
  ["07 FEB 2027 / 18:00 UTC", "Source and artifact freeze"],
  ["13–14 FEB 2027", "Closed scored arena"],
  ["20 FEB 2027 / 18:00 UTC", "Final showcase and award"],
];

export default function RulesPage() {
  return (
    <main className="rules-shell">
      <div className="ambient-grid" aria-hidden="true" />

      <header className="rules-header">
        <Link className="brand" href="/">
          <span className="brand-mark"><Terminal /></span>
          <span>CHEATMEETS<span>AI</span></span>
        </Link>
        <Link className="rules-back" href="/"><ArrowLeft /> Event home</Link>
      </header>

      <section className="rules-hero">
        <div>
          <div className="rules-kicker"><span>FINAL</span><span>RULES v1.0</span><span>CMAI-S0-R1.0</span></div>
          <h1>Season Zero<br />tournament rules.</h1>
          <p>
            The complete operating contract for an authorized Minecraft
            red-team event: one supplied client, one private arena, one fixed
            detector stack, and evidence that every scored run can be replayed.
          </p>
          <div className="rules-actions">
            <Button asChild size="lg" className="primary-cta">
              <a href="#rules">Read the rules <ArrowLeft className="rules-arrow-down" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rules-download">
              <a href="/RULES_v1.0.md" download><Download /> Download Markdown</a>
            </Button>
          </div>
        </div>

        <div className="rules-spec-grid" aria-label="Tournament specification">
          <article className="rules-spec-card"><Server /><span>ARENA</span><strong>Paper 26.2</strong><small>Organizer-controlled / allowlist only</small></article>
          <article className="rules-spec-card"><Fingerprint /><span>DETECTOR</span><strong>GrimAC 2.3.73</strong><small>JudgeBridge 1.0.0 scoring adapter</small></article>
          <article className="rules-spec-card"><FileCode2 /><span>CLIENT</span><strong>Java 26.2</strong><small>Fabric Loader 0.19.3 / Java 25</small></article>
          <article className="rules-spec-card reward"><Award /><span>WINNER REWARD</span><strong>Champion Cape</strong><small>Unique event cosmetic / no cash prize</small></article>
        </div>
      </section>

      <aside className="scope-notice">
        <ShieldCheck />
        <div>
          <strong>AUTHORIZED ENVIRONMENT ONLY</strong>
          <p>
            Evasion, packet shaping, and synthetic telemetry spoofing are allowed
            only after the supplied client validates the private event server.
            Nothing in these rules authorizes use on a public or third-party server.
          </p>
        </div>
      </aside>

      <div className="rules-layout" id="rules">
        <nav className="rules-nav" aria-label="Rules contents">
          <div className="rules-nav-inner">
            <span>CONTENTS</span>
            {sections.map(([number, label]) => (
              <a href={`#rule-${number}`} key={number}><b>{number}</b>{label}</a>
            ))}
          </div>
        </nav>

        <article className="rules-content">
          <section className="rule-section" id="rule-01">
            <div className="rule-heading"><span>01</span><Users /><h2>Entry, format & consent</h2></div>
            <div className="rule-copy">
              <p>Season Zero is a solo-or-duo event. Every entrant and every tester must be named on the application, accept RULES v1.0, and actively consent before receiving the qualifier pack.</p>
              <ul className="rules-list allowed">
                <li><Check /> Entrants may withdraw before a scored run without penalty.</li>
                <li><Check /> All participants are told what telemetry is recorded and how the simulated staff checks work.</li>
                <li><Check /> Scored-run logs, server replays, and submitted artifacts are retained for 30 days after the final, then deleted unless an entrant asks for earlier deletion.</li>
              </ul>
              <p className="rule-note">No unsuspecting player, moderator, server owner, or tester may be involved. A team that adds an undisclosed tester is disqualified.</p>
            </div>
          </section>

          <section className="rule-section" id="rule-02">
            <div className="rule-heading"><span>02</span><Server /><h2>Organizer-controlled tournament stack</h2></div>
            <div className="rule-copy">
              <p>The competition runs only on infrastructure operated by the organizer. The network address is withheld from the public and issued to accepted entrants in the signed qualifier pack on 11 January 2027.</p>
              <dl className="spec-list">
                <div><dt>Game</dt><dd>Minecraft: Java Edition 26.2</dd></div>
                <div><dt>Client loader</dt><dd>Fabric Loader 0.19.3 on Java 25</dd></div>
                <div><dt>Server</dt><dd>Paper 26.2, private allowlist, fixed challenge seed</dd></div>
                <div><dt>Anti-cheat</dt><dd>GrimAC 2.3.73</dd></div>
                <div><dt>Scoring plugin</dt><dd>CMAI JudgeBridge 1.0.0</dd></div>
                <div><dt>Protocol</dt><dd>CMAI-Arena/1 signed challenge-response handshake</dd></div>
              </dl>
              <p className="rule-note">The qualifier pack includes the exact server configuration, detector configuration, dependency locks, challenge-map hash, and artifact checksums used for scoring.</p>
            </div>
          </section>

          <section className="rule-section" id="rule-03">
            <div className="rule-heading"><span>03</span><ShieldCheck /><h2>Activation & technical containment</h2></div>
            <div className="rule-copy">
              <p>The experimental entry must remain dormant until the tournament client receives a valid, time-limited CMAI-Arena/1 handshake from the organizer-controlled server. The handshake binds the server identity, event build, entrant ID, and session expiry.</p>
              <ul className="rules-list allowed">
                <li><Check /> Invalid, missing, expired, replayed, or mismatched handshakes must leave every experimental feature disabled.</li>
                <li><Check /> Disconnecting, changing server, or losing validation must disable those features immediately.</li>
                <li><Check /> The mod must fail closed on single-player, LAN, Realms, public servers, and every non-event address.</li>
                <li><Check /> Judges must be able to verify the gate from source and from a negative test build.</li>
              </ul>
            </div>
          </section>

          <section className="rule-section" id="rule-04">
            <div className="rule-heading"><span>04</span><Check /><h2>Permitted features</h2></div>
            <div className="rule-copy">
              <p>Within an authenticated event session, teams may build and score the following:</p>
              <ul className="rules-list allowed">
                <li><Check /> Navigation, planning, aim assistance, automated input, recovery, and objective-solving agents.</li>
                <li><Check /> Client-side movement or combat assistance designed for the supplied challenges.</li>
                <li><Check /> Packet timing and shaping against the event server&apos;s test instrumentation.</li>
                <li><Check /> Resource-pack presentation changes used as part of the submitted system.</li>
                <li><Check /> Event-only synthetic telemetry spoofing intended to test GrimAC and JudgeBridge detection.</li>
                <li><Check /> Defensive detector modules entered in the Detector Lab track.</li>
              </ul>
              <p className="rule-note">“Spoofing” here means synthetic event telemetry inside the closed arena—not account, identity, device, network-origin, or authentication spoofing.</p>
            </div>
          </section>

          <section className="rule-section danger" id="rule-05">
            <div className="rule-heading"><span>05</span><CircleOff /><h2>Forbidden behavior</h2></div>
            <div className="rule-copy">
              <p>Any item below causes rejection or immediate disqualification, regardless of score:</p>
              <ul className="rules-list forbidden">
                <li><CircleOff /> Testing or activating the entry on a public, third-party, LAN, Realms, or non-event server.</li>
                <li><CircleOff /> Obfuscation, packing, encrypted payloads, hidden modules, self-modifying code, or withholding source.</li>
                <li><CircleOff /> Persistence, autostart, privilege escalation, process injection, security-tool interference, or any other OS modification.</li>
                <li><CircleOff /> Reading, requesting, storing, transmitting, or imitating passwords, tokens, cookies, session data, launcher data, or other credentials.</li>
                <li><CircleOff /> Microsoft/Mojang session spoofing, authentication bypass, IP or proxy-origin spoofing, HWID/device spoofing, or OS fingerprint spoofing.</li>
                <li><CircleOff /> Scanning, exploiting, damaging, or accessing infrastructure outside the supplied event interface.</li>
                <li><CircleOff /> Undisclosed remote control, post-freeze downloads, external command-and-control, harassment, or involving anyone who did not consent.</li>
              </ul>
            </div>
          </section>

          <section className="rule-section" id="rule-06">
            <div className="rule-heading"><span>06</span><Fingerprint /><h2>Detector & simulated admins</h2></div>
            <div className="rule-copy">
              <p><strong>GrimAC 2.3.73</strong> is the scored anti-cheat. <strong>CMAI JudgeBridge 1.0.0</strong> is the event plugin that timestamps and deduplicates its alerts, records objective completion, and produces the signed run ledger.</p>
              <div className="admin-sim-card">
                <Users />
                <div>
                  <span>ADMIN SIMULATION TEAM</span>
                  <p>Organizer-controlled spectator bots and scripted staff-check scenarios act as “fake admins” inside the arena. They observe, teleport, message, and request predetermined actions to test whether an entry remains consistent under scrutiny. Every entrant knows these are simulations; they never impersonate real staff outside the event.</p>
                </div>
              </div>
              <p>Experimental/verbose detector output is visible in raw logs but does not score. Repeated alerts from the same Grim check inside a five-second window are one deduplicated alert. A staff-confirmed impossible-state event requires the run ledger and replay to agree.</p>
            </div>
          </section>

          <section className="rule-section" id="rule-07">
            <div className="rule-heading"><span>07</span><Gauge /><h2>Fixed scoring model</h2></div>
            <div className="rule-copy">
              <p>Each accepted entry receives one seeding run and two scored runs. The higher valid scored run counts. All teams use the same map hash, challenge seed, configuration, and time limit.</p>
              <div className="rules-table-wrap">
                <table className="rules-table">
                  <thead><tr><th>Category</th><th>Points</th><th>Method</th></tr></thead>
                  <tbody>
                    {scoreRows.map((row) => (
                      <tr key={row.category}><th scope="row">{row.category}</th><td>{row.points}</td><td>{row.method}</td></tr>
                    ))}
                  </tbody>
                  <tfoot><tr><th scope="row">Total</th><td>100</td><td>Ties: containment, then detector evasion, then arena performance.</td></tr></tfoot>
                </table>
              </div>
              <p className="rule-note">A disqualification overrides the numerical result. Judges publish the signed ledger and category totals for every finalist.</p>
            </div>
          </section>

          <section className="rule-section" id="rule-08">
            <div className="rule-heading"><span>08</span><FileCode2 /><h2>Source, builds, logs & replay</h2></div>
            <div className="rule-copy">
              <p>The source freeze is an auditable submission, not just a mod file. Judges must be able to produce the same artifact and replay the same evidence.</p>
              <ul className="rules-list allowed">
                <li><Check /> Complete unobfuscated source for the mod, resource pack, models, scripts, and native components.</li>
                <li><Check /> Build instructions, pinned toolchain, dependency lockfiles, license inventory, and SHA-256 hashes.</li>
                <li><Check /> A clean-room build whose resulting artifact hash matches the submitted release, or a documented deterministic-difference report.</li>
                <li><Check /> Client log, server log, JudgeBridge ledger, Grim alert export, map hash, event configuration, and synchronized replay for each scored run.</li>
                <li><Check /> A capability manifest mapping every feature to its source files, runtime permission, and log events.</li>
              </ul>
              <p>Judges may reject dependencies that disappear, cannot be licensed for review, or perform undeclared network or filesystem operations.</p>
            </div>
          </section>

          <section className="rule-section" id="rule-09">
            <div className="rule-heading"><span>09</span><CalendarDays /><h2>Season Zero dates</h2></div>
            <div className="rule-copy">
              <div className="rules-timeline">
                {dates.map(([date, event]) => (
                  <div key={date}><time>{date}</time><span>{event}</span></div>
                ))}
              </div>
              <p className="rule-note">All cutoffs use UTC. A schedule change requires a numbered rules amendment published to every accepted entrant; silent changes are not valid.</p>
            </div>
          </section>

          <section className="rule-section" id="rule-10">
            <div className="rule-heading"><span>10</span><Award /><h2>The big reward surprise—revealed</h2></div>
            <div className="rule-copy">
              <div className="reward-disclosure">
                <Sparkles />
                <div><span>GUARANTEED WINNER REWARD</span><h3>Season Zero Champion Cape</h3></div>
              </div>
              <p>The highest-scoring valid entry receives one unique animated cape rendered in the supplied tournament client, a permanent Season Zero winner badge on the event site, and first entry to the next CMAI arena.</p>
              <p><strong>Honest disclosure:</strong> this is an event cosmetic, not an official Mojang or Minecraft cape. It has no promised cash value, no blockchain component, and no guaranteed visibility outside the CMAI tournament client. No cash prize is offered.</p>
            </div>
          </section>

          <aside className="rules-signoff">
            <ShieldCheck />
            <div><span>FINAL RULESET</span><strong>CMAI-S0-R1.0</strong><p>Published 3 September 2026. By entering, every participant confirms they have read and accepted this complete document.</p></div>
          </aside>
        </article>
      </div>

      <footer className="rules-footer">
        <p>Independent community event. Not affiliated with Mojang Studios or Microsoft.</p>
        <div><a href="/privacy/">Privacy</a><a href="/RULES_v1.0.md">Markdown copy</a><span>© 2026 CheatMeetsAI</span></div>
      </footer>
    </main>
  );
}
