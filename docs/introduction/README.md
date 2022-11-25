---
sidebar: auto
---

# Introduction

## What is Gogen ?

Gogen is a Go progressive scaffolding tools for creating a bunch of boiler plate code which follow [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) and [Domain Driven Design](https://martinfowler.com/tags/domain%20driven%20design.html) concept and principle. So you can organize your code structure better and maintainable.

It is **progressive** because we can generate a Go code and we can inject some code in the middle of development process. It also has a simple and consistent structure so everyone can intuitively know where and what each folder (package) does.

## Common Existing Problem
Currently Go has no standard structure code layout. Some people initiate to create it like [project-layout](https://github.com/golang-standards/project-layout) which is a good things but it does not follow a common design principle. It just a organization folder used by common people based on Go best practise. Developer still enforce to applied the design principle by it self. Writing a organized code and applied a design principle at the same time require a lot of reasearch, trial and error.

If you are a beginner on learning a programming language especially Go, Gogen is to much overkill. For very simple project, simple tools or just an simple service, you may try with simple layout instead. 

When you first start your Go project you need to create a skeleton code and consistent structure. As your project grows keep in mind that it'll be important to make sure your code is well structured otherwise you'll end up with a messy code with lots of hidden dependencies and global state. When you have more people working on the project you'll need even more structure. That's when it's important to introduce a common way to manage.

Every project in every company has their own standard structure code layout. Every new joiners will always follow their "ancestor" developer. If you already have messy code structure in the first place, then your code will become more messy if not managed well.

## What Gogen Solve 
Gogen is offering a better code structure for your project so you can maintain and increase productivity in every development phase.
It gives you ready to use structure for you to work. So you can focus on the business process.

## Who need this tools
* Lazy developer who want to have consistent structure
* Tech company who want a standard code for their project 

## Learning Process 
There are two kind of learning process approach. The first one is you learn from fundamental and the second one is you learning by trying to achieve some goal. Both of this approach require a guideline and mentor. 

- Learning from the fundamental
    have no direction
    you don't have a motivation or knowledge where we should use or do something
    tobe an expert because you need to know the detail,
    learning from detail component,
    learning specific things,
    know the basic knowledge,
    not know the purpose,
    focus to the process,
    slow,
    learn from theoretically,

- learning with specific goal
    you have a goal
    you have motivatation to achieve a goal
    to be a user because you don't understand the detail,
    learning from the template,
    learning general,
    not very understand the basic knowledge,
    know the purpose,
    focus to the goal,
    fast,
    learn from best practice,

gogen apply the second way. 
The reason is you have limited time to learn all the up-to-date technology
you need an accelerated way to learn. Learning from working sample is easier than writing code from the scratch
in the future we even no need to write any of code we just command the AI to write it for us
we will focus on logic only not to "how to use and write the infrastructure code"