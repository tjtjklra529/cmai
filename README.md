# CheatMeetsAI — Season Zero

Official Season Zero site for CheatMeetsAI, a controlled Minecraft AI red-team competition.

## Current scope

- responsive event landing page;
- final `CMAI-S0-R1.0` rules page and downloadable Markdown copy;
- honest pre-launch account status page with no active credential collection;
- closed participant portal placeholder;
- pre-launch privacy notice;
- static export and GitHub Pages deployment workflow;
- custom domain configuration for `cmai.esmp.app`.

No authentication provider has been selected or connected yet.

## Season Zero specification

- Minecraft: Java Edition 26.2;
- Fabric Loader 0.19.3 on Java 25;
- private organizer-controlled Paper 26.2 server;
- GrimAC 2.3.73 with CMAI JudgeBridge 1.0.0;
- signed `CMAI-Arena/1` event handshake with fail-closed behavior;
- unobfuscated source review, reproducible builds, signed logs, and replayable scored runs;
- guaranteed non-cash winner reward: the Season Zero Champion Cape in the supplied tournament client.

The qualifier client, exact detector configuration, and private arena access are scheduled for accepted entrants on 21 September 2026. The complete rules are available at `/rules/` and `public/RULES_v1.0.md`.

## Local development

```bash
npm ci
npm run dev
```

Run `npm run build` for the production export. The static site is written to `out/`.

## GitHub Pages

The workflow in `.github/workflows/deploy-pages.yml` deploys every push to `main`. In the repository settings, choose **GitHub Actions** as the Pages source. The repository CNAME is `cmai.esmp.app`.

In Spaceship DNS, create a CNAME with host `cmai` and target `tjtjklra529.github.io`.

CheatMeetsAI is an independent community event and is not affiliated with Mojang Studios or Microsoft.
