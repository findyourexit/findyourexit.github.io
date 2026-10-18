# 👋🏻 Tom Larcher's Personal Website

> [!NOTE]
> This is the source code for my personal website, [tomlarcher.com](https://tomlarcher.com/). The site is built with [Astro](https://astro.build/), a new static site generator that's blazing fast and fun to work with.
>
> ☢️ **_While the site is live, the source code remains a work in progress._**

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

The project uses TypeScript 7 with Astro's experimental
[`@astrojs/ts-content-mapper`](https://github.com/withastro/astro/tree/main/packages/language-tools/ts-content-mapper#usage).
The mapper requires TypeScript 7.1+, so the compiler is pinned to
`7.1.0-dev.20261018.1` rather than stable 7.0.2. This is a prerelease toolchain.
`npm run typecheck` generates Astro types with `astro sync`, then runs native
`tsc --noEmit --runExternalCode` to check TypeScript and `.astro` files.
`--runExternalCode` explicitly permits the mapper to execute during compilation.
The production build runs the same check first; `astro check` is no longer used.

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run typecheck`       | Generate Astro types and check TS/Astro files   |
| `npm run lint`            | Format the project with Prettier                 |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro sync`  |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🙏 Acknowledgments

The site itself is largely the fantastic work of [Vinit Shahdeo](https://vinitshahdeo.com/) and is inspired by [Tim Witzdam](https://github.com/TimWitzdam)'s [Minimal Portfolio Template](https://astro.build/themes/details/minimal-portfolio-template/). The [`/now`](https://tomlarcher.com/now/) page is inspired by the [Now Page](https://sive.rs/nowff) movement, conceived by [Derek Sivers](https://sive.rs/).

## 📫 Contact

Looking to get in touch? Feel free to reach out and connect on [LinkedIn](https://www.linkedin.com/in/tom-larcher/) and [GitHub](https://github.com/findyourexit).
