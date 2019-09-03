---
layout: post
title:  "Gitflow Introduction"
date:   2017-09-22
author: Jerome Bridge
excerpt: "GitFlow is a branching model for the Git version control system."
tag:
- gitflow
- sdlc
---
<iframe width="854" height="480" src="https://www.youtube.com/embed/47uih9Tp6H8" frameborder="0" gesture="media" allowfullscreen></iframe>

# What is Gitflow?
<a href="http://nvie.com/posts/a-successful-git-branching-model/">GitFlow</a> is a branching model for the Git version control system created by
<a href="http://nvie.com/about/">Vincent Driessen</a> in 2010. The Gitflow branching model is at the heart of the SDLC used by LifeOps.

One of the key benefits of using GitFlow is that it makes parallel development manageable, by isolating new development from finished work.

# Basics
The Gitflow process makes use of **Permanent Branches**, **Temporary Branches**, and **Tags** to achieve it's goals.

<figure>
  <img src="/assets/img/post/gitflow-introduction/gitflow-model.png" />
</figure>


# Permanent Branches
Let's start with discussing the permanent branches used in GitFlow. As the name implies, these branches will exist at all points of the software life cycle.

In the Gitflow model there are two permanent branches in the repository. The **master** branch and the **develop** branch.

The **master** branch is a permanent branch where source code reflects the "production ready" state of your software. In other
words this branch should have the source code of your latest release in it.

The **develop** branch is a permanent branch where source code reflects the latest completed development features intended for the
next release. Some might call this the “integration branch” because it is the destination for all newly completed features.

One of the key benefits of using GitFlow is that it makes parallel development manageable, by isolating new development from finished work.

# Temporary Branches
There are 3 types of temporary or "supporting branches" used in the GitFlow process: **Feature** branches, **Release** branches, and **Hotfix** branches.

**Feature Branch**. A Feature branch should be created for each new feature or non-emergency bug fix and should be started from the develop branch.
While the new feature is under development, all changes will be commited to the feature branch. Once the feature is completed, the feature
branch should be merged back into the develop branch and deleted.

**Release Branch**. Release branches (or staging branches) are created from the develop branch when the develop branch has obtained all
the desired features for that release. This provides a staging area for that release that can be used for minor bug fixes or other small
preparations needed before creating the final release. Using a temporary branch for this frees up the develop branch to continue taking new
features while the release is being tightened up. Once the release is complete, the changes made in that branch should be merged into the
develop and master branches.

**Hotfix Branch**. Finally, Hotfix branches are created when a bug is found in the production code. In this situation we cannot fix the bug
from the develop branch because that branch may have taken new features since the time we created the production release. For this reason,
we create a new Hotfix branch from the master branch. Once the Hotfix has been completed the code must be merged into both the develop and master branches.

# Tags
Tags are used whenever a new release is created and merged into the master branch. The source code for each release is always available by
its corresponding tag.

# Conclusion

<figure>
  <img src="/assets/img/post/gitflow-introduction/meme-i-know-gitflow.jpg" />
</figure>

I hope this gave you a basic understanding the Gitflow process and some of the key benefits to using it in your software development life cycle.
At LifeOps, we use Gitflow to deliver stable software without sacrificing speed of new development. If you're interested in learning more about
Gitflow, I've included links to the original Gitflow blog entries by Vincent Driessen.
