# Basic Concept

The best learning way is by practising it, try some command see the output and get used to it. So Let's start now.

## Create a go mod

In every go project you need to have a `go.mod` file as a dependency manager for your code.

Create your project directory first and change directory into it

```shell
$ mkdir helloword
$ cd my helloworld
```

Create your go mod file by this commands
```shell
$ go mod init helloworld
```

```
$ ls -al

  drwxr-xr-x   3 mir  staff    96 Nov  6 12:39 .
  drwxr-xr-x+ 65 mir  staff  2080 Nov  6 12:39 ..
  -rw-r--r--   1 mir  staff    27 Nov  6 11:04 go.mod
```
your `go.mod` will created under your directory.
And now you are ready to use gogen command.

---

## How to use gogen commands

Gogen works using CLI command. 
Gogen has many command to help you setup your boiler plate code. You don't have to remember all of it. Each time you forgot what command you should call, you can type this. 

```shell
$ gogen
```
You will see this

```shell
Gogen v0.0.1
Try one of this command to learn how to use it
  gogen error
  gogen application
  gogen crud
  gogen enum
  gogen repository
  gogen gateway
  gogen domain
  gogen service
  gogen test
  gogen entity
  gogen valuestring
  gogen controller
  gogen usecase
  gogen valueobject
```

It will help remind you about which command you should call. In order to learn more detail about what the command can do, you can try run on of command, for the example now we can try `gogen usecase`

```shell
$ gogen usecase
```

The output is
```shell

   # Create a new usecase
   gogen usecase RunOrderCreate
     'RunOrderCreate' is an usecase name

```
That output is telling you about how to call the `gogen usecase` command. Try run it now and see what happen. 

```shell
$ gogen usecase RunOrderCreate
```

you may got something like

```shell
.gogen/domain is not found. Please run 'gogen domain' first
```

The message may vary for each command. You got this message because each gogen command is depend on the other commands.

## Gogen command dependency

To see more detail about the gogen command dependency, i will share it in the next docs.

As we learn before, we fail to run the `gogen usecase` because usecase is need to know which domain should have it. So you need to run the `gogen domain` command first. Let us learn how `gogen domain`s works by call this

```shell
$ gogen domain
```

the output
```shell
   # Initiate gogen project with default input. You may change later under .gogen folder
   gogen domain mydomain
     'mydomain' is a your domain name
```

Now run the `gogen domain` commands

```shell
$ gogen domain mydomain
```

Now you see some folders and files are created under your `helloworld` project

```shell
$ ls -al

  drwxr-xr-x  11 mir  staff   352 Nov  6 11:27 .
  drwxr-xr-x+ 65 mir  staff  2080 Nov  6 11:27 ..
  -rw-r--r--   1 mir  staff    68 Nov  6 11:27 .gitignore
  drwxr-xr-x   3 mir  staff    96 Nov  6 11:27 .gogen
  -rw-r--r--   1 mir  staff   509 Nov  6 11:27 Dockerfile
  -rw-r--r--   1 mir  staff    14 Nov  6 11:27 README.md
  -rw-r--r--   1 mir  staff   692 Nov  6 11:27 config.json
  -rw-r--r--   1 mir  staff   692 Nov  6 11:27 config.sample.json
  -rw-r--r--   1 mir  staff   662 Nov  6 11:27 docker-compose.yml
  drwxr-xr-x   3 mir  staff    96 Nov  6 11:27 domain_mydomain
  -rw-r--r--   1 mir  staff    27 Nov  6 11:04 go.mod

```

You can back run the `gogen usecase` again and see what happen now
```shell
$ gogen usecase RunOrderCreate
```

Why the usecase name is really weird? see the usecase naming convention in the next doc 

I use a `tree` command to see all folder and file created. If you cannot run the `tree`, you may try to install the the `tree` command first (Just googling it by using keyword `tree bash` ) or just using your IDE to see the folder and files created.  


```shell
$ tree domain_mydomain

domain_mydomain
├── README.md
└── usecase
    └── runordercreate
        ├── README.md
        ├── inport.go
        ├── interactor.go
        └── outport.go
```

So now the usecase is created for you. But what is a `domain` ? and what is a `usecase` ? You can learn more about a concept in the next document

But, for now, let pretend you already understand and just see a domain and usecase as a folder and code structure management in our project. Let use our intuition to explore what you already have now and guess what it used to.

Let's summarize what we have done now.

1. Create a specific folder for your project
1. Create a `go.mod` file to start working with golang
1. See all gogen command by call a simple command `gogen`
1. See specific how to use a command by call command `gogen <one of the command>`
1. Create a domain by call a command `gogen domain <your domain name>`
1. Create a usecase by call a command `gogen usecase <your usecase name>`
