# EP Redesign

## Instruktioner:

Buildet kan blive vist på [GitHub Pages](https://orindholt.github.io/ep-redesign-lit/), eller på live lokal server i mappen 'docs'.
Alle udviklingsfiler og assets ligger i 'dev'.

For at køre udviklingsfilerne, kør: `npm run serve`.
<br/>For at bygge sitet, kør: `npm run build`.

For at udlukkende vise det statiske kan de to web-components blive udkommenteret/fjernet:
<br/>`<!-- <log-in></log-in> -->`<br/>
`<!-- <my-app> </my-app> -->`

Componentet `<my-app> </my-app>` indeholder alle subcomponents som bliver vist på forsiden.

Component `<log-in></log-in>` er login modulet som bliver toggled på login knappen i navbaren.

Navigationen `<nav></nav>` og footeren `<footer></footer>` er bygget statisk.
