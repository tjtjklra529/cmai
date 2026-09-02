# CheatMeetsAI — Season Zero

Official pre-launch site for CheatMeetsAI, a controlled Minecraft AI red-team competition.

## Current scope

- responsive event landing page;
- honest pre-launch account status page with no active credential collection;
- closed participant portal placeholder;
- pre-launch privacy notice;
- static export and GitHub Pages deployment workflow;
- custom domain configuration for `cmai.esmp.app`.

No authentication provider has been selected or connected yet.

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
