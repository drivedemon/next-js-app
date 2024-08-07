# Primecare Member App

![Alt Text](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDc0NHZ4bGd6eHl2NTNiazBtZzZzajFmaDU4eGg0dWhhbHU1a2RzaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/52sL8zkCHSLPzF9lXH/giphy.gif)

## Framework & Tools used

- Next js 14
- Tailwind 3
- Axios
- Next auth
- Lucide Icon / Hero icon

## Requirement

- Node v18.17++

## Component plugin

- ShadCN

Auto generate base component

Check out document: [ShadCN document](https://ui.shadcn.com/docs)

### command to use
```
npx shadcn-ui@latest add button // (Generate button component)
```

### codeStyle:
```
File name: Camel case
Export component name: Camel case

Note: Remind when you generate component please follow format and code style
```

## Store

- Zustand

Check out document: [zustand document](https://github.com/pmndrs/zustand)

## Formatter & Linter

- Biome js

Apply code style on `Merge request` checked before merged.

fix format code command
```
npm run lint-fix && npm run format-fix
```

`Note: Check out and import Code format apply:` [codeStyle.xml](https://trello.com/c/hvIHYFXj/46-phpstorm)

Check out document: [formatter document](https://biomejs.dev/)

## Pull Request flow

- require `rebase history commit to 1 commit` before send to review
- require fix `style / format / linter` of code before send to review
- require `updated branch` before send to review
- require `resolve conflict` before send to review
- require capture screenshot affect page (all responsive `labtop / ipad / mobile`)

## Gitflow

All branch description

- `master` base of source code (don't push everything to this branch)
- `develop` base of development source code (merge with merge request for every feature)
- `hotifx/[yyyy-mm-dd-detail]` merge directly into `master` and `develop` when have something urgent fix
- `release/v*` base of feature release source code for QA
- `feature/[detail]` development branch for dev


- [Gitflow document](https://help.gitkraken.com/gitkraken-client/git-flow/)

## Getting Started

First, install project
```
npm ci
```

Copy `.env.example` to `.env` then fill key and the url

generate secret link: https://generate-secret.vercel.app/32

then run the development server:
```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
