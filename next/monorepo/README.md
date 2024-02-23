# Turborepo with Next.js

This is a boilerplate based on [Turborepo starter](https://github.com/vercel/turbo/tree/main/examples/basic) & [Turborepo Tailwind CSS starter](https://github.com/vercel/turbo/tree/main/examples/with-tailwind).
It also comes with lint staged, commitlint, semantic release and github action for releases.

## Using this example

Run the following command:

```sh
pnpm create next-app --example https://github.com/hyfer/boilerplates/tree/main/next/monorepo monorepo
```

## What's inside?

This boilerplate includes the following packages/apps:

### Apps and Packages

- `web`: a [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared throughout the monorepo
- `@repo/tailwind-config`: `tailwind` configuration shared throughout the monorepo
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This boilerplate has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Commitlint](https://commitlint.js.org/) for linting commits
- [Lint staged](https://github.com/lint-staged/lint-staged) lint staged files
- [Husky](https://typicode.github.io/husky/) for commit hooks
- [Semantic release](https://semantic-release.gitbook.io/semantic-release/) for releases

### Build

To build all apps and packages, run the following command:

```
cd monorepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd monorepo
pnpm dev
```
