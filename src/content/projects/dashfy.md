---
title: Dashfy
subtitle: Define dashboards as code. Connect APIs. Render real-time interfaces.
metaTitle: Dashfy — Dashboards for developers
metaDescription: Dashfy is an open-source framework for building dashboards from declarative configuration. Connect APIs, compose widgets, and render real-time interfaces.
pubDate: '2026-10-06'
repoUrl: https://github.com/dashfy/dashfy
mainLinks:
  'Website': https://dashfy.dev
  'Demo': https://demo.dashfy.dev
links:
  'Docs': https://dashfy.dev/docs
  'GitHub': https://github.com/dashfy/dashfy
---

**Dashfy** is an open-source framework for building dashboards using declarative configuration.

Instead of building a dashboard by hand in a UI, you define it as structured configuration. Dashfy connects to APIs and data sources, composes widgets, and renders a real-time interface. It is published as npm packages, including `@getdashfy/server`, `@getdashfy/ui`, `@getdashfy/themes`, `@getdashfy/utils`, and `@getdashfy/ext-*`.

<br>

> [!TIP]
> A live demo is available at [demo.dashfy.dev](https://demo.dashfy.dev).

## Features

### Compiled dashboards

Dashboards are generated from declarative configuration instead of being constructed by hand.

### Declarative configuration

Define dashboards as structured configuration files. TypeScript objects, JSON, and YAML are all supported. The [configuration docs](https://dashfy.dev/docs/configuration) cover the options.

### Real-time updates

The server and client talk over WebSockets and subscriptions, so a dashboard updates as the data changes.

### Extensions

Add widgets and data sources through extension packages, including GitHub, JSON and REST APIs, or a custom integration.

### Layout

Compose responsive dashboards for different screen sizes. Define more than one dashboard and rotate between them.

### Themes

Built-in themes, light and dark mode, and custom themes.

### Wake lock and shortcuts

A wake lock keeps a dashboard awake during continuous monitoring. Keyboard shortcuts cover the common actions.

### CLI

Scaffold a project, add and remove extensions, and audit a project's setup with `npx dashfy@latest`.

### Extension registry

Extensions resolve over HTTP from the hosted `@getdashfy` catalog. Custom, private, and GitHub-hosted registries work too.

### Framework templates

Minimal starters and full pre-configured demos are available for Vite, Next.js, Astro, React Router, and TanStack Start.

### MCP server and agent skill

A Model Context Protocol server lets an assistant search registries, read extension docs, and get the right install command. A project-aware agent skill works with Cursor, Claude Code, and other agents. A Cursor plugin bundles the skill, project rules, and the MCP server.

### TypeScript and React

The packages are typed. The UI is React, with composable components. The repository is a pnpm and Turborepo monorepo, licensed under AGPL-3.0.

## How it works

Dashfy loads a dashboard configuration, connects to APIs, and renders widgets. The [docs](https://dashfy.dev/docs) have the configuration reference.

### Server

The server loads the configuration, connects to APIs and data sources, manages updates, and exposes that data to clients over WebSockets.

### Client

The client connects to the server, receives updates, renders widgets and layouts, and keeps dashboard state.

### Extensions

Extensions supply widgets, data source integrations, and custom logic. A custom integration does not require a change to the core.

At runtime, Dashfy loads the configuration, the server connects to the data sources, the client connects to the server, the dashboard renders, and later updates are pushed.

## When to use

Dashfy fits dashboards that live in a codebase, talk to APIs, and stay easy to change.

- **Developer dashboards** for APIs, services, CI, and infrastructure, defined next to the code.
- **Internal tools** for metrics, operations, and system health.
- **API observability** for responses, service status, and external integrations.
- **DevOps monitoring** for deployments, metrics, and health across environments.
- **Real-time systems** that need live updates over WebSockets.
- **Wall displays** that stay fullscreen, rotate, and keep running.
- **Custom API dashboards** built with extensions for any system.

## Frequently Asked Questions {#faq}

#### What license is Dashfy under? {#license}

The runtime libraries (`@getdashfy/*`) are AGPL-3.0. The CLI (`dashfy`) is MIT.

#### How do I define a dashboard? {#configuration}

As a TypeScript object, JSON, or YAML. See the [configuration docs](https://dashfy.dev/docs/configuration).

#### How do I start a project? {#quick-start}

Run `npx dashfy@latest` to scaffold a project, add extensions, and audit the setup. Framework templates cover Vite, Next.js, Astro, React Router, and TanStack Start.

#### Where can I ask a question? {#community}

Join the [Discord](https://dashfy.dev/discord) or open an issue on [GitHub](https://github.com/dashfy/dashfy).
