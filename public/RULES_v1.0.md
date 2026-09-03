# CheatMeetsAI Season Zero — Final Rules v1.0

**Rules ID:** `CMAI-S0-R1.0`  
**Published:** 3 September 2026  
**Status:** Final  

CheatMeetsAI Season Zero is an authorized Minecraft red-team tournament. Every experiment is confined to the organizer-controlled client and private allowlisted arena. These rules do not authorize cheating, probing, spoofing, or testing on any public or third-party system.

## 1. Entry, format, and consent

- Season Zero accepts solo entrants and teams of two.
- Every entrant and every tester must be named on the application and actively accept these rules before receiving the qualifier pack.
- Entrants may withdraw before a scored run without penalty.
- Participants are told what telemetry is recorded and how the simulated staff checks operate.
- Scored-run logs, server replays, and submitted artifacts are retained for 30 days after the final, then deleted unless an entrant requests earlier deletion.
- Involving an undisclosed or non-consenting person is grounds for disqualification.

## 2. Organizer-controlled tournament stack

Every test and scored run occurs on infrastructure operated by the event organizer. The server address is not public. Accepted entrants receive the signed client and arena access in the qualifier pack on 21 September 2026.

| Component | Fixed Season Zero version |
| --- | --- |
| Game | Minecraft: Java Edition 26.2 |
| Client loader | Fabric Loader 0.19.3 on Java 25 |
| Server | Paper 26.2, private allowlist, fixed challenge seed |
| Anti-cheat | GrimAC 2.3.73 |
| Scoring plugin | CMAI JudgeBridge 1.0.0 |
| Activation protocol | CMAI-Arena/1 signed challenge-response handshake |

The qualifier pack includes the exact server and detector configurations, dependency locks, challenge-map hash, and artifact checksums used for scoring.

## 3. Activation and technical containment

The experimental entry must remain dormant until the tournament client receives a valid, time-limited `CMAI-Arena/1` handshake from the organizer-controlled server. The handshake binds the server identity, event build, entrant ID, and session expiry.

- A missing, invalid, expired, replayed, or mismatched handshake must leave every experimental feature disabled.
- Disconnecting, changing server, or losing validation must disable those features immediately.
- The entry must fail closed on single-player, LAN, Realms, public servers, and every non-event address.
- Judges must be able to verify the gate in source and with a negative-test build.

## 4. Permitted features

Only during an authenticated event session, teams may use:

- navigation, planning, aim assistance, automated input, recovery, and objective-solving agents;
- client-side movement or combat assistance designed for the supplied challenges;
- packet timing and shaping against the event server's test instrumentation;
- resource-pack presentation changes submitted as part of the system;
- event-only synthetic telemetry spoofing intended to test GrimAC and JudgeBridge detection; and
- defensive detector modules entered in the Detector Lab track.

In these rules, “spoofing” means synthetic event telemetry inside the closed arena. It does **not** mean account, identity, device, network-origin, operating-system, or authentication spoofing.

## 5. Forbidden behavior

Any of the following causes rejection or immediate disqualification, regardless of score:

- testing or activation on a public, third-party, LAN, Realms, or non-event server;
- obfuscation, packing, encrypted payloads, hidden modules, self-modifying code, or withheld source;
- persistence, autostart, privilege escalation, process injection, security-tool interference, or other operating-system modification;
- reading, requesting, storing, transmitting, or imitating passwords, tokens, cookies, session data, launcher data, or other credentials;
- Microsoft/Mojang session spoofing, authentication bypass, IP or proxy-origin spoofing, HWID/device spoofing, or OS fingerprint spoofing;
- scanning, exploitation, damage, or access outside the supplied event interface;
- undisclosed remote control, post-freeze downloads, or external command-and-control; and
- harassment or involvement of anyone who did not consent.

## 6. Detector and simulated admins

**GrimAC 2.3.73** is the scored anti-cheat. **CMAI JudgeBridge 1.0.0** timestamps and deduplicates its alerts, records objective completion, and produces the signed run ledger.

The **Admin Simulation Team** consists of organizer-controlled spectator bots and scripted staff-check scenarios—the event's “fake admins.” They may observe, teleport, message, and request predetermined actions to test whether an entry remains consistent under scrutiny. Every entrant knows these are simulations. They never impersonate real staff outside the event.

Experimental or verbose detector output appears in raw logs but does not score. Repeated alerts from the same Grim check inside a five-second window count as one deduplicated alert. A staff-confirmed impossible-state event counts only when the signed ledger and synchronized replay agree.

## 7. Fixed scoring model

Each accepted entry receives one seeding run and two scored runs. The higher valid scored run counts. All teams use the same map hash, challenge seed, configuration, and time limit.

| Category | Points | Exact method |
| --- | ---: | --- |
| Detector evasion | 30 | Starts at 30. JudgeBridge subtracts 1 point per deduplicated GrimAC alert and 5 per staff-confirmed impossible-state event, to a floor of 0. |
| Arena performance | 25 | Five deterministic objectives worth 5 points each. Partial completion is awarded only at published checkpoints. |
| Simulated-admin evasion | 15 | Three disclosed staff-check scenarios worth 5 points each: protocol compliance (2), behavioral consistency (2), and clean recovery (1). |
| Containment and reliability | 15 | Valid handshake and fail-closed behavior (8), no unauthorized network or filesystem access (3), and a crash-free scored run (4). |
| Review and reproducibility | 15 | Clean rebuild from submitted source (6), source-to-log traceability (5), and replay reproduction of the scored result (4). |
| **Total** | **100** | A disqualification overrides the numerical result. |

Ties are resolved by containment and reliability, then detector evasion, then arena performance. Judges publish the signed ledger and category totals for every finalist.

## 8. Source, reproducible builds, logs, and replay

The source freeze must include:

- complete unobfuscated source for the mod, resource pack, models, scripts, and native components;
- build instructions, a pinned toolchain, dependency lockfiles, license inventory, and SHA-256 hashes;
- a clean-room build whose artifact hash matches the submitted release, or a documented deterministic-difference report;
- the client log, server log, JudgeBridge ledger, Grim alert export, map hash, event configuration, and synchronized replay for every scored run; and
- a capability manifest mapping every feature to source files, runtime permissions, and log events.

Judges may reject dependencies that disappear, cannot be licensed for review, or perform undeclared network or filesystem operations.

## 9. Dates

All deadlines use UTC.

| Date | Event |
| --- | --- |
| 3 September 2026 | Final Rules v1.0 published |
| 7–20 September 2026 | Applications and consent |
| 21 September 2026 | Qualifier pack and private arena access |
| 18 October 2026, 18:00 UTC | Source and artifact freeze |
| 24–25 October 2026 | Closed scored arena |
| 31 October 2026, 18:00 UTC | Final showcase and award |

A schedule change requires a numbered rules amendment published to every accepted entrant. Silent changes are not valid.

## 10. Honest winner reward

The highest-scoring valid entry receives:

1. one unique animated **Season Zero Champion Cape** rendered in the supplied tournament client;
2. a permanent Season Zero winner badge on the event site; and
3. first entry to the next CMAI arena.

The cape is an event cosmetic, not an official Mojang or Minecraft cape. It has no promised cash value, no blockchain component, and no guaranteed visibility outside the CMAI tournament client. **No cash prize is offered.**

## Acceptance

By entering, every participant confirms that they have read and accepted the complete `CMAI-S0-R1.0` document and will keep all experimental behavior inside the authorized event environment.

CheatMeetsAI is an independent community event and is not affiliated with Mojang Studios or Microsoft.
