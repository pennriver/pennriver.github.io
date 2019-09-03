---
layout: post
title:  "Docker Introduction"
author: "Jerome Bridge"
date:   2019-02-08
excerpt: "Introduction to Docker, a tool to create, deploy, and run applications in containers."
tag: [devops, lifeops, new technology, docker]
---

<figure>
  <img src="/assets/img/post/docker-introduction/docker-logo.png" />
</figure>

# What is Docker?
Docker is a tool that provides operating system level virtualization (also known as **"containerization"**)

<figure>
  <img src="/assets/img/post/docker-introduction/docker-container.png" />
</figure>


## What Does This Mean?
Virtualization has been around for some time now by popular software packages like **VMWare** and **Oracle VirtualBox**.
Unlike Docker, these virtualization tools provide "hardware level" virtualization.

<figure>
  <img src="/assets/img/post/docker-introduction/docker-vs-vmware.png" />
</figure>

In fact **containerization** has also been around for sometime as well. The most popular example of
this being the Java Virtual Machine.

Think of Docker as providing you virtualization similar to what you would get with `VMWare`, but running
similar to the way you run Java applications.

## Why Does This Matter?

<figure>
  <img src="/assets/img/post/docker-introduction/container-hardware-comparison.png" />
</figure>

### Hardware Virtualization is "Heavy".
What do we mean by that?

It comes down to how the physical resources are managed on the machine.

* The **Virtual Machine** model runs a complete clone of each operating system
and must allocate physical resources to each one of these.
* The 'Docker' (container) model manages all resources with a single operating
system and simulates the operating system in an isolated space (container).

<figure>
  <img src="/assets/img/post/docker-introduction/docker-containerized-and-vm-transparent-bg.png" />
</figure>

### Hardware Virtualization Has Slow Provisioning
The **Virtual Machine** model requires the entire operating system to start and initialize
the virtual resources. This makes initiating new virtual machines much slower
than starting new Docker containers.

### Hardware Virtualization Limits Performance
Because **Virtual Machines** must divide the physical resources of the machine
there will be artificial limits on the performance you can achieve in each
virtual machine.

There is no such limitation on containers because ultimately all resources
are available to the single operating system managing them.

# Sounds Great! How Do I Get Started?
Technically the only thing you need to get up an running is the Docker
service that runs on your Linux host machine. But before we do that, let's talk
about a few of the key Docker terms and concepts.

<figure>
  <img src="/assets/img/post/docker-introduction/architecture.png" />
</figure>

## Image Vs. Container
In Docker terminology there is an **image** and a **container**. In programming terms,
think of the image as the class and the container as an instance of that class.
You can run many containers of the same image on your local machine.

## Registry
Docker stores all images in a registry that it will download for you automatically
when you try to start a new container on your local machine.

## Dockerfile
If you want to **create your own image**, you will use a Docker configuration file
called a Dockerfile in order to define it. Docker is able to compile this file
into an image and store it in the registry.

<figure>
  <img src="/assets/img/post/docker-introduction/Dockerfile.png" />
</figure>

## Volumes
When you run a container in Docker you can attach volumes to it. You could
think of volumes are **shared folders** between your container and host machine.
Data on the volumes will **persist** even after the container is shutdown unlike
all other data on the container which will be lost after the container is shutdown.

<figure>
  <img src="/assets/img/post/docker-introduction/docker-volumes.jpeg" />
</figure>

# Finally! Let's Really Get Started
## Download And Install Docker
If you are running **Ubuntu** I've provided instructions and commands to install
the latest stable version of Docker. If you aren't running Ubuntu, you can find
instructions here: https://docs.docker.com/install

### Ubuntu Instructions
Install Docker => https://docs.docker.com/install/linux/docker-ce/ubuntu/

1. Uninstall old versions
    ```
    sudo apt-get remove docker docker-engine docker.io
    ```

2. Install Dependencies
    ```
    sudo apt-get update && \
    sudo apt-get install \
      apt-transport-https \
      ca-certificates \
      curl \
      software-properties-common
    ```
3. Install
    ```
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add - && \
    sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" && \
    sudo apt-get update && \
    sudo apt-get install docker-ce
    ```

## Run Our First Docker Container
Now that we have Docker installed, let's run our first Docker container.

Open the command line terminal and run the following command:
```
docker run hello-world
```

<figure>
  <img src="/assets/img/post/docker-introduction/docker-hello-world.gif" />
</figure>

### What Happened?
Docker will perform the following actions when you give it this command.
1. Check if you have the **hello-world** image downloaded locally.
2. If you do not, it will download the image from the **image repository**
3. Docker will start a new container using the **hello-world** image
4. The container will execute the instructions defined in the image
5. In this case, the image is configured to print a hello world message

## Build Our First Docker Image
### Create Dockerfile
1. Create a file on your machine and name id **Dockerfile**

2. Put the following contents into this file:
    ```
    FROM alpine:latest

    CMD ["echo", "hello world!!"]
    ```

### Build Image
Build your **Dockerfile** into an image
```
docker build -t local/hello-world .
```

<figure>
  <img src="/assets/img/post/docker-introduction/docker-build.gif" />
</figure>

### Run Container
Run your new image as a container on your local machine.
```
docker run local/hello-world
```

<figure>
  <img src="/assets/img/post/docker-introduction/docker-run-dockerfile.gif" />
</figure>



# Further Reading
[Get Started](https://docs.docker.com/get-started/): Docker Getting Started Tutorial




# References
https://opensource.com/life/15/5/kdenlive-titles
https://opensource.com/tags/multimedia-makers
https://jaxenter.com/containerization-vs-virtualization-docker-introduction-120562.html
https://en.wikipedia.org/wiki/Docker_(software)#History
https://www.techopedia.com/7/31288/technology-trends/how-is-containerization-different-from-virtualization
