import type { OssProject } from "../types/config";

/**
 * A curated collection of some open-source projects I maintain or contribute to.
 *
 * Hand-curated — every field other than `title`, `description` and `url` is optional. Supply only the context that's
 * relevant to each project.
 */
export const ossProjects: OssProject[] = [
  {
    title: "Kotlin",
    description:
      "The official Kotlin language and tooling repository, maintained by JetBrains and the Kotlin community.",
    details:
      "Most recently, I contributed a Kotlin Gradle plugin fix for configuration-cache compatibility: wiring commonized C interop outputs without accessing Task.project during execution. Merged as PR #7382.",
    url: "https://github.com/JetBrains/kotlin",
    language: "Kotlin",
    capacity: "Contributor",
    highlights: ["Merged Kotlin Gradle plugin configuration-cache fix", "Improves native C interop builds with Isolated Projects"],
    featured: true,
    tags: ["Kotlin", "Gradle", "Kotlin/Native"],
  },
  {
    title: "Haze",
    description:
      "A Compose Multiplatform library for blur effects and glass-like UI treatments.",
    details:
      "Restored Apple Silicon macOS target support, including shared Apple source-set wiring, the macOS sample and CI coverage. Merged as PR #1220.",
    url: "https://github.com/chrisbanes/haze",
    language: "Kotlin",
    framework: "Compose Multiplatform",
    capacity: "Contributor",
    highlights: ["Restored macosArm64 target support", "Updated the macOS sample and CI coverage"],
    featured: true,
    tags: ["Compose Multiplatform", "macOS", "UI"],
  },
  {
    title: "excise",
    description:
      "A surgical terminal storage navigator for understanding disk usage and removing exactly the files and folders you choose.",
    details:
      "Combines an interactive storage map with careful space accounting and a deliberate review before permanent deletion. Supports scoped scanning, background operations, and readable table or JSON reports. An independent fork and spiritual successor to Diskonaut.",
    url: "https://github.com/findyourexit/excise",
    language: "Rust",
    runtime: "Native (CLI)",
    status: "Active",
    capacity: "Maintainer",
    featured: true,
    highlights: [
      "Interactive storage map with allocated and apparent size accounting",
      "Reviewed permanent deletion with live file checks — no trash or undo",
      "Interactive terminal, table and JSON output modes",
    ],
    homepage: "https://tomlarcher.com/excise/",
    tags: ["TUI", "Storage", "CLI"],
  },
  {
    title: "intellij-git-arborist",
    description:
      "An IntelliJ Platform plugin that makes Git worktrees first-class inside JetBrains IDEs — create, open, and manage them from a dedicated tool window, the Git menu, and the Project View.",
    details:
      "I wanted to move between active pull requests and experiments without repeatedly stashing changes or leaving the IDE. The plugin carries run configurations, code style and local tooling into a new worktree before it opens, with Git operations running in the background.",
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
    title: "zonetimeline-tui",
    description:
      "A terminal tool for visually comparing time zones, built for distributed teams.",
    details:
      "Working with distributed teams means regularly finding reasonable overlap between places like Sydney and California. I wanted that overlap visualised in the terminal, rather than another browser tab or a time converter that only prints a number. Includes interactive and plain-text modes.",
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
      "Native Apple dependencies are an important part of real-world KMP projects. My contributions focus on Swift package integration and build edge cases, including simulator resource copying when Xcode supplies multiple architectures.",
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
    title: "carabiner",
    description:
      "A unified CLI for managing AI rules and configuration across AI coding tools.",
    details:
      "Author rules, commands, permissions, MCP server definitions, hooks and subagent profiles in one canonical source, then generate the files each coding tool expects. Existing configurations can be imported or converted between tool formats.",
    url: "https://github.com/findyourexit/carabiner",
    language: "Rust",
    runtime: "Native (CLI)",
    status: "Active",
    capacity: "Maintainer",
    highlights: [
      "One canonical source for configuration across AI coding tools",
      "Generate, import and convert tool-specific configuration",
    ],
    homepage: "http://tomlarcher.com/carabiner/",
    tags: ["AI", "Developer Tooling", "CLI"],
  },
  {
    title: "figgit",
    description:
      "A Figma plugin for exporting design tokens directly to GitHub, keeping design and code in sync.",
    details:
      "I wanted to remove the manual handoff between exporting design tokens and committing them to a codebase. figgit lets designers push tokens from Figma directly into a GitHub repository, keeping design decisions closer to the code that consumes them.",
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
      "Readable dependency diagrams make large Gradle projects easier to understand. My contribution in PR #53 updated Kotlin and Gradle, cleared deprecations and improved documentation while investigating a Compose compiler configuration issue in a KMP project.",
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
  {
    title: "open-arbitrage",
    description:
      "A deterministic trading and arbitrage game engine with a terminal interface and HTTP API.",
    details:
      "Buy goods where they are cheap, travel between city markets and sell at a profit while managing a compounding loan. A seedable engine drives per-city prices, trading costs and events, with reproducible save/load and separate CLI and FastAPI frontends.",
    url: "https://github.com/findyourexit/open-arbitrage",
    language: "Python",
    framework: "Typer / Rich / FastAPI",
    status: "Active",
    capacity: "Maintainer",
    highlights: [
      "Per-city markets with trading costs and random events",
      "Seedable simulation with deterministic save/load",
      "Interactive CLI and multi-session HTTP API",
    ],
    tags: ["Game", "Simulation", "CLI"],
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
    status: "Paused",
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
    title: "Shopify Multipass for .NET",
    description:
      "A C# library for generating Shopify Multipass single sign-on tokens, allowing an existing identity system to sign customers into a Shopify Plus storefront.",
    details:
      "Packaged the Multipass token-generation workflow into a reusable .NET library so applications can generate customer login URLs without implementing the protocol themselves. Published on NuGet as Shopify.Multipass.",
    url: "https://github.com/findyourexit/shopify-multipass-dotnet",
    language: "C#",
    framework: ".NET",
    status: "Paused",
    capacity: "Maintainer",
    homepage: "https://www.nuget.org/packages/Shopify.Multipass/",
    tags: ["Shopify", "Single Sign-On", "NuGet"],
  },
];
