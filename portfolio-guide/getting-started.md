# Getting Started And Getting Deployed

Here are some steps to get you started with Git and GitHub, and to get your first page deployed.

### Creating The Repository

In your browser:

- Log into GitHub or create an account.
- Create a repository called `[username].github.io` (with the bracketed area and the brackets themselves replaced by your username).

### Getting The Repository On Your Machine

In VS Code:

- Command/Ctrl Shift P and choose "git clone" in VS Code
- Log in if you're not already
- Choose the repo `[username].github.io` and where to put it.

### Getting Content Into The Repo

Still in VS Code:

- Create an `index.html` file.
- Type `!` to get the boilerplate HTML.
- Add some test content.
- Save the file. (You should turn on auto-save in the File menu if you don't already have it!)
- Go to the Source Control tab on the left.
- Add `index.html` to the staging area. You can do this by clicking the plus button next to the file name. You'll see the file go from the Changes section to the Staged Changes section.
- Type a commit message in the text box at the top of the Source Control tab.
- Click the three dots and choose "Commit and Push" to package up your changes and send them to GitHub.

### Deploying Your Repo

Back in your browser:

- Reload the repository page. You should see your `index.html` file.
- Click on the Settings tab.
- Look for the "Pages" section, currently a link on the left sidebar.
- Choose the `main` branch and the root folder, then click Save. This may already be done!
- Wait a few seconds and refresh the page. You should see "Your site is live at `https://[username].github.io/`".

### The General Workflow

Back in VS Code:

- Make a change to your `index.html` file. Recommended: create an `about.html` page with some sample text and add a link to it in your `index.html`.
- In the Source Control tab, stage the changes by pressing the plus button next to any changes you've made, so that you have files in the Staged Changes section only (none in the regular Changes section).
- Commit and push the changes. Recommended way to do this: add a commit message, then there's currently a drop-down next to the commit button with a push option.
- Refresh your browser to see the change. It will hit your repository before it hits the page itself--check the repository page to confirm you pushed (you should see your commit message displayed next to the files you changed) and, assuming it's updated there, give GitHub up to 5 minutes to re-deploy your page.
