## Project Commands Cheat Sheet (because Future-You deserves nice things)

A quick, no-BS list of the commands we used in this project, with what they do, when to use them, and why they saved your day.

### Git: Save, Explain, Yeet to GitHub

- Commit staged changes (a.k.a. “save point with message”):
```bash
git commit -m "Your helpful message here"
```
When: After you `git add` and you want a snapshot with a meaningful message. Why: So Future-You knows what Past-You did and why.

- Stage changes (tell Git what to include in the next commit):
```bash
git add .
```
When: Before committing, to include all modified/new files. Why: Git doesn’t read minds (yet).

- Push your commits to GitHub (send it to the cloud gods):
```bash
git push origin main
```
When: After committing, to update the `main` branch on GitHub. Why: So Netlify (and other humans) can see your latest brilliance.

- Check which remote repo you’re talking to (trust but verify):
```bash
git remote -v
```
When: If you’re not 100% sure which GitHub repo your pushes are going to. Why: Prevents “why is nothing updating?” meltdowns.

Optional but handy:

- See what’s changed (peek before you commit):
```bash
git status
```
When: Frequently. Why: It tells you what’s staged, what’s not, and what Git is ignoring.

### Files & Folders: Put things where they belong

- Create the `public` folder (like a front door for static files):
```bash
mkdir -p public
```
When: When you need a place for static assets (e.g., social preview images). Why: Build tools (like Vite/Netlify) serve files from here as-is.

### Social Media Preview: Make links look pretty

We wired your `index.html` to use a local image for Open Graph and Twitter cards:
```html
<meta property="og:image" content="/social-preview.jpg" />
<meta name="twitter:image" content="/social-preview.jpg" />
```
When: Always, if you want a preview image on Facebook, Twitter, WhatsApp, Discord, etc. Why: Because plain links are sad.

What you do: Drop `social-preview.jpg` (1200x630) into the `public/` folder. That’s it.

### Fonts: Make it cute, consistently

We switched to reliable web fonts and proper fallbacks in `index.html` and `App.tsx`.
Why: System fonts like Comic Sans MS don’t exist on many phones (tragic, I know). Web fonts fix inconsistent mobile rendering.

### Netlify: “Did it deploy yet?”

If your site is connected to GitHub with auto-deploy, pushing to `main` triggers a new build automatically.

Checklist (no terminal needed):
- Push to `main` → Netlify builds → Deploys → You refresh the site → Bask in glory.
- If not set up, in Netlify: New site from Git → Pick repo → Build command: `npm run build` → Publish directory: `dist`.

### Common Mini-Workflows (a.k.a. muscle memory)

1) Change files → stage → commit → push
```bash
git add .
git commit -m "Explain what you changed like a responsible adult"
git push origin main
```

2) Add or update social preview image
```bash
mkdir -p public
# copy your 1200x630 image into public as social-preview.jpg
# (no command shown because you’ll likely drag-and-drop)
```

3) Sanity check your remote (when pushes don’t show up)
```bash
git remote -v
```

That’s it. Short, sharp, and you won’t hate yourself later.


