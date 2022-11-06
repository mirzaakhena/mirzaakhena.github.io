# How to install

Before you are doing those step below, make sure that already have golang installed in your system. Basically there are several ways to create a gogen executable.

## Direct install from github repo

Run this command to install gogen directly into your system
```shell
$ go install -v github.com/mirzaakhena/gogen@latest
```

Then try to run 

```shell
$ gogen
```
If you see
```
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

And gogen is ready to use.

---


But if you get something like
``` shell
command not found: gogen
``` 
Then you need to add the gogen in your path system. If you are working on mac or linux you can Open file `~/.bash_profile` then add

```shell
PATH=$PATH:/usr/local/go/bin
PATH=$PATH:$HOME/go/bin

export PATH
```

then run this to update your path system based on the changes
```shell
$ source ~/.bash_profile
```

and try the `gogen` command again. It should working now

---

## Build your own gogen executable from the source code

This is the alternative way if you somehow cannot install the gogen into your system and you need the gogen immediately.

Git clone gogen from github to your local 

```shell
$ git clone github.com/mirzaakhena/gogen
```

change directory to it

```shell
$ cd gogen/
```

then build the executable directly in the root folder of gogen

```shell
$ go build
```

you will get the executable file

```shell
$ ls -al

    672 .
   2880 ..
    416 .git
     13 .gitignore
   1102 LICENCE
  22581 README.md
    672 command
    264 go.mod
   2603 go.sum
6349730 gogen  <---- the executable file
   2193 main.go
    512 utils
```

or if you are on Windows you will see the `gogen.exe`

Each time you create your code project, you need to have this executable in your source code project. Copy paste the builded executable file into your project. Then you can call the gogen this way (make sure to include the `./`)

```shell
$ ./gogen
```

or if you in windows

```shell
$ ./gogen.exe
```

If you create gogen executable manually this this, please remember to always to put the gogen executable into `.gitignore` file so it will ignored in your git source code
```.gitignore
./gogen     # for mac or linux
./gogen.exe # for windows
```

---

## Create a executable for cross platform

If you want to distribute the gogen executable to your friend or your another laptop with different OS you can try this.

Create for a windows
```shell
$ GOOS=windows GOARCH=amd64 go build
```

Create for a mac
```shell
$ GOOS=darwin  GOARCH=amd64 go build
```

