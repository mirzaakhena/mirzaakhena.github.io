---
sidebar: auto
---

# Introduction

## What is Gogen ?

Gogen is a GO dynamic scaffolding tools for creating a bunch of boiler plate code which follow [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) and [Domain Driven Design](https://martinfowler.com/tags/domain%20driven%20design.html) concept and principle. So you can organize your code structure better and maintanable

It is **dynamic** because we can generate a GO code and we can inject some code during development process. It also has a simple and consistent structure so everyone can intuitively know where and what each folder (package) does.

## Common Existing Problem
Currently GO has no standard structure code layout. Some people initiate to create it like [project-layout](https://github.com/golang-standards/project-layout) which is a good things but it does not follow a common design principle. It just a organization folder used by common people based on go best practise. Developer still enforce to applied the design principle by it self. Writing a organized code and applied a design principle at the same time require a knowledge and experiance. 

When you first start your project you need to create a skeleton code and consistent structure. If you are trying to learn GO or if you are building a PoC or a simple project for yourself this project layout is an overkill. Start with something really simple instead (a single main.go file and go.mod is more than enough). As your project grows keep in mind that it'll be important to make sure your code is well structured otherwise you'll end up with a messy code with lots of hidden dependencies and global state. When you have more people working on the project you'll need even more structure. That's when it's important to introduce a common way to manage.

Every project in every company has their own standard structure code layout. Every new joiners will always follow their "ancestor" developer. If you have messy code structure in the first place, then your code will become more messy if not managed well

## What Gogen Solve 
Gogen is offering a better code structure for your project so you can maintain and increase productivity in every development phase.
It gives you ready to use structure for you to work. So you can focus on the business process.

## Who need this tools
* Lazy developer who want to have consistent structure
* Tech company who want a standard code for their project 

## Benefit
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

## Applied Principle 
"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

## Learning Process 
There are two ways to learn

- learning from the fundamental
    tobe an expert,
    learning from detail component,
    learning specific things,
    know the basic knowledge,
    not know the purpose,
    focus to the process,
    slow,
    learn from theoretically,

- learning from middle of project
    to be a user,
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