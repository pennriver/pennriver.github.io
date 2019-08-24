---
layout: post
title:  "Implementing Policy Admin: 5 Mistakes You Are Making"
author: "Jerome Bridge"
excerpt: "These are the most common mistakes you are making when implementing an Insurance Policy Administration System."
date: 2018-10-04
project: true
tags: [sdlc, automated testing, devops, lifeops, agile, new technology]
---

<figure>
  <img src="/assets/img/post/mistakes-you-are-making/logo2.png" />
</figure>

# The Mythical Man-Month
Anyone that has lived through a complicated software implementation knows
the difficulties of working in large teams to accomplish a "common"
goal. Complicated software projects tend to fall behind, stray from
the original scope, or become unstable as more complexity is added.

    "As time passes, the system becomes less and less well-ordered.
    Sooner or later the fixing cease to gain any ground. Each forward
    step is matched by a backward one. Although in principle usable forever,
    the system has worn out as a base for progress. ...A brand-new,
    from-the-ground-up redesign is necessary."

    ― Frederick P. Brooks Jr., The Mythical Man-Month: Essays on Software Engineering

At some point these projects effectively become crippled. Making changes
and advancing becomes cost prohibitive and the solutions available only
seem to make things worse.

Our team at LifeOps has implemented many projects over the years and we have
seen companies make some of the same costly mistakes. If you are implementing
Insurance Policy Administration,

you are probably making these **5 mistakes**:


----

# 1 - Users don't know what they want

<figure>
  <img src="/assets/img/post/mistakes-you-are-making/meme4.jpg" />
</figure>

Generally speaking people know **what they don't want** more than they
know **what they want**. It's much easier for them to
express their thoughts when presented with something to reference.

<figure>
  <img src="/assets/img/post/mistakes-you-are-making/meme14.jpg" />
</figure>

It's better to put something in front of the user quickly (**even if it's wrong**)
in order to get **feedback** quickly.

<h2>LifeOps Advantage <img style="display: inline;" src="/assets/img/post/mistakes-you-are-making/logo-small.png"></h2>

**LifeOps Lab** provides a collaboration tool to help get your people on track
by prototyping functionality and business scenarios.

1. Create scenarios using our **Event Based** lab trial system
2. Review results with user and get **Feedback**
3. Define **Expected Results** with your users
4. **Label** and link to **Issue Tracking** for documentation

<figure>
  <img src="/assets/img/post/mistakes-you-are-making/screenshot1.png" />
  <figcaption><i>figure 1</i> Lab Trial Overview Page</figcaption>
</figure>


----

# 2 - Your implementation is brittle

<figure>
  <img src="/assets/img/post/mistakes-you-are-making/meme15.png" />
</figure>

Policy Admin has many interconnected moving parts. As
features are added and bugs are fixed, the code can become very easy
to break. Not only that, but it can be difficult or impossible for
a developer to even know he has broken something when a change is made.

The only way to manage this inevitable **increased complexity** is with
sound **automated testing**. These test must be easily accessible and
capable of running for anyone (developer, business analyst, manager, etc.)

<h2>LifeOps Advantage <img style="display: inline;" src="/assets/img/post/mistakes-you-are-making/logo-small.png"></h2>

The **LifeOps Lab** provides a collaboration tool that allows developers
to run integration tests before changes are committed. This allows for
unprecedented stability because it DOES NOT require a fully
integrated test environment to execute.

1. Run all lab trials at **Build Time**
2. Lab Trials are **Portable**. Any team member can run them.
3. **Replay** Lab Trials as often as you need to fix issues.

<figure>
  <img src="/assets/img/post/mistakes-you-are-making/screenshot3.png" />
  <figcaption><i>figure 2</i> Lab Trials Page</figcaption>
</figure>


----


# 3 - Your wasting valuable time

    “Adding manpower to a late software project, makes it later.”

    ― Frederick P. Brooks Jr., The Mythical Man-Month: Essays on Software

When you realize that making the working environment for your people as
efficient as possible is the primary way to make gains on a project you
will understand why **avoiding wasted time is so important**.

A lot of time is **wasted** on projects:
1. Reproducing Defects / Determining Root Causes
2. Troubleshooting Environment Issues
3. Working on **Extra features** or **Unneeded features**
4. **Relearning** solutions to already solved problems


 These tasks should be minimized and streamlined.

<h2>LifeOps Advantage <img style="display: inline;" src="/assets/img/post/mistakes-you-are-making/logo-small.png"></h2>

**LifeOps Labs** provides a great framework for developers and business analysts to
reproduce defects effortlessly. Any policy can be **exported to a lab trial** which
can be used by the developer to reproduce defects discovered in production or
by QA.

<figure>
  <img src="/assets/img/post/mistakes-you-are-making/screenshot4.png" />
  <figcaption><i>figure 3</i> New Lab Trial (From Policy)</figcaption>
</figure>

**LifeOps Lab** minimizes wasted time reproducing defects by providing **replay** capability to
the developer. This allows the developer to replay the user's actions in his
own development environment providing valuable tracing feedback for each event.

Once these events are replayed and the issue is fixed, the **LifeOps Lab** keeps
the scenario to ensure future changes do not break the developer's fix.
This greatly reduces time spent ensuring future changes don't break existing
functionality.

<figure>
  <img src="/assets/img/post/mistakes-you-are-making/screenshot5.png" />
  <figcaption><i>figure 4</i> Lab Trial Execution Plan</figcaption>
</figure>



----



# 4 - Too much hacking

<figure>
  <img src="/assets/img/post/mistakes-you-are-making/meme15.jpg" />
</figure>

Configuring new products in your Policy Admin software should be as
**simple** and straightforward as possible. Unfortunately, business
processes tend to have many nuances specific to your own needs. For the majority
of software packages this requires you to shoehorn functionality or
write complicated "workaround" code to accommodate your needs.



<h2>LifeOps Advantage <img style="display: inline;" src="/assets/img/post/mistakes-you-are-making/logo-small.png"></h2>

The **LifeOps Framework** emphasizes simplicity of configuration and
allows you to plugin or extend only the parts necessary to support
your products and business processes.

The **LifeOps Framework** provides a registry of **calculators** that can
be overridden through the LifeOps API.

<figure>
  <img src="/assets/img/post/mistakes-you-are-making/screenshot6.png" />
  <figcaption><i>figure 5</i> LifeOps Calculator Registry</figcaption>
</figure>




# 5 - You are recreating your legacy system

<figure>
  <img src="/assets/img/post/mistakes-you-are-making/meme3.jpg" />
</figure>

It can be hard for people to imagine how functionality might work
with new and unfamiliar technology. Unfortunately, this tends to
lead people into recreating legacy processes that are no longer
ideal.

This is a variation of **Unneeded features** because the user
may not know why a feature existed only that it existed in the legacy
system.

<h2>LifeOps Advantage <img style="display: inline;" src="/assets/img/post/mistakes-you-are-making/logo-small.png"></h2>

The **LifeOps Lab** provides a unique **Event Based** framework to
illustrate scenarios to users and get **feedback**. This is an invaluable
tool combined with well managed development process that links **LifeOps Labs**
to valid business scenarios.

<figure>
  <img src="/assets/img/post/mistakes-you-are-making/screenshot7.png" />
  <figcaption><i>figure 6</i> LifeOps Lab</figcaption>
</figure>

The interactive **LifeOps Bot** provides a new and unique way to tackle many
Policy Admin business processes such as new business, suspense,
in-force requirements, disbursement approvals, and other common workflows.

<figure>
  <img src="/assets/img/post/mistakes-you-are-making/screenshot2.png" />
  <figcaption><i>figure 7</i> LifeOps Chat Bot</figcaption>
</figure>




----


# Conclusions
Implementing Policy Admin that meets your needs can be difficult. These are
the most common traps we see people fall into when taking on the endeavour.

At **LifeOps** we provide Policy Admin software that empowers your team to
work effectively and collaborate with each other.

The powerful combination of the **LifeOps Lab**, **LifeOps Framework**, and
**LifeOps Bot** can help spark new thoughts and ideas within your team that would be
difficult or impossible with other software packages.

If you'd like to find out more about how LifeOps can help you avoid
these common problems visit http://lops.io
