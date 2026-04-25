<!--
  ╔═══════════════════════════════════════════════╗
  ║   REPLACE: YOUR_USERNAME → your GitHub handle ║
  ╚═══════════════════════════════════════════════╝
-->

<div align="center">

<!-- ── TITLE ─────────────────────────────────────── -->

<sub><code>m-s-sat / README.md</code></sub>

<br/><br/>

<!-- ── CONTRIBUTION GRAPH ────────────────────────── -->
<!--
  <picture> swaps the entire image src based on GitHub's
  color scheme — dark mode gets bright cyan dots/line,
  light mode gets a deeper teal that's visible on white.
  Both use bg_color=00000000 (transparent) so no box clash.
-->

<picture>
  <source
    media="(prefers-color-scheme: dark)"
    srcset="https://github-readme-activity-graph.vercel.app/graph?username=YOUR_USERNAME&bg_color=00000000&color=00c8ef&line=00c8ef&point=ffffff&area=true&area_color=00c8ef&hide_border=true&custom_title=Contribution%20Graph&title_color=00c8ef&radius=6"
  />
  <source
    media="(prefers-color-scheme: light)"
    srcset="https://github-readme-activity-graph.vercel.app/graph?username=YOUR_USERNAME&bg_color=00000000&color=0077a8&line=0077a8&point=0077a8&area=true&area_color=0077a8&hide_border=true&custom_title=Contribution%20Graph&title_color=0077a8&radius=6"
  />
  <img
    src="https://github-readme-activity-graph.vercel.app/graph?username=YOUR_USERNAME&bg_color=00000000&color=0077a8&line=0077a8&point=0077a8&area=true&area_color=0077a8&hide_border=true&custom_title=Contribution%20Graph&title_color=0077a8&radius=6"
    alt="Contribution Graph"
    width="100%"
  />
</picture>

<!-- ── DIVIDER ──────────────────────────────────── -->

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png" width="80%" />

<!-- ── STATS CARDS ─────────────────────────────── -->
<!--
  Same pattern: dark variant uses bright #00c8ef,
  light variant uses deeper #0077a8 so dots/numbers
  stay readable on GitHub's white background.
-->

<table border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td align="center">
      <picture>
        <source
          media="(prefers-color-scheme: dark)"
          srcset="https://github-readme-streak-stats.herokuapp.com/?user=YOUR_USERNAME&hide_border=true&background=00000000&ring=00c8ef&fire=00c8ef&currStreakLabel=00c8ef&sideLabels=888888&dates=888888&currStreakNum=00c8ef&sideNums=00c8ef&border_radius=10"
        />
        <source
          media="(prefers-color-scheme: light)"
          srcset="https://github-readme-streak-stats.herokuapp.com/?user=YOUR_USERNAME&hide_border=true&background=00000000&ring=0077a8&fire=0077a8&currStreakLabel=0077a8&sideLabels=555555&dates=555555&currStreakNum=0077a8&sideNums=0077a8&border_radius=10"
        />
        <img
          src="https://github-readme-streak-stats.herokuapp.com/?user=YOUR_USERNAME&hide_border=true&background=00000000&ring=0077a8&fire=0077a8&currStreakLabel=0077a8&sideLabels=555555&dates=555555&currStreakNum=0077a8&sideNums=0077a8&border_radius=10"
          alt="Streak Stats"
        />
      </picture>
    </td>
    <td align="center">
      <picture>
        <source
          media="(prefers-color-scheme: dark)"
          srcset="https://github-readme-stats.vercel.app/api?username=YOUR_USERNAME&show_icons=false&hide_border=true&bg_color=00000000&title_color=00c8ef&text_color=aaaaaa&count_private=true&hide=stars,prs,issues&hide_rank=true&custom_title=Contributions&border_radius=10"
        />
        <source
          media="(prefers-color-scheme: light)"
          srcset="https://github-readme-stats.vercel.app/api?username=YOUR_USERNAME&show_icons=false&hide_border=true&bg_color=00000000&title_color=0077a8&text_color=555555&count_private=true&hide=stars,prs,issues&hide_rank=true&custom_title=Contributions&border_radius=10"
        />
        <img
          src="https://github-readme-stats.vercel.app/api?username=YOUR_USERNAME&show_icons=false&hide_border=true&bg_color=00000000&title_color=0077a8&text_color=555555&count_private=true&hide=stars,prs,issues&hide_rank=true&custom_title=Contributions&border_radius=10"
          alt="Stats"
        />
      </picture>
    </td>
  </tr>
</table>

<br/>

<!-- ── PROFILE VIEWS ──────────────────────────── -->

<picture>
  <source
    media="(prefers-color-scheme: dark)"
    srcset="https://komarev.com/ghpvc/?username=YOUR_USERNAME&style=flat-square&color=00c8ef&label=profile+views&labelColor=transparent"
  />
  <source
    media="(prefers-color-scheme: light)"
    srcset="https://komarev.com/ghpvc/?username=YOUR_USERNAME&style=flat-square&color=0077a8&label=profile+views&labelColor=transparent"
  />
  <img
    src="https://komarev.com/ghpvc/?username=YOUR_USERNAME&style=flat-square&color=0077a8&label=profile+views&labelColor=transparent"
    alt="Profile Views"
  />
</picture>

<br/><br/>

</div>

<!--
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  HOW THE LIGHT / DARK ADAPTATION WORKS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Every widget is wrapped in a <picture> element with
  two <source> tags:

    - (prefers-color-scheme: dark)
        accent = #00c8ef  (bright electric cyan)
        dots/points = #ffffff (white — pops on dark bg)
        muted text = #888888

    - (prefers-color-scheme: light)
        accent = #0077a8  (deeper teal — visible on white)
        dots/points = #0077a8 (same teal, not washed out)
        muted text = #555555

  All backgrounds stay bg_color=00000000 (transparent)
  so GitHub's own page color always shows through.
  GitHub reads the user's OS/browser theme preference
  and picks the correct <source> automatically.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  SETUP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  1. Create a public repo named exactly YOUR_USERNAME
  2. Replace every YOUR_USERNAME with your real handle
  3. Push README.md — GitHub renders it on your profile

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  OPTIONAL — SNAKE ANIMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Create .github/workflows/snake.yml:

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

  Then paste above the profile views badge:

    <picture>
      <source media="(prefers-color-scheme: dark)"
        srcset="https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_USERNAME/output/snake-dark.svg"/>
      <source media="(prefers-color-scheme: light)"
        srcset="https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_USERNAME/output/snake-light.svg"/>
      <img width="100%" alt="contribution snake"
        src="https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_USERNAME/output/snake-light.svg"/>
    </picture>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
-->
