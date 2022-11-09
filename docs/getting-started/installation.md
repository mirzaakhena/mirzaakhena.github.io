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

  drwxr-xr-x  20 mir  staff      640 Nov  6 10:31 .
  drwxr-xr-x  90 mir  staff     2880 Nov  4 09:55 ..
  drwxr-xr-x  13 mir  staff      416 Nov  6 10:53 .git
  -rw-r--r--   1 mir  staff       13 May 27 20:12 .gitignore
  -rw-r--r--   1 mir  staff     1102 Jun  7 06:13 LICENCE
  -rw-r--r--   1 mir  staff    22581 Oct 27 22:09 README.md
  drwxr-xr-x  21 mir  staff      672 Nov  2 19:44 command
  -rw-r--r--   1 mir  staff      264 Nov  3 07:51 go.mod
  -rw-r--r--   1 mir  staff     2603 Nov  3 07:51 go.sum
  -rwxr-xr-x   1 mir  staff  6296658 Nov  6 11:41 gogen  <-- the executable file
  -rw-r--r--   1 mir  staff     2115 Nov  6 10:43 main.go
  drwxr-xr-x  16 mir  staff      512 Nov  2 17:56 utils
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

