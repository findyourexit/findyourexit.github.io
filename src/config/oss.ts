import type { OssProject } from "../types/config";

/**
 * A curated collection of some open-source projects I maintain or contribute to.
 *
 * Hand-curated — every field other than `title`, `description` and `url` is optional. Supply only the context that's
 * relevant to each project.
 */
export const ossProjects: OssProject[] = [
  {
    title: "intellij-git-arborist",
    description:
      "An IntelliJ Platform plugin that makes Git worktrees first-class inside JetBrains IDEs — create, open, and manage them from a dedicated tool window, the Git menu, and the Project View.",
    details:
      "Drives the whole worktree workflow from inside the IDE: a pull-request-style tool window with asynchronous status badges, flexible open modes, and automatic carry-over of your project setup — run configurations, code style, and local tooling — into a new worktree before it opens for the first time. Every operation runs through Git4Idea on a background thread.",
    url: "https://github.com/findyourexit/intellij-git-arborist",
    language: "Kotlin",
    framework: "IntelliJ Platform",
    runtime: "JetBrains IDEs (JVM)",
    status: "Active",
    capacity: "Maintainer",
    highlights: [
      "Makes Git worktrees first-class inside JetBrains IDEs",
      "Carries your `.idea/` setup & run configs into a new worktree before it opens",
      "Every worktree operation runs through Git4Idea on a background thread",
    ],
    stars: 0,
    license: "Apache-2.0",
    updated: "2026-06-24",
    featured: true,
    tags: ["IntelliJ Plugin", "Git Worktrees", "Developer Tooling"],
  },
  {
    title: "git-pr-tui (gprr)",
    description:
      "A keyboard-driven terminal UI for triaging, reviewing, and merging GitHub pull requests — without leaving the shell.",
    details:
      "Reuses your existing `gh` login and keeps everything in memory, so you get from “what needs my attention?” to merged in a handful of keystrokes. Ships as one self-contained binary, with an offline `--demo` mode that needs no token or network.",
    url: "https://github.com/findyourexit/git-pr-tui",
    language: "Rust",
    framework: "ratatui",
    runtime: "Native (CLI)",
    status: "Active",
    capacity: "Maintainer",
    highlights: [
      "Single self-contained binary — reuses your existing `gh` CLI login",
      "From “what needs my attention?” to merged in a handful of keystrokes",
      "Offline `--demo` mode: explore the whole UI with zero setup",
    ],
    stars: 0,
    license: "MIT",
    updated: "2026-06-05",
    tags: ["TUI", "GitHub", "Developer Tooling"],
  },
  {
    title: "zonetimeline-tui",
    description:
      "A terminal tool for visually comparing time zones, built for distributed teams.",
    details:
      "See at a glance where working hours overlap across zones and find meeting slots without the mental arithmetic, then manage your zone list interactively. Ships as a single binary with both a rich TUI and a plain-text mode for scripts and pipes.",
    url: "https://github.com/findyourexit/zonetimeline-tui",
    language: "Rust",
    framework: "ratatui",
    runtime: "Native (CLI)",
    status: "Active",
    capacity: "Maintainer",
    highlights: [
      "Rich interactive TUI plus a plain-text mode for scripts & pipes",
      "Ships as a single binary",
      "~89% test coverage",
    ],
    stars: 2,
    license: "MIT",
    updated: "2026-04-07",
    featured: true,
    tags: ["TUI", "Time Zones", "Productivity"],
  },
  {
    title: "spm4Kmp",
    description:
      "A Gradle plugin to use Apple Swift packages and bridge Swift sources directly inside a Kotlin Multiplatform project.",
    details:
      "Brings the Swift Package Manager ecosystem to KMP, letting you consume native Apple dependencies and expose Swift sources to shared Kotlin code. Backed by a dedicated docs site at spmforkmp.eu.",
    url: "https://github.com/frankois944/spm4Kmp",
    language: "Kotlin",
    framework: "Kotlin Multiplatform",
    runtime: "JVM / Native (Apple)",
    status: "Active",
    capacity: "Contributor",
    highlights: [
      "Brings the Swift Package Manager ecosystem to KMP",
      "Backed by a dedicated docs site at spmforkmp.eu",
    ],
    stars: 389,
    license: "MIT",
    updated: "2026-05-25",
    homepage: "https://spmforkmp.eu/",
    tags: ["KMP", "Gradle Plugin", "Swift Interop"],
  },
  {
    title: "figgit",
    description:
      "A Figma plugin for exporting design tokens directly to GitHub, keeping design and code in sync.",
    details:
      "Pushes design tokens straight from Figma into a GitHub repository, closing the loop between design decisions and the codebase that consumes them.",
    url: "https://github.com/findyourexit/figgit",
    language: "TypeScript",
    framework: "Figma Plugin API",
    runtime: "Browser / Node.js",
    status: "Active",
    capacity: "Maintainer",
    highlights: [
      "Exports design tokens straight from Figma to a GitHub repo",
      "Closes the loop between design and code",
    ],
    stars: 5,
    license: "MIT",
    updated: "2025-12-12",
    tags: ["Figma", "Design Tokens", "GitHub"],
  },
  {
    title: "star-trader",
    description:
      "A Rust remake of the classic 1974 BASIC game 'Star Trader' by Dave Kaufman, wrapped in a modern terminal UI.",
    details:
      "Faithfully retains the original mechanics and feel while adding modern niceties — customisable keybindings plus save & load — all rendered with ratatui.",
    url: "https://github.com/findyourexit/star-trader",
    language: "Rust",
    framework: "ratatui",
    runtime: "Native (CLI)",
    status: "Active",
    capacity: "Maintainer",
    highlights: [
      "Faithful remake of a 1974 BASIC original",
      "Customisable keybindings, plus save & load",
    ],
    stars: 1,
    updated: "2026-01-03",
    tags: ["TUI", "Game", "Retro", "Simulation"],
  },
  {
    title: "module-graph",
    description:
      "A Gradle plugin for visualising your project's module structure, powered by Mermaid.js.",
    details:
      "Turns tangled multi-module Gradle builds into readable Mermaid diagrams you can drop straight into your docs. Published on the Gradle Plugin Portal.",
    url: "https://github.com/iurysza/module-graph",
    language: "Kotlin",
    framework: "Gradle",
    runtime: "JVM",
    status: "Active",
    capacity: "Contributor",
    highlights: [
      "Turns tangled module graphs into readable Mermaid diagrams",
      "Published on the Gradle Plugin Portal",
    ],
    stars: 416,
    license: "MIT",
    updated: "2025-10-28",
    homepage: "https://plugins.gradle.org/plugin/dev.iurysouza.modulegraph",
    tags: ["Gradle Plugin", "Visualisation", "Mermaid.js"],
  },
];
