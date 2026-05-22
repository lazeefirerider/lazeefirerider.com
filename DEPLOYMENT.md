# GitHub and Bluehost Setup

This site is a static website. The live version only needs these files uploaded to the web root on Bluehost:

- `index.html`
- the other `.html` pages
- `assets/`
- `projects/`

## 1. Put The Site On GitHub

Create a GitHub account if needed, then create a new empty repository on GitHub.

Recommended repository name:

```text
lazeefirerider.com
```

Do not tick options that add a README, license, or `.gitignore` on GitHub, because this folder already has files.

From this folder in PowerShell or Git Bash:

```powershell
git add .
git commit -m "Initial Lazee Fire Rider website"
git branch -M main
git remote add origin https://github.com/YOUR-GITHUB-NAME/lazeefirerider.com.git
git push -u origin main
```

Replace `YOUR-GITHUB-NAME` with your GitHub username.

## 2. Upload To Bluehost Manually

1. Log in to Bluehost.
2. Open `Hosting`.
3. Open `File Manager`.
4. Go to the domain document root, usually `public_html`.
5. Back up or rename the current old site files if needed.
6. Upload this website's files and folders.
7. Make sure `index.html` is in the root folder.
8. Visit `https://lazeefirerider.com` and refresh.

Important: keep the folder structure exactly the same. For example, `assets/css/styles.css` must stay inside `assets/css/`.

## 3. After Each Website Change

Local workflow:

```powershell
git add .
git commit -m "Describe the change"
git push
```

Bluehost workflow:

1. Upload the changed files again through File Manager, or use FTP later.
2. Refresh the website.
3. If the old page still appears, clear browser cache or Bluehost cache.

## Later Upgrade

The simplest long-term improvement is FTP or Git-based deployment so GitHub can become the main source of truth and Bluehost receives the updated site automatically or semi-automatically.
