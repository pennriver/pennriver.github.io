---
layout: post
title:  "LifeOps: Agile"
image: /assets/img/draft.png
author: "Jerome Bridge"
excerpt: "How does LifeOps use Agile to reduce costs and deliver quality software?"
date: 2017-11-01
project: true
tags: [sdlc, automated testing, devops, lifeops, agile, waterfall]
---









## Script

### Introduction




### Outline

* Agile vs Waterfall
    * What is Waterfall?
    * What is Agile?
    * What are the trade-offs of Waterfall?
    * What are the trade-offs of Agile?
    * Agile is not mini-waterfalls

* LifeOps Agile Goals
    * Minimize Feedback Loops
    * Minimize Cost Of Change

* Minimizing Feedback Loops
    * Types Of Feedback Loops
        * Execution Feedback
            * Automated Unit Tests
            * Automated Integration Tests (LifeOps Test Cases)
        * Developer Feedback
            * Pull Requests, Code Reviews, and Paired Programming (Gitflow)
        * Delivery Feedback
            * Continuous Integration
            * Continuous Deployment (LifeOps Bot)
            * Reproduce Defects Locally (Export Test Cases + Docker)
            * Staged Upgrades (LifeOps Bot + Docker)
        * Customer Feedback
            * Regular Meetings With Stakeholders
            * Demo Videos
            * LifeOps Test Cases

* Minimizing Cost Of Change
    * Change drives up cost in Waterfall, Turn-over drives up cost in Agile
        * Skeptical Of Offshore
        * Skilled Developers
    * Isolate New Changes From Working Code (Gitflow)
    * Automated Unit and Integration Tests Reduce Defects
    * Plugin Architecture isolates changes?

* Conclusions

### Notes

https://blog.axosoft.com/feedback-loops-agile-development/

Feedback loops are a mixture of daily best practices, automation, and tools.


http://www.base36.com/2012/12/agile-waterfall-methodologies-a-side-by-side-comparison/

Much like construction and manufacturing workflows, waterfall methodology is a sequential
design process. This means that as each of the eight stages (conception, initiation,
analysis, design, construction, testing, implementation, and maintenance) are completed,
the developers move on to the next step.

As this process is sequential, once a step has been completed, developers can’t go back to
a previous step – not without scratching the whole project and starting from the beginning.
There’s no room for change or error, so a project outcome and an extensive plan must be
set in the beginning and then followed carefully.


----

* Cost Of Change
    * Minimize The Cost Of Change




## Script (First Version)

### Introduction

Agile vs Waterfall

<figure>
  <img src="/assets/img/post/lifeops-agile/agile-vs-waterfall.gif" />
</figure>

At the core:

Waterfall seeks to reduce change over time because the cost of change increases
exponentially the later it is discovered in the process.

<figure>
  <img src="/assets/img/post/lifeops-agile/cost-of-change-waterfall.gif" />
</figure>

Agile encourages change by shortening the feedback loop from requirements to
delivery.

<figure>
  <img src="/assets/img/post/lifeops-agile/agile.png" />
</figure>

In order to accomplish this the cost of change must be minimized.

<figure>
  <img src="/assets/img/post/lifeops-agile/cost-of-change-agile.gif" />
</figure>

How can this be accomplished?

Automated Testing.

Properly applied automated testing provides the foundation of Agile development.
Automated Testing allows us to close the feedback loop effectively and
reduces the cost of change. Without automated testing it is impossible
to realize the benefits of Agile development.

Where does automated testing fit into the Agile model? How does it
help reduce our cost of change and close the development feedback loop?

That's what I want to explore in this video.

### Functional Testing Overview
When we talk about automated testing, we are referring to the functional
testing of our software.

Functional Testing can be accomplished with four different approaches:
Unit Tests, Integration Tests, System Tests, and Acceptance Tests.

Check out my video about Automating Functional Testing where I discuss the
trade offs of each approach and some of the challenges you will face
when automating each approach.

### Waterfall Testing
In the waterfall model of development, testing is performed
after development is complete. In addition, testing primarily
consists of System Tests and Acceptance Tests in fully integrated
environments.

These types of tests are time consuming and expensive to repeat.
This has two implications:

1. The feedback loop from the time a feature is developed to the time a
feature is tested is very long.
2. Defects found in the test phase are difficult for the developer
to reproduce.

Because of this the cost of change goes up exponentially as the
complexity of the software grows. <<< doesn't necessarily say anything about complexity

### Agile Testing
In the agile model of development, automated testing is required.

That doesn't mean all testing is automated. It doesn't even mean
you won't do the same type of testing you would have done in a
waterfall model.

#### Unit Tests
At a minimum, Agile requires that developers automate Unit Tests
when developing new features and fixing bugs. This has several
benefits:

1. Developers can make changes with more confidence if they know
existing unit tests pass after they make changes.
2. Developers can quickly debug code as they write it. This is
a microcosm of the feedback loop that Agile strives to minimize.

Developing with Unit Tests also comes with one requirement:

1. Code must be designed and written in such a way that it can
be executed without external resources (such as a database).

#### Integration Tests




### Integration Tests: Better Feedback


### Outline

* Quick Functional Testing Overview (reference video)

* How do each of these types of testing fit into Agile?
* How do each of these types of testing help minimize the time
between development and feedback.
* How do each of these types of testing help us reduce defects?
* How do each of these type of testing help us minimize the cost
of change?


### Outline2

1. Introduction
2. Waterfall vs Agile
3. Why does the cost of change increase so much in waterfall?
4. Why does the cost of change stay constant in Agile?


### Conclusions
Projects that use Agile will have code that is under constant change.
Unit Tests are the first and most valuable tool to manage
the cost of that constant change. In addition, it shortens
the Developer's own feedback loop.


* Review the phases of an Agile sprint

* How does automated testing fit into each of these steps


Planning
Design
Develop
Test
Release
Feedback




----

http://reqtest.com/testing-blog/you-cant-work-agile-without-automated-testing/

http://www.agilemodeling.com/essays/costOfChange.htm

Cost of Defect vs Cost of Change



What is the cost of using automated testing?

What is the cost of not using automated testing?

What is the purpose of automated testing? To discover defects and ensure quality or something else?

We have all heard that the later a defect is discovered in the SDLC the more expensive it
is to fix. Is this still true with Agile?

Is the cost of fixing a defect what we really care about? or is it the cost of change that
we really care about?

If the cost of change is what we really care about, how does automation effect this cost?




Is it true that the cost of fixing a defect increase the later it is found?

Does automated testing play a different role within Agile vs Waterfall development?

What phases of the SDLC require automated testing? Analysis, Design, Implementation, Testing?

Who is responsible for automated testing? QA, Business Analysts, or Developers?






## Notes

Agile vs Waterfall

Cost of Defect vs Cost of Change

Waterfall seeks to reduce change while Agile encourages change throughout the process

   For this reaason:
      1. Agile relies on feedback
      2. Cost of Defect is much more relevant in Waterfall
      3. Cost of Change is much more relevant in Agile -- is only true for agile?




* Without automated testing, the work that testers and developers put into reproducing
an issue are lost forever and will likely be repeated by other developers and testers in
the future. You will pay multiple times over for the exact same work if you do not make
the results repeatable.

* Because automated testing is done through an automation tool, less time  is needed in
exploratory tests and more time is needed in maintaining test scripts while increasing
overall test coverage

* What about when one defect is fixed but causes one ore more defects. How is this cost
measured? Do we even know how often this happens?

* Code becomes fragile as it grows. Code become fragile as more and more code is re-used.
It can be impossible to know the side effects of changes as the system grows in complexity.

* Who's concern is testing? Is it the sole concern of the QA team? What role do business
analysts and developers play in testing? How much and what testing should be done
BEFORE QA even observes the software?

* Does automated testing play a role during the requirements and coding phase of the Agile SDLC?
How can you test something before you've designed or coded it? Isn't this backwards?


http://searchsoftwarequality.techtarget.com/feature/Software-defects-increase-cost-of-Agile-projects
* Many times requirements are discovered through the process of getting feedback. It is one
of the most valuable assets an Agile process provides.

* Agile embraces changes to the requirements of the software, but the cost of change is
a function of the complexity of the software. Early on in a project, the cost of change is low,
but later the cost goes up

### Previous Openning

There are costs associated with using automated testing and not using automated
testing. How do we determine what and how much automation is necessary for
a software project? How much does it cost me to not have automated testing?

### Comments On Cost Of Defect

From: https://stackoverflow.com/questions/4130051/software-development-costs-pyramid

This is a well-known result in empirical software engineering that has been replicated and verified over and over again in countless studies. Which is very rare in software engineering, unfortunately: most software engineering "results" are basically hearsay, anecdotes, guesses, opinions, wishful thinking or just plain lies. In fact, most software engineering probably doesn't deserve the "engineering" brand.

Unfortunately, despite being one of the most solid, most scientifically and statistically sound, most heavily researched, most widely verified, most often replicated results of software engineering, it is also wrong.

The problem is that all of those studies do not control their variables properly. If you want to measure the effect of a variable, you have to be very careful to change only that one variable and that the other variables don't change at all. Not "change a few variables", not "minimize changes to other variables". "Only one" and the others "not at all".

Or, in the brilliant Zed Shaw's words: if you want to measure shit, don't measure other shit.

In this particular case, they did not just measure in which phase (requirements, analysis, architecture, design, implementation, testing, maintenance) the bug was found, they also measured how long it stayed in the system. And it turns out that the phase is pretty much irrelevant, all that matters is the time. It's important that bugs be found fast, not in which phase.

This has some interesting ramifications: if it is important to find bugs fast, then why wait so long with the phase that is most likely to find bugs: testing? Why not put the testing at the beginning?

The problem with the "traditional" interpretation is that it leads to inefficient decisions. Because you assume you need to find all bugs during the requirements phase, you drag out the requirements phase unnecessarily long: you can't run requirements (or architectures, or designs), so finding a bug in something that you cannot even execute is freaking hard! Basically, while fixing bugs in the requirements phase is cheap, finding them is expensive.

If, however, you realize that it's not about finding the bugs in the earliest possible phase, but rather about finding the bugs at the earliest possible time, then you can make adjustments to your process, so that you move the phase in which finding bugs is cheapest (testing) to the point in time where fixing them is cheapest (the very beginning).

Note: I am well aware of the irony of ending a rant about not properly applying statistics with a completely unsubstantiated claim. Unfortunately, I lost the link where I read this. Glenn Vanderburg also mentioned this in his "Real Software Engineering" talk at the Lone Star Ruby Conference 2010, but AFAICR, he didn't cite any sources, either.

If anybody knows any sources, please let me know or edit my answer, or even just steal my answer. (If you can find a source, you deserve all the rep!)

### From Architecture Document

#### Balanced Software Development Process
##### Quick Agile Overview
User Story: A user story is a brief statement that identifies the user and her need.  Notice that the
user story identifies who the user is, what she needs, and why she needs it. User stories tend to be high level
and vague.

```
As a [role]
I want [feature]
So that [benefit]
```

Acceptance Criteria: Good <a href="http://martinfowler.com/bliki/GivenWhenThen.html">Acceptance Criteria</a>
will help get your Agile project from “It Works as Coded” to “It Works as Intended”. Acceptance Criteria are a
set of statements, each with a clear pass/fail result, that specify both functional and nonfunctional requirements.

```
Scenario 1: Title
Given [context]
 And [some more context]...
When  [event]
Then  [outcome]
 And [another outcome]...
```

##### Yaas Solution: Balanced / Holistic Process
1. Acceptance Criteria: Yaas Test Cases correspond to Acceptance Criteria and are used to
validate development is complete. (Definition of “Done”)
2. Communication: Yaas Test Cases are used to facilitate communication between the developer
and the business analyst in our process.
3. Factory Developers: We DO NOT subscribe to the current conventional wisdom that views
developers as being responsible only for providing a technical solution to a business design.
    1. More Overhead: Using the factory model of development usually involves many more inexpensive
    often times remote developers working on a project.  This factor adds a tremendous communication
    burden on the entire team and is only exacerbated if there are time differences between the developers.
    2. Counterproductive: Not only will the factory model suffer from large overhead, but it will
    eventually become counterproductive as the less capable factory developers require more and more attention
    from the capable people you do have on your team.
    3. More Costly: It is our view that if the entire cost of a project is considered, the factory model
    is drastically more expensive than a lighter, holistic model of development.
4. Holistic Developers: Holistic developers don’t just consider the specific feature being requested
by the business stakeholder when designing a solution to a problem, instead they consider the system as a whole.
    1. Ownership / Accountability: This model of development tends to encourage ownership of features
    within the team and encourages developers to be accountable for those features.
    2. Better Outcomes: This iterative feedback and improvisation produces results that meet expectations
    of stakeholders because they are involved earlier and more often in the outcome of the process.
    3. Paired Programming: Culture is as important to us as process and we think `paired programming` is an
    effective tool to share and expand knowledge within our team.  The strength of our team is our most
    effective asset and this is an essential tool we have to continuously improve that asset.

#### Automated Deployments And Upgrades
##### Problem
Most insurance software (new and old) does not treat deployments and upgrades as “first class citizens” of their development process.  This can be a very costly and ongoing expense for any company adopting insurance software.  Each release requires many hours of time from IT professionals to support the inevitable inconsistencies and deployment problems that arise in each environment.  In addition, this cost goes up as you discover the need to support more environments.

The upgrade path and release path are afterthoughts.  In addition most existing systems were not designed with the automation power of the cloud in mind so they assume manual or custom processes will be used to deploy new releases.

##### Traditional Solution 1: Manual
The manual approach to deployments requires an IT professional to perform the deployment and upgrade of every release to each environment.  This approach is the source of countless hours of troubleshooting by more IT professionals in diagnosing what inconsistencies were caused by the manual process in each environment.

Compounding the problem of inconsistent deployments and upgrades is that the IT professionals responsible for doing the deployments and upgrades are usually the least equipped to understand problems caused by not deploying to environments consistently.

##### Traditional Solution 2: Custom And Ad Hoc Scripts
The manual deployment and upgrade process is so bad and cumbersome that some companies will incorporate their own scripts cut down on the inconsistencies with deployments.  This is a step in the right direction, but it is really only a bandaid for the horrendous manual deployment process.  This approach has several drawbacks:
1. Scripts and code are not in sync causing inconsistencies between the two
2. Anything requiring a new environment still requires manual intervention from an IT professional
3. IT professionals writing the scripts are many times the least equipped to do so
4. Scripts many only cover a portion of the software required to run the application still requiring a manual process to install and setup

##### Yaas Solution: Docker + The Cloud
The Yaas software was designed from the ground up to use a cloud based architecture for deployments and upgrades.  This allows us to install our software and all supporting software as microservices in a container managed environment.  Even better we can treat our environment configuration the same way we treat source code which allows us to get consistent, repeatable deployments and upgrades.

Because deployments are automated and run in the cloud it opens up many more possibilities previously unavailable with manual and ad hoc deployment processes.  With our automated deployment in the cloud we are able to perform the following processes with no intervention from IT staff:
1. Create new environments
2. Upgrade release on existing environments
3. Stage an environment for a new release (before upgrading environment)
4. Perform mock conversion on scaled up environment
5. Clone environment (and mask data)


### References
http://searchsoftwarequality.techtarget.com/feature/Software-defects-increase-cost-of-Agile-projects
http://blog.celerity.com/the-true-cost-of-a-software-bug
http://www.agilemodeling.com/essays/costOfChange.htm
https://developers.slashdot.org/story/03/10/21/0141215/software-defects---do-late-bugs-really-cost-more
http://thklein.com/en_US/cost-of-defect/
https://stackoverflow.com/questions/4130051/software-development-costs-pyramid
https://stackoverflow.com/questions/74908/how-do-you-integrate-system-testing-into-an-agile-process
http://reqtest.com/testing-blog/you-cant-work-agile-without-automated-testing/
http://www.base36.com/2012/12/agile-waterfall-methodologies-a-side-by-side-comparison/
https://blog.axosoft.com/feedback-loops-agile-development/
https://www.castsoftware.com/blog/the-insurance-industry-challenge-improve-software-risk-management
ftp://ftp.software.ibm.com/software/industries/G507-1393-00.pdf
https://www.getzephyr.com/insights/how-overcome-challenges-reproducing-non-reproducible-defects
https://reprage.com/post/how-to-automatically-reproducing-software-errors
https://www.softwaretestingmaterial.com/bug-life-cycle/
https://www.appnovation.com/blog/requirement-gathering-process-challenges-how-overcome-them
https://www.martinfowler.com/articles/agileOffshore.html
https://hackernoon.com/still-using-gitflow-what-about-a-simpler-alternative-74aa9a46b9a3
