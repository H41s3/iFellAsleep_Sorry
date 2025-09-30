## Universal Commands Cheat Sheet (Gojo-sensei edition)

Limitless clarity, Infinity-level protection from chaos. A compact playbook you can paste into your notes, organized by lifecycle so you always know which technique to use.

### 0) One‑time Setup (unlock your cursed tools)

- Install Git and Node (LTS). Sign in to GitHub. Basic cursed energy control.
- Set your Git identity:
```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

### 1) Initiate a New Project (create your domain)

- Make a folder and initialize Git (lay the barrier):
```bash
mkdir my-app && cd my-app
git init
```

- Create a project (pick your technique):
```bash
# Vite (React + TS example)
npm create vite@latest . -- --template react-ts --yes

# or plain Node
npm init -y
```

- Install dependencies and make the first build/run work (prove you’re alive):
```bash
npm install
npm run dev   # if applicable
```

- First commit and connect to GitHub (announce your presence):
```bash
git add .
git commit -m "chore: bootstrap project"
git branch -M main
git remote add origin https://github.com/<you>/<repo>.git
git push -u origin main
```

### 2) Start Working on an Existing Project (join an ongoing mission)

```bash
git clone https://github.com/<you>/<repo>.git
cd <repo>
npm ci           # or: npm install
npm run dev      # start local dev server
```

### 3) Daily Development Flow (your standard combo)

```bash
git pull                      # get latest
git switch -c feature/x       # optional: make a branch
# ...edit files...
git add .
git commit -m "feat: do the thing (succinct, helpful)"
git push -u origin feature/x  # or push to main if that’s your policy
```

Status and diff (know your battlefield):
```bash
git status
git diff           # what changed but not staged
git diff --staged  # what will be committed
```

Undo changes safely (rewind time without time travel):
```bash
git restore <file>           # throw away local changes
git restore --staged <file>  # unstage
git revert <commit>          # undo via a new commit (history-friendly)
git stash push -m "WIP" && git stash apply  # shelf and resume later
```

### 4) Assets & Public Files (things civilians can see)

```bash
mkdir -p public
# put images, favicon, robots.txt, etc. here
```
When: You need `/something.jpg` available at a stable URL. Why: Build tools and CDNs serve this folder as-is. No sorcery required.

### 5) Social Media Preview (Open Graph + Twitter) — make your link pretty

Add to your HTML head:
```html
<meta property="og:type" content="website" />
<meta property="og:title" content="Page Title" />
<meta property="og:description" content="Short helpful sentence" />
<meta property="og:image" content="/social-preview.jpg" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Page Title" />
<meta name="twitter:description" content="Short helpful sentence" />
<meta name="twitter:image" content="/social-preview.jpg" />
```
Use a 1200×630 image, JPG/PNG, ideally <2MB. Put it in `public/`.
If platforms cache the old image, use their validators to refresh. It’s basically “exorcise the cache”.

### 6) Fonts (consistent across devices) — style with Infinity

Prefer hosted web fonts with fallbacks:
```css
body { font-family: "YourWebFont", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; }
```
Why: System fonts vary across devices; web fonts keep your style untouchable.

### 7) Build & Preview Locally (trust, then verify)

```bash
npm run build
npm run preview   # or serve the build output with a static server
```

### 8) Deploys (Netlify / Vercel / GH Pages) — Domain Expansion: Production

- Auto‑deploy CI flow (recommended):
  1) Connect repo to your platform
  2) Configure build command (e.g., `npm run build`) and publish directory (`dist`, `build`, etc.)
  3) Push to `main` → platform builds → deploys

- Manual sanity checklist:
```bash
git remote -v   # confirm you’re pushing to the right place
git push origin main
```

### 9) Troubleshooting (Hollow Purple for bugs)

- Dependency issues (cleanse the miasma):
```bash
rm -rf node_modules package-lock.json && npm ci
```

- Dev server port already in use (change 5173 if needed):
```bash
lsof -i :5173 | cat
kill -9 <PID>
```

- Environment variables (keep secrets secret):
```bash
# .env / .env.local – loaded by most frameworks
API_KEY=shh-no
```

### 10) Tiny Reference Table (command → when to use)

- git add . — stage everything you changed (prep your technique)
- git commit -m "…" — snapshot with a clear message (leave instructions for your squad)
- git push origin <branch> — publish your commits; trigger CI/CD
- git pull — sync before starting work or pushing
- git switch -c <branch> — start a new feature/bugfix in isolation
- npm ci / npm install — install deps (ci for clean, install for casual)
- npm run dev/build/preview — develop, build, verify

Short, sharp, and reusable across almost any project. Paste it in your notes and build with confidence. If anything breaks, breathe — you’ve got Infinity on your side.


