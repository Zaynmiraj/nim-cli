#!/usr/bin/env node
const { execSync } = require("child_process");

const args = process.argv.slice(2);
const cmd = args[0];
const run = (command) => {
  try {
    execSync(command, { stdio: "inherit" });
  } catch (e) {
    console.error(`❌ Error: ${e.message}`);
  }
};

switch (cmd) {
  case "a":
    if (args[1] === "-c") {
      const msg = args[2];
      run("git add .");
      run(`git commit -m "${msg}"`);
    } else {
      const file = args[1] || ".";
      run(`git add ${file}`);
    }
    break;

  case "c":
    if (args[1] === "-m") run(`git commit -m "${args[2]}"`);
    break;

  case "cl":
    run(`git clone ${args[1]}`);
    break;

  case "s":
    run("git status");
    break;

  case "p":
    run("git push");
    break;

  case "pl":
    run("git pull");
    break;

  case "o":
    if (args[1] === "add") run(`git remote add origin ${args[2]}`);
    else if (args[1] === "push") run("git push -u origin HEAD");
    else if (args[1] === "pull") run("git pull origin HEAD");
    break;

  case "b":
    run("git branch");
    break;

  case "cb":
    run(`git checkout -b ${args[1]}`);
    break;

  case "co":
    run(`git checkout ${args[1]}`);
    break;

  case "l":
    run("git log --oneline --graph --all");
    break;

  case "h":
    run("git rev-parse HEAD");
    break;

  case "r":
    const resetType = args[1]; // soft | mixed | hard
    const target = args[2] || "HEAD~1";
    run(`git reset --${resetType} ${target}`);
    break;

  case "rs":
    run("git restore .");
    break;

  case "rv":
    run(`git revert ${args[1]}`);
    break;

  case "st":
    if (args[1] === "pop") run("git stash pop");
    else run("git stash");
    break;

  case "rb":
    if (args[1] === "abort") run("git rebase --abort");
    else run("git rebase");
    break;

  case "diff":
    run("git diff");
    break;

  case "verbose":
    if (!args[1]) {
      console.log("❗ Usage: nim verbose <git-command>");
    } else {
      run(`git ${args.slice(1).join(" ")} --verbose`);
    }
    break;

  case "tag":
    if (args[1] === "add") run(`git tag ${args[2]}`);
    else if (args[1] === "push") run("git push --tags");
    else run("git tag");
    break;

  case "rm":
    run(`git rm ${args[1]}`);
    break;

  case "mv":
    run(`git mv ${args[1]} ${args[2]}`);
    break;

  case "init":
    run("git init");
    break;

  case "config":
    if (!args[1]) run("git config --list");
    else if (args[1] === "set" && args[2] && args[3]) {
      run(`git config ${args[2]} "${args.slice(4).join(" ")}"`);
    }
    break;

  case "clean":
    run("git clean -fd");
    break;

  case "merge":
    run(`git merge ${args[1]}`);
    break;

  case "fetch":
    run("git fetch");
    break;

  case "show":
    run("git show");
    break;

  case "blame":
    run(`git blame ${args[1]}`);
    break;

  default:
    console.log(`
Usage: nim <command> [options]

Basic:
  nim a [file]        git add [file]
  nim a -c "msg"      git add . && git commit -m "msg"
  nim c -m "msg"      git commit -m "msg"
  nim cl <repo>       git clone <repo>
  nim s               git status
  nim p               git push
  nim pl              git pull

Remote:
  nim o add <url>     git remote add origin <url>
  nim o push          git push -u origin HEAD
  nim o pull          git pull origin HEAD

Branching:
  nim b               git branch
  nim cb <branch>     git checkout -b <branch>
  nim co <branch>     git checkout <branch>

History:
  nim l               git log --oneline --graph --all
  nim h               git rev-parse HEAD

Reset:
  nim r soft HEAD~1   git reset --soft HEAD~1
  nim rs              git restore .
  nim rv <commit>     git revert <commit>

Stash:
  nim st              git stash
  nim st pop          git stash pop

Other:
  nim rb              git rebase
  nim rb abort        git rebase --abort
  nim diff            git diff
  nim tag             git tag
  nim tag add v1.0    git tag v1.0
  nim tag push        git push --tags
  nim rm <file>       git rm <file>
  nim mv a b          git mv a b
  nim init            git init
  nim config          git config --list
  nim config set user.name "Name"
  nim clean           git clean -fd
  nim merge <branch>  git merge
  nim fetch           git fetch
  nim show            git show
  nim blame <file>    git blame <file>
  nim verbose ...     Run any git command with --verbose
`);
}
