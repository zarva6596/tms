# BigLeap Boilerplate

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Project Structure
The codebase is organized as follows:

```
├── components/     # Reusable Vue components
├── pages/         # Application pages and routes
├── public/        # Static files served at root path
├── assets/        # Uncompiled assets (styles, svgs, etc.)
├── plugins/       # Vue plugins and utilities
├── slices/        # Prismic slice components
├── stores/        # Pinia stores for state management
└── utils/         # Helper functions and utilities
```

## Setup

### Installing Bun
You can install Bun by running:

```bash
curl -fsSL https://bun.sh/install | bash
```

Then verify with:

```bash
bun --version
```

### Dependencies
Make sure to install dependencies:

```bash
bun install
```

## Development

### Local Server
Start the development server on http://localhost:3000:

```bash
bun run dev
```

### Slice Machine
To work with Slice Machine:

1. Start the Slice Machine server:
```bash
bun run slicemachine
```

2. Open the Slice Machine UI at http://localhost:9999
