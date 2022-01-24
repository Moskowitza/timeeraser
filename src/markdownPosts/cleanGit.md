---
title: Git Guide
slug: clean-git
---

# {title}

At our company we have dev, qa, and production branches deployed to separate environments. 
Deploys should occur after a gitbub pull request is approved and a new branch is merged.
New work should move through dev, to qa, and into our production branches.  There may be exceptions to this pattern, but this should be an exception.


When starting new work, make sure you're up to date with what's currently in the repo.
```
git checkout dev
git reset --hard origin/dev
```
When starting a new task work off a ticket branch that starts with a ticket number
Consider the name of the branch as a new feature, request, bug or another descriptor

```
git checkout -b 14999_request_PatientPageText
```

### Clean commit history
I find the easiest way to clean my commits is with an interactive rebase. 
`git log` will get a list of past commits.

```
git log
```

find the hash of the last commit you'd like to squash to.

```git rebase -i 1cfe17f9a```

git pick and squash, you'll now have a list of commits *after* that commit you picked along with instructions
if you're using vi you'll need to use the keyboard to interact with what's in the terminal screen. 
press the i key to interact with the window
the up-down arrow keys to move around
escape key to get out of interactive mode
`:wq` means save and quit and go to the next step in your rebase

```
pick e524ffb first commit
pick 5375461 spelling error
pick 547542b wip
pick 12b4e79 
```
from here I leave the first the commit and squash the rest

```
pick e524ffb first commit
s 5375461 spelling error
s 547542b wip
s 12b4e79 
```
Save and exit `escape key` and then `:wq`

Provide new commit messages in a similar fashion. comment out old ones with a `#`, keep one comment or edit it now.

The commit history is now collapsed to a single commit. 
Push this working branch to github. You can push AND  set an upstream at the same time.

`git push --set-upstream origin 14999_request_PatientPageText`

If the branch has already been pushed to github, you will need to over right the history on the remote using the `-f` flag.

`git push 14999_request_PatientPageText -f`

### Writing PR Descriptions

Github provides an easy way to add formatted descriptors to PRs. 
PRs should:

- A link to ticket 
- Description of what was done
- Developer comments on the approach, work that is not yet done, and what may be missing
- Any actions needed by other team members (eg: new npm packages, changes to a config, breaking changes, or other reasons the code may not work as it has been) 
- description and example api calls if applicable
- link to postman collection if applicable
- Screenshot(s) if applicable

Review your PR before sharing with the team, and letting them know it's ready for review.
If there is a merge conflict, resolve the conflict locally and push the changes back to github.


