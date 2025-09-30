## Universal Commands Cheat Sheet (because Future-You deserves nice things)

A quick, no-BS list of commands you’ll reuse across projects. What they do, when to use them, and why they save your sanity.

### Git Essentials: Save, branch, and ship

- Stage changes (tell Git what to include next):
```bash
git add .
```
When: Before committing. Why: Git doesn’t auto-guess what you meant.

- Commit staged changes (save point with message):
```bash
git commit -m "Describe the why, not just the what"
```
When: After staging. Why: So Future-You understands Past-You’s choices.

- Push to a remote branch (share with the world):
```bash
git push origin main   # or: git push -u origin my-feature
```
When: After committing. Why: CI/CD, teammates, and deployments depend on it.

- Pull latest changes (bring updates down):
```bash
git pull
```
When: Before you start work or before pushing. Why: Avoids avoidable conflicts.

- Create/switch branches (parallel universes for code):
```bash
git switch -c my-feature   # create + switch
git switch main            # switch existing
```
When: New feature/bugfix. Why: Keeps main clean and your work scoped.

- See what’s going on (your situational awareness):
```bash
git status
git log --oneline --graph --decorate --all
```
When: Often. Why: Know what’s staged, what changed, and where you are.

- Compare changes (before you commit or push):
```bash
git diff            # unstaged vs working tree
git diff --staged   # staged vs last commit
```

- Undo with style (because mistakes happen):
```bash
git restore --staged <file>   # unstage
git restore <file>            # discard local changes
git revert <commit>           # make a new commit that undoes that commit
git stash push -m "WIP"       # shelf messy changes
git stash apply               # bring them back
```

- Remotes (trust but verify):
```bash
git remote -v
```
When: If pushes aren’t going where you think. Why: Debugs “why isn’t it updating?”

### Node & Package Scripts (JavaScript projects)

- Install dependencies:
```bash
npm ci         # clean, reproducible (CI or fresh clones)
npm install    # normal install (local dev)
```

- Run project scripts (define in package.json):
```bash
npm run dev       # start dev server
npm run build     # build for production
npm run preview   # preview production build locally
```

### Static Assets and Public Files (framework-agnostic idea)

- Public folder is where files are served as-is. Typical names: `public/`, `static/`, or a CDN bucket.
```bash
mkdir -p public
```
When: You need images, robots.txt, favicon, or social preview assets available at a public URL.

### Social Media Previews (Open Graph + Twitter)

Add these to your HTML head (values are placeholders):
```html
<meta property="og:type" content="website" />
<meta property="og:title" content="Your Page Title" />
<meta property="og:description" content="One-liner that actually helps" />
<meta property="og:image" content="/social-preview.jpg" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Your Page Title" />
<meta name="twitter:description" content="Same helpful one-liner" />
<meta name="twitter:image" content="/social-preview.jpg" />
```
Tips:
- Image size: 1200×630 px. Format: JPG/PNG. Keep it under ~2MB.
- Host locally (e.g., `/public/social-preview.jpg`) or on a reliable CDN.
- Use platform debuggers to refresh cache after changes.
  - Facebook Sharing Debugger, Twitter Card Validator, etc.

### Fonts (consistent across devices)

- Prefer hosted web fonts (Google Fonts, Adobe, self-hosted) with fallbacks:
```css
body { font-family: "YourWebFont", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; }
```
Why: System-only fonts vary by device; web fonts keep the look consistent.

### Deploys (Netlify / Vercel / GitHub Pages — same vibes)

- CI auto-deploy flow (most common):
1) Push to your main branch → CI builds → platform deploys.
2) Configure once: build command (e.g., `npm run build`) and output dir (`dist`, `build`, etc.).

- Manual sanity checks locally:
```bash
npm run build
npm run preview   # or serve ./dist with any static server
```

### Troubleshooting Quickies

- Fix weird dependency issues:
```bash
rm -rf node_modules package-lock.json && npm ci
```

- “Something is already running on port 5173” (adjust port as needed):
```bash
lsof -i :5173 | cat   # macOS/Linux – list process using the port
kill -9 <PID>         # send it to the farm upstate
```

- Environment variables (don’t leak your secrets):
```bash
# .env, .env.local, etc. – loaded by most frameworks
API_KEY=shh-no
```

### Mini-Workflows (muscle memory)

1) Change files → stage → commit → push
```bash
git add .
git commit -m "Explain what changed and why"
git push origin main
```

2) Start a feature safely
```bash
git switch -c feature/cool-thing
# ...hack hack hack...
git add . && git commit -m "Implement cool thing"
git push -u origin feature/cool-thing
```

3) Add or update social preview
```bash
mkdir -p public
# copy your 1200x630 image to public as social-preview.jpg
```

Short, sharp, and reusable across almost any web project.


