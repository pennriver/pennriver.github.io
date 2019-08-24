---
layout: post
title: "LifeOps: Adding New Features"
date: 2017-09-27
author: Jerome Bridge
excerpt: "LifeOps uses the Gitflow branching model, Github, and the LifeOps bot to deliver new features to our clients."
tags: [sdlc, gitflow, lifeops]
---
<iframe width="854" height="480" src="https://www.youtube.com/embed/GhAi9eNImak" frameborder="0" gesture="media" allowfullscreen></iframe>

I want to talk about the process we use at LifeOps for adding new features to our software.

For the sake of this article I am assuming the feature has been adequately defined and the developer is ready to prototype some code
for the new feature or bug fix. I will discuss the steps a developer takes to make his changes, deliver those changes to the user,
and pull his changes into the main source code once the feature is complete.

<figure>
  <img src="/assets/img/post/lifeops-new-feature/meme-new-feature.jpg" />
</figure>

At LifeOps <img style="display: inline-block;" src="/assets/img/favicon/favicon.png" /> we rely heavily on the **Gitflow** branching
model to manage changes in our version control system. If you aren't familiar with Gitflow, you can check out my
<a href="/gitflow-introduction/">previous post</a> where I go over the basics of the Gitflow model.


# LifeOps Process

## Create A Feature Branch
The first step a developer will take when adding a new feature is to create a new feature branch from the develop branch of the repository.
At LifeOps, we use Github to host our Git repository. The Github interface makes it very easy to create new branches.

The developer will take the following steps to create a new feature branch:
1. Navigate to the repository hosted on Github.
2. Click on the "branch" dropdown to see all the existing branches.
3. Type the name of the new feature branch that will be added to the repository. The branch name should start with the word feature to indicate it is a feature branch. Hit enter.
    <figure>
      <img src="/assets/img/post/lifeops-new-feature/illustration-create-branch.png" />
    </figure>
4. The branch is created and we are navigated to the newly created branch.
5. If we navigate to the branches tab we can see our new branch listed there.
6. You will also notice the yellow dot on the line of our new branch. That indicates a build is in progress for that branch. Whenever a new branch is created or a new change is commited to a branch in our repository a build is started.
    <figure>
      <img src="/assets/img/post/lifeops-new-feature/illustration-branches-building.png" />
    </figure>
7. If we refresh the branches page after about 10 to 15 minutes we now see a green checkbox on our feature branch line. This indicates the build for that branch is complete and successful.

## Code
Now that we have created our feature branch, it's time to download the code and make our changes locally. Once we are finished our changes locally,
we will push them to the Github feature branch.

<figure>
  <img src="/assets/img/post/lifeops-new-feature/meme-programming.jpg" />
</figure>

1. Navigate to the Github repository page. Click on the "Clone or download button". Click the clipboard icon to copy the repository URL.
    <figure>
      <img src="/assets/img/post/lifeops-new-feature/illustration-clone-repo.png" />
    </figure>
2. Open a terminal window to the directory you want to download the code locally. Execute the git clone command with the URL you copied.
This will download a clone of the git repository to your local computer.
```
git clone https://github.com/jeromebridge/yet-another-admin-system.git
```
3. Once the repository is cloned you can use the Git Branch command to list all the branches in the repository. Switch to the feature
branch you created earlier using by using Git Checkout command.
```
git branch --all
git checkout feature-name-of-change
```
4. Make changes to the source code locally.
5. Run the Git Diff command to view all the changes you've made.
```
git diff
```
6. Run the Git Status command to view all the files you've changed.
```
git status
```
7. Use the Git Add, Commit, and Push commands to commit your changes to the feature branch.
```
git add --all; git commit -m "Description of my changes"; git push
```
8. Once my change has been pushed to the Github repository a build is automatically started.
Navigate to the branches tab on the Github page. You can see the status of the feature branch
is yellow indicating a build is in progress.

## Deliver
Now that the developer has made his changes and pushed them to the Github feature branch,
we want the user to review the changes. This is where the LifeOps bot comes into play.

The LifeOps bot will create and manage environments for any release or branch of the software.
In this case we want the bot to deploy our feature branch build to a new environment.

<figure>
  <img src="/assets/img/post/lifeops-new-feature/bot.png" style="height: 250px; width: 250px;" />
</figure>

1. Navigate to the Github page and select the branches tab. Notice the green check box beside our
feature branch. This indicates the build has completed successfully and can be deployed by the
LifeOps bot.
2. In order to communicate with the bot, we use a chat tool called Slack. Open a new chat
with the LifeOps Bot.
    <figure>
      <img src="/assets/img/post/lifeops-new-feature/illustration-slack.png" />
    </figure>
3. Start by asking the bot to list the existing environments.
```
ls
```
The bot responds with a list of environment along with links to each of those environments.
    <figure>
      <img src="/assets/img/post/lifeops-new-feature/illustration-ls.png" />
    </figure>
4. Next, ask the bot is what versions of the software are available to deploy.
```
cli versions
```
The bot responds with a table of releases, staged releases, hot fixes, features, and dev.
    <figure>
      <img src="/assets/img/post/lifeops-new-feature/illustration-versions.png" />
    </figure>
5. Next, tell the bot to create a new environment using the code from my feature branch.
```
cli create -v feature/name-of-change Acme2: Demo1
```
Notice the name of the environment is `Acme2: Demo1`. This means the name of the environment will
be `Demo1` for a client `Acme`. The URL for the new environment will correspond to this name.
The bot responds that he created our new environment, `Acme2: Demo1`. He also gives us a
link to the new environment.
    <figure>
      <img src="/assets/img/post/lifeops-new-feature/illustration-create.png" />
    </figure>
6. We can click on the link and log into the newly created environment with the changes
we have committed to the feature branch.


## Merge

At this point the user is satisfied with the changes and we are ready to merge them into
the main development branch, but before these changes can be merged our senior developers
need to review the code. We also need to provide our product manager with an opportunity to
accept this feature into the next release or hold off taking the feature until a later release.

<figure>
  <img src="/assets/img/post/lifeops-new-feature/meme-merge-into-master.jpg" />
</figure>

In order to facilitate this review process, we will use what is called a "Pull Request".
A pull request represents a request to merge the feature branch into the development branch
and can be accepted or rejected by our senior developers.

<figure>
  <img src="/assets/img/post/lifeops-new-feature/meme-live-dangerously.jpeg" />
</figure>

1. Navigate to the Github repository page and select the branches tab.
2. Click the "New Pull Request" button next to our feature branch.
    <figure>
      <img src="/assets/img/post/lifeops-new-feature/illustration-new-pr.png" />
    </figure>
This will start a new pull request for our feature branch. The first thing you see are all the
differences in our feature branch. When you scroll to the top you will see a place for the
title and description of the new pull request. Also, take note the green text, "Able to merge".
This indicates the branch does not have any merge conflicts and can be merged without manual intervention.
    <figure>
      <img src="/assets/img/post/lifeops-new-feature/illustration-new-pr2.png" />
    </figure>
3. Enter a description of the changes made in the feature branch.
4. Select one or more reviewers for this pull request.
5. Click the "Create pull request" button to create the pull request. A new "Pull Request" is
now created and can be reviewed by a senior developer.

After the pull request is submitted, our senior developer will review the pull request:

<figure>
  <img src="/assets/img/post/lifeops-new-feature/meme-please-accept.jpg" />
</figure>

1. Our senior developer comes to the Github repository where he will see there is a new Pull Request.
    <figure>
      <img src="/assets/img/post/lifeops-new-feature/illustration-senior-dev.png" />
    </figure>
2. She clicks on the Pull Request tab to see new Pull Request we created and assigned to her.
    <figure>
      <img src="/assets/img/post/lifeops-new-feature/meme-waiting-for-pull-request-to-be-approved.gif" />
    </figure>
3. Here she can review the changes and decide to comment back to the developer or click
the "Merge pull request" button to bring the changes into the main development branch.
    <figure>
      <img src="/assets/img/post/lifeops-new-feature/illustration-merge-pr.png" />
    </figure>
4. She clicks the "Merge Pull Request" button and pull the changes in. At this point she could
also delete the feature branch by clicking the "delete branch" button.
    <figure>
      <img src="/assets/img/post/lifeops-new-feature/meme-pull-request-approved.jpg" />
    </figure>
5. The changes are now merged into the main development branch and the Pull Request is marked as merged.
When he navigates to the branches tab of the repository, the develop branch has a yellow dot,
indicating a build is in progress.
    <figure>
      <img src="/assets/img/post/lifeops-new-feature/illustration-pr-merged.png" />
    </figure>
6. He refreshes the branches page in about 10 to 15 minutes, he can see the green check box by the develop
branch. The develop branch is now built with our new feature and can be deployed
with the LifeOps bot whenever we want.

# Conclusion:
The LifeOps development process involves 4 phases once the new feature or bug has been identified:

<figure>
  <img src="/assets/img/post/lifeops-new-feature/meme-say-gitflow.jpg" />
</figure>

1. The developer creates a new feature branch
2. The developer makes his changes locally and commits those changes to the feature branch
3. Using the LifeOps bot, the user reviews the feature and provides feedback to the developer
4. The developer submits a Pull Request to merge his changes into the main development branch.

The LifeOps development process offers several advantages:
1. By using feature branches, new work is isolated from completed work
2. The LifeOps bot provides an automated way to deliver any branch or release of the code to the user.
3. Pull requests provide a streamlined method to review the code of new features before integrating them into the main source branch
