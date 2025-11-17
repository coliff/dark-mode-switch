# Agents

<!-- https://agents.md -->

## GitHub Actions Workflows

- All GitHub Actions should be pinned versions (SHA-1) to avoid breaking changes.
- If using `actions/checkout`, it should have `persist-credentials: false` set.
- Always use the latest available versions of GitHub Actions.
- GitHub Actions filenames should be all lowercase, with dashes separating words.
- All GitHub Actions workflows should always be formatted with Prettier.
