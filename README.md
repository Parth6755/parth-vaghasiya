# My Portfolio

## ✏️ How to update it (every time you build something new)

Everything about you lives in **one file: `data.js`**.

1. Open `data.js`.
2. To add a project: copy one `{ ... }` block inside `projects`, paste it at the top of the list, and change the text.
3. Optional screenshot: put the image in an `assets` folder and set `image: "assets/my-project.png"`.
4. Save, then publish the change (see below). It is live in about one minute.

Your photo: put it at `assets/me.jpg` and set `photo: "assets/me.jpg"`.
Your resume: put it at `assets/resume.pdf` and set `resume: "assets/resume.pdf"`.

## 🚀 Free hosting: GitHub + Vercel (recommended)

You get a free site at `your-name.vercel.app`. It updates by itself every time you change a file on GitHub.

### One-time setup (about 10 minutes)
1. Make a free account at https://github.com.
2. Click **+ → New repository**, name it `portfolio`, choose **Public**, then click **Create**.
3. Click **"uploading an existing file"**, drag in **every file in this folder**, then click **Commit changes**.
4. Make a free account at https://vercel.com and choose **Continue with GitHub**.
5. Click **Add New → Project**, pick `portfolio`, then click **Deploy**. No settings are needed.
6. 🎉 Your site is live. Vercel shows the link.

### Updating later
- On github.com, open `data.js` and click the ✏️ pencil icon. Edit it, then click **Commit changes**.
- Vercel rebuilds automatically, and the site is updated in about 1 minute.

### Other free options
- **GitHub Pages**: in your repo go to Settings → Pages → Branch: `main` → Save. The site is at `username.github.io/portfolio`.
- **Netlify Drop**: drag this folder onto https://app.netlify.com/drop. It's fastest, but you have to re-drag the folder for every update.
