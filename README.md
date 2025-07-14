# nim-cli

`nim` is a lightweight, fast, and intuitive Git CLI wrapper that simplifies common Git commands with short and memorable aliases. Designed to speed up your workflow, `nim` condenses multiple Git commands into single-line shortcuts, making Git operations more accessible and efficient for developers of all levels.

---

## Features

- Short, easy-to-remember commands for common Git tasks
- Combine commands like add and commit into one (`nim a -c "msg"`)
- Supports most Git operations including clone, push, pull, branch, reset, stash, rebase, tags, and more
- Advanced commands with verbose mode and config management
- Cross-platform Node.js implementation, installable globally via npm

---

## Installation

Make sure you have [Node.js](https://nodejs.org/) and npm installed.

### Install globally via npm:

```bash
npm install -g nim-cli
```

## Or, install locally from source:

```bash
git clone <repo-url>
cd nim-cli
npm install
npm install -g .
```

## Usage

## Run nim commands anywhere in your terminal:

| Nim Command                    | Git Equivalent                       |
| ------------------------------ | ------------------------------------ |
| `nim a [file]`                 | `git add [file]`                     |
| `nim a -c "msg"`               | `git add . && git commit -m "msg"`   |
| `nim c -m "msg"`               | `git commit -m "msg"`                |
| `nim cl <repo>`                | `git clone <repo>`                   |
| `nim s`                        | `git status`                         |
| `nim p`                        | `git push`                           |
| `nim pl`                       | `git pull`                           |
| `nim o add <url>`              | `git remote add origin <url>`        |
| `nim o push`                   | `git push -u origin HEAD`            |
| `nim o pull`                   | `git pull origin HEAD`               |
| `nim b`                        | `git branch`                         |
| `nim cb <branch>`              | `git checkout -b <branch>`           |
| `nim co <branch>`              | `git checkout <branch>`              |
| `nim l`                        | `git log --oneline --graph --all`    |
| `nim h`                        | `git rev-parse HEAD`                 |
| `nim r soft HEAD~1`            | `git reset --soft HEAD~1`            |
| `nim r mixed HEAD~1`           | `git reset --mixed HEAD~1`           |
| `nim r hard HEAD~1`            | `git reset --hard HEAD~1`            |
| `nim rs`                       | `git restore .`                      |
| `nim rv <commit>`              | `git revert <commit>`                |
| `nim st`                       | `git stash`                          |
| `nim st pop`                   | `git stash pop`                      |
| `nim rb`                       | `git rebase`                         |
| `nim rb abort`                 | `git rebase --abort`                 |
| `nim diff`                     | `git diff`                           |
| `nim verbose <cmd>`            | Run any git command with `--verbose` |
| `nim tag`                      | `git tag`                            |
| `nim tag add v1.0`             | `git tag v1.0`                       |
| `nim tag push`                 | `git push --tags`                    |
| `nim rm <file>`                | `git rm <file>`                      |
| `nim mv <src> <dst>`           | `git mv <src> <dst>`                 |
| `nim init`                     | `git init`                           |
| `nim config`                   | `git config --list`                  |
| `nim config set <key> <value>` | `git config <key> <value>`           |
| `nim clean`                    | `git clean -fd`                      |
| `nim merge <branch>`           | `git merge <branch>`                 |
| `nim fetch`                    | `git fetch`                          |
| `nim show`                     | `git show`                           |
| `nim blame <file>`             | `git blame <file>`                   |

## Development

To contribute or modify nim:

```bash
git clone git@github.com:Zaynmiraj/nim-cli
cd nim-cli
npm install
node bin/nim.js s
node bin/nim.js a -c "initial commit"
npm install -g .
```

## License

MIT License ©ZaYn Miraj
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
