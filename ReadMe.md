<!--
  ╔═══════════════════════════════════════════════╗
  ║   REPLACE: YOUR_USERNAME → m-s-sat            ║
  ╚═══════════════════════════════════════════════╝
-->

<div align="center">

<!-- ── TITLE ─────────────────────────────────────── -->

<sub><code>m-s-sat / README.md</code></sub>

<br/><br/>

<!-- ── CONTRIBUTION GRAPH ────────────────────────── -->
<!--
  bg_color=00000000 = fully transparent (8-digit hex, last 2 = alpha)
  GitHub renders the card on top of whatever the page background is.
  Light mode → white page shows through. Dark mode → dark page shows through.
-->

[![Activity Graph](https://github-readme-activity-graph.vercel.app/graph?username=m-s-sat&bg_color=00000000&color=00b8d9&line=00b8d9&point=ffffff&area=true&area_color=00b8d9&hide_border=true&custom_title=Contribution%20Graph&title_color=00b8d9&radius=6)](https://github.com/m-s-sat)

<!-- ── DIVIDER ──────────────────────────────────── -->

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png" width="80%" />

<!-- ── STATS CARDS ─────────────────────────────── -->
<!--
  transparent background on both cards:
  - streak-stats: background=00000000
  - readme-stats:  bg_color=00000000
  Both strip their border so only the text/numbers float on the page bg.
-->

<table border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td align="center">
      <img src="https://github-readme-streak-stats.herokuapp.com/?user=m-s-sat&hide_border=true&background=00000000&ring=00b8d9&fire=00b8d9&currStreakLabel=00b8d9&sideLabels=888888&dates=888888&currStreakNum=00b8d9&sideNums=00b8d9&border_radius=10" />
    </td>
    <td align="center">
      <img src="https://github-readme-stats.vercel.app/api?username=m-s-sat&show_icons=false&hide_border=true&bg_color=00000000&title_color=00b8d9&text_color=888888&count_private=true&hide=stars,prs,issues&hide_rank=true&custom_title=Contributions&border_radius=10" />
    </td>
  </tr>
</table>

<br/>

<!-- ── PROFILE VIEWS ──────────────────────────── -->

<img src="https://komarev.com/ghpvc/?username=m-s-sat&style=flat-square&color=00b8d9&label=profile+views&labelColor=transparent" />

<br/><br/>

</div>

<!--
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  SETUP GUIDE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  1. Create a public repo named exactly m-s-sat

  2. Replace every YOUR_USERNAME in this file with
     your actual GitHub handle.

  3. Push README.md — GitHub renders it on your profile.

  HOW TRANSPARENCY WORKS HERE
  All card backgrounds use bg_color=00000000 (8-digit
  hex where the last 00 = 0% opacity). This means the
  card image is transparent — GitHub's own page color
  (white in light mode, #0d1117 in dark mode) shows
  through. The cyan accents and numbers stay vivid on
  both themes with no mismatch.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  OPTIONAL — SNAKE ANIMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Step 1 — create .github/workflows/snake.yml:

    name: Snake
    on:
      schedule:
        - cron: "0 */12 * * *"
      workflow_dispatch:
    jobs:
      generate:
        runs-on: ubuntu-latest
        steps:
          - uses: Platane/snk/svg-only@v3
            with:
              github_user_name: ${{ github.repository_owner }}
              outputs: |
                dist/snake-dark.svg?palette=github-dark
                dist/snake-light.svg?palette=github-light
          - uses: crazy-max/ghaction-github-pages@v3
            with:
              target_branch: output
              build_dir: dist
            env:
              GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

  Step 2 — trigger workflow once from the Actions tab.

  Step 3 — paste this block above the profile views badge.
  It auto-switches between light/dark snake SVGs:

    <picture>
      <source media="(prefers-color-scheme: dark)"
        srcset="https://raw.githubusercontent.com/m-s-sat/m-s-sat/output/snake-dark.svg"/>
      <source media="(prefers-color-scheme: light)"
        srcset="https://raw.githubusercontent.com/m-s-sat/m-s-sat/output/snake-light.svg"/>
      <img alt="contribution snake" width="100%"
        src="https://raw.githubusercontent.com/m-s-sat/m-s-sat/output/snake-dark.svg"/>
    </picture>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
-->
