---
layout: post
title: "Automated Testing: Functional Testing"
date: 2017-11-03
author: Jerome Bridge
excerpt: "Challenges and trade-offs to automating functional testing."
tags: [sdlc, automated testing]
---
<iframe width="854" height="480" src="https://www.youtube.com/embed/9WZT0GcXDO8" frameborder="0" gesture="media" allowfullscreen></iframe>

There are many different aspects of software that can be tested
and different approaches that can be used to perform those tests.
Each approach to testing will have certain advantages and
disadvantages. Each approach will also present different challenges
to us when we try to automate.

In this article, I would like to discuss the approaches we can use
to test software functionality and the challenges we will face
when we try to automate each approach.

<figure>
  <img src="/assets/img/post/automated-testing-functional/meme-testing-is-for-wimps-real-men-test-in-production.jpg" />
</figure>

Types Of Testing
---
Software testing can be broadly divided between functional testing
and non-functional testing.

<figure>
  <img src="/assets/img/post/automated-testing-functional/functional-and-non-functional-testing.png" />
</figure>

**Functional Testing**. The goal of functional testing is to ensure the software satisfies its business requirements.
This could include user screens, integrations, user commands, or business processes.

**Non-Functional Testing**. The goal of non-functional testing is to ensure the software you deliver provides a "good" user experience.
Some examples of non-functional testing include performance testing, security testing, usability testing,
and load testing.

Functional Testing
---
I want to focus on the approaches available to us for testing software functionality.

There are four types of functional testing that can be performed against software.
Unit Testing, Integration Testing, System Testing, and Acceptance Testing.

<figure>
  <img src="/assets/img/post/automated-testing-functional/functional-testing-types.jpg" />
</figure>

### Unit Tests
Unit Tests are designed to test the smallest testable units of the software.
This could be a method, class, or procedure that takes some input and produces some output.
Unit Tests must be able to run completely self contained with no external dependencies such
as databases or web services.

### Integration Tests
Integration Tests are designed to test multiple units / modules / subsystems together. The
goal of integration tests is to expose problems with the interaction of these components.
Examples of integration tests would be validating the API or Web Interface of an application
while connected to it's database.

<figure>
  <img src="/assets/img/post/automated-testing-functional/meme-unit-tests-passing-no-integration-tests.jpg" />
</figure>

### System Tests
System Tests are designed to test the complete and fully integrated software product. Unlike
Integration Tests, the application will be connected with downstream and upstream systems that
we typically have less or no control over. An example of this type of testing might be an
application that sends messages or files to a bank or accepts messages or files from a third
party application or web site. The primary focus of system testing is to expose problems in
the interaction between the application and the downstream and upstream systems.

### Acceptance Tests
Acceptance Tests are also designed to test the complete and fully integrated software product.
The only difference between system tests and acceptance tests is the goal. The goal of acceptance
tests is to validate the functionality of the software product from a user's perspective.


Advantages / Disadvantages
----
Each approach to functional testing provides us with advantages and disadvantages.


### Unit Tests

<u>Advantages</u>
1. **Small**. Unit Tests are small because they are only responsible for providing
the inputs and validating the output of a single method, class, or procedure.
2. **Fast**. Unit Tests are isolated and do not depend on external resources to run
which allows them to execute quickly.
3. **Portable**. Because Unit Tests run in isolation they can be run on any machine
including the developer's machine.

<u>Disadvantages</u>
1. **Technical**. Unit Tests tend to be low level and technical in nature. They
are primarily only of interest to the developer.
2. **User Unfriendly**. Unit Tests do not translate well to the end user so it is
not clear to the user what the tests are responsible for.


### Integration Tests

<u>Advantages</u>
1. **Integration**. Integration Tests allow us to test the interaction of the
software's "internal units".
2. **Portable**. Integration Tests do not test the interaction of the "internal units"
with external downstream and upstream systems which in turn allows these tests
to be run on any machine.
3. **User Friendly**. Integration Tests provide a more functional view of the software
then Unit Tests which translates better to the end user.

<u>Disadvantages</u>
1. **User Unfriendly**. Integration Tests are not run in a fully integrated environment,
they will still lack some functionality an end user might expect to see the final delivery
of a software product.

### System Tests

<u>Advantages</u>
1. **Fully Integrated**. System Tests give developers the first opportunity to observe
the fully integrated software product with external peripheral systems.

<u>Disadvantages</u>
1. **Heavy**. System Tests can ONLY be run in a fully integrated environment. This
limitation makes these tests unavailable to the developer on his local machine.
2. **Slow**. System Tests tend to be time consuming and are not as easy to repeat as
Unit Tests and Integration Tests.

<figure>
  <img src="/assets/img/post/automated-testing-functional/meme-wating-for-system-test-to-start.jpg" />
</figure>


### Acceptance Tests

<u>Advantages</u>
1. **Fully Integrated**. Acceptance Tests give users the first opportunity to observe
the fully integrated software product.

<u>Disadvantages</u>

Acceptance Tests share all the same disadvantages of System Tests.


## Challenges Of Automating
Each functional testing approach presents unique challenges to implementing automation.

### Unit Tests
**Software Architecture**. Unit Tests require that our software components be designed
in a way that they can be executed without external dependencies present (such as a
database, web services, or the browser).

**Development Standards**. Unit Tests are primarily the concern of developers. You
must establish standards and guidelines for developers to write Unit Tests,
otherwise they will not write them.

<figure>
  <img src="/assets/img/post/automated-testing-functional/meme-unit-testing-not-today.jpg" />
</figure>


### Integration Tests
**Test Fixture**. In order to run integration tests, the system must be put into a state that it can be tested.
This could include populating database tables, calling web services, or interacting with the browser.
The source code responsible for putting the system into a testable state is known as the "Test Fixture".
Being able to effectively and efficiently write "Test Fixture" code is the biggest challenge and the key to
automating integration tests.


### System Tests And Acceptance Tests
**Enterprise Testing Tool**. Automating System Tests and Acceptance Tests will require an enterprise
testing tool that can coordinate the software components and downstream / upstream peripheral components.

**Test Scripts**. The test scripts developed in these tools are very fragile and sensitive to changes because
they are so time consuming to run.

Conclusions
----
There are two types of testing that can be performed against a software product: **functional** and **non-functional**

We use four different approaches to functional testing because each approach brings its own trade-offs and automation challenges.

**Unit Tests** are inexpensive, run fast, and run anywhere, however they do not translate well to the end user and
they require the software to be designed in a way that allows them to be executed.

**Integration Tests** provide a functional view of the software to the end user and can be run from anywhere,
however they are more expensive to setup and run than unit tests.

**System Tests** and **Acceptance Tests** provide a fully integrated look at the software product, however
automating these tests is extremely slow and fragile.

At LifeOps <img style="display: inline-block;" src="/assets/img/favicon/favicon.png" /> we use automated testing to deliver functional, stable software. We understand the challenges
that arise from using automated testing and we design our software to address those challenges head on.
